


var editor;
// Hook up ACE editor to all textareas with data-editor attribute
function txtareaClick() {
        // Make Editor-Screen equal to height and width of textarea
        var textarea = $('#txtarea');
        var editScr = $('#Editor-Screen');
        var editDiv = $('#editArea');
        //editScr.attr({
        //     width: textarea.width(),
        //     height: textarea.height(),
        // });
        editScr.css("width", textarea.width());
        editScr.css("height", textarea.height());
        console.log(editScr);
        // Bring textarea into the editArea
        // TBD: Make textarea into 100%

        textarea.css('display', 'none');
        editScr.css('display', 'block');
        editor = ace.edit(editDiv[0]);
        editor.renderer.setShowGutter(true);
        editor.getSession().setValue(textarea.val());
        editor.getSession().setMode("ace/mode/javascript");
        editor.setTheme("ace/theme/tomorrow");
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        console.log(editor);
        // copy back to textarea on form submit...
        // textarea.closest('form').submit(function () {
        //     textarea.val(editor.getSession().getValue());
        // })
};



function appendStringInEditor(appendOp){
    var curText = editor.getSession().getValue();
    switch (appendOp) {
        case 'ifCond':
            textString= "if (i==1) {\n\n}\n"
            break;
        case 'ifelseCond':
            textString= "if (i==1) {\n\n} else {\n\n}\n"
            break;
        case 'forLoop':
            textString= "for(i=0;i<10;i++){\n\n}\n"
            break;
        case 'varAssign':
            textString= "var i=1;\n"
            break;
        default:
            textString= "";
    }
    editor.getSession().setValue(curText + textString);
}
function ifbtnClick() {
    appendStringInEditor('ifCond');
}
function ifelsebtnClick() {
    appendStringInEditor('ifelseCond');
}
function forbtnClick() {
    appendStringInEditor('forLoop');
}
function varbtnClick() {
    appendStringInEditor('varAssign');
}

function saveClick() {
    var textarea = $('#txtarea');
    var editScr = $('#Editor-Screen');
    var annot=editor.getSession().getAnnotations();
    console.log(annot);
    for (i=0;i<annot.length;i++){
        if(annot[i].type == 'error'){
            window.alert('Syntax errors are present\n Please recheck the code');
            return;
        }

    }
    textarea.val(editor.getSession().getValue());
    editScr.css('display', 'none');
    textarea.css('display', 'block');

}

function discardClick() {
    var textarea = $('#txtarea');
    var editScr = $('#Editor-Screen');
    editScr.css('display', 'none');
    textarea.css('display', 'block');

}
