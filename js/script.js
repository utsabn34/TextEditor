// JavaScript Document
var editor=document.getElementById("editor");

//change font style
function changeFont(txt,change) {
		var editor=document.getElementById(txt);
		//for bold
		if (change == 'bold') {
            if (editor.style.fontWeight == 'bold')
                editor.style.fontWeight = 'normal';
            else
                editor.style.fontWeight = 'bold';
        }
		//for italic
        else if (change == 'italic') {
            if (editor.style.fontStyle == 'italic')
                editor.style.fontStyle = 'normal';
            else
                editor.style.fontStyle = 'italic';
        }
		//for underline
        else if (change=='underline'){
            if (editor.style.textDecoration == 'underline')
                editor.style.textDecoration = 'none';
            else
                editor.style.textDecoration = 'underline';
        }
		//for fontsize
		else if (change=='fontSize'){
			var fsize=document.getElementById("fsize");
			var fontSize=fsize.value;
			editor.style.fontSize=fontSize+"px";
		}
		//for adjust right
		else if (change=='adjustR'){
			if(editor.style.textAlign=="right")
				editor.style.textAlign="left";
			else
				editor.style.textAlign="right";
		}
		//for adjust center
		else if (change=='adjustC'){
			if(editor.style.textAlign=="right" || editor.style.textAlign=="left" )
				editor.style.textAlign="center";
			else
				editor.style.textAlign="left";
		}
		//for adjust left
		else if (change=='adjustL'){
			editor.style.textAlign="left";
		}
		//for  font family
		else if (change=='fontFamily'){
			var fontFamily=document.getElementById("fontFamily");			
			var value=fontFamily.value;
			if(value==1){
				editor.style.fontFamily="Times New Roman";
			}
			if(value==2){
				editor.style.fontFamily="Arial";
			}
			if(value==3){
				editor.style.fontFamily="Verdana, Geneva, sans-serif";
			}
			
		}
    }
//select text from texarea
function ShowSelectionInsideTextarea(editor){

  var textComponent = document.getElementById(editor);
  var selectedText;
  // IE version
  if (document.selection != undefined)
  {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  }
  // Mozilla version
  else if (textComponent.selectionStart != undefined)
  {
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos)
  }
    
	console.log(selectedText);
}


