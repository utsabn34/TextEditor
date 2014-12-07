// JavaScript Document
var start=new Editor();

function frameOn(){
	frame.document.designMode='On';
	}

function Editor(){
	console.log("hello");
	//for bold
	var bold=document.getElementById("bold");
	bold.onclick=function(){
		frame.document.execCommand("bold",false,null);
	}
	//for italic
	var italic=document.getElementById("italic");
	italic.onclick=function(){
		frame.document.execCommand("italic",false,null);
	}
	//for underline
	var underline=document.getElementById("underline");
	underline.onclick=function(){
		frame.document.execCommand("underline",false,null);
	}
	//for text size
	var txtSize=document.getElementById("txtSize");
	txtSize.onclick=function(){
		var size=prompt("Enter text Size","");
		frame.document.execCommand("FontSize",false,size);
	}
	//for text color
	var txtColor=document.getElementById("txtColor");
	txtColor.onclick=function(){
		var color=prompt("Enter name of text Color or hexadecimal code ","");
		frame.document.execCommand("ForeColor",false,color);
	}
	//for horizontal line
	var hr=document.getElementById("hr");
	hr.onclick=function(){
		frame.document.execCommand("inserthorizontalrule",false,null);
	}
	//for unordered list
	var ul=document.getElementById("ul");
	ul.onclick=function(){
		frame.document.execCommand("InsertUnorderedList",false,"NewUL");
	}
	//for ordered list
	var ol=document.getElementById("ol");
	ol.onclick=function(){
		frame.document.execCommand("InsertOrderedList",false,"NewOL");
	}
	//for setting link
	var link=document.getElementById("link");
	link.onclick=function(){
		var Url=prompt("Enter link to insert ","http://");
		frame.document.execCommand("CreateLink",false,Url);
	}
	//for unlink
	var unlink=document.getElementById("unlink");
	unlink.onclick=function(){
		frame.document.execCommand("UnLink",false,null);
	}
	//to add image
	var img=document.getElementById("image");
	img.onclick=function(){
		var src=prompt("Enter Image Location ","");
		if(src!=null)
		frame.document.execCommand("insertimage",false,src);
	}
	
	var save=document.getElementById("save");
	save.onclick=function(){
		var theform=document.getElementById("myform");
		theform.elements("editor").value=windows.frames("frame").document.body.innerHTML;
		theform.submit();
	}
	
}

