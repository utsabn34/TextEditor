// JavaScript Document
var txtarea=document.getElementById("txtarea");
var editor=new Editor(txtarea);
editor.initialize();
editor.styling();


//console.log(txteditor);

function Editor(txtarea){
	var that = this;
	this.parent = (document.getElementsByClassName("txtEditor"))[0];	
	this.list = this.parent.children[0];
	this.ajax;
	this.bold;
	this.italic;
	this.underline;
	this.txtSize;
	this.txtColor;
	this.link;
	this.unlink;
	this.ol;
	this.uol;
	this.hr;
	this.save;
	this.load;
	this.txtarea=txtarea;
	
	
	this.initialize=function(){
		
		
		var title=document.createElement("div");
		title.className="title";
		title.innerHTML="Text Editor";
		title.style.color="#357f7c";
		title.style.textAlign="center";
		that.parent.appendChild(title);
		
		var menu=document.createElement("div");
		menu.className="menu";
		menu.style.backgroundColor="#f2f6f6";
		//creation of style button
		  //creation of unordered list
		var ul=document.createElement("ul");	 
		ul.style.listStyle="none";
		  //creation of list 
			//bold button creation
		var li1=document.createElement("li");
		that.bold=document.createElement("button");
		that.bold.id="bold";
		that.bold.style.backgroundImage="url(img/bold.png)";
		li1.appendChild(that.bold);
		ul.appendChild(li1);
		//italic button creation
		var li2=document.createElement("li");
		that.italic=document.createElement("button");
		that.italic.id="italic";
		that.italic.style.backgroundImage="url(img/italic.png)";
		li2.appendChild(that.italic);
		ul.appendChild(li2);
		//underline button creation
		var li3=document.createElement("li");
		that.underline=document.createElement("button");
		that.underline.id="underline";
		that.underline.style.backgroundImage="url(img/underline.png)";
		li3.appendChild(that.underline);
		ul.appendChild(li3);
		//text Size button creation
		var li4=document.createElement("li");
		that.txtSize=document.createElement("select");
		that.txtSize.id="txtSize";
		that.txtSize.value="2";
		//option 0
		var option0=document.createElement("option");
		option0.innerHTML="";
		option0.value="";
		that.txtSize.appendChild(option0);
		//option1
		var option1=document.createElement("option");
		option1.innerHTML="8";
		option1.value="1";
		that.txtSize.appendChild(option1);
		//option 2
		var option2=document.createElement("option");
		option2.innerHTML="10";
		option2.value="2";
		that.txtSize.appendChild(option2);
		//option 3
		var option3=document.createElement("option");
		option3.innerHTML="12";
		option3.value="3";
		that.txtSize.appendChild(option3);
		//option 4
		var option4=document.createElement("option");
		option4.innerHTML="14";
		option4.value="4";
		that.txtSize.appendChild(option4);
		//option 5
		var option5=document.createElement("option");
		option5.innerHTML="18";
		option5.value="5";
		that.txtSize.appendChild(option5);
		//option 6
		var option6=document.createElement("option");
		option6.innerHTML="24";
		option6.value="6";
		that.txtSize.appendChild(option6);
		//option 7
		var option7=document.createElement("option");
		option7.innerHTML="36";
		option7.value="7";
		that.txtSize.appendChild(option7);
		li4.appendChild(that.txtSize);
		ul.appendChild(li4);
		//creation of color chooser
		var li5=document.createElement("li");
		that.txtColor=document.createElement("input");
		that.txtColor.type="color";
		that.txtColor.id="txtcolor";
		that.txtColor.value="#FFF";
		li5.appendChild(that.txtColor);	
		ul.appendChild(li5);	
		//creation of link button
		var li6= document.createElement("li");
		that.link=document.createElement("button");
		that.link.id="link";
		that.link.style.backgroundImage="url(img/linked.png)";
		li6.appendChild(that.link);
		ul.appendChild(li6);
		//creation of unlink button
		var li7= document.createElement("li");
		that.unlink=document.createElement("button");
		that.unlink.id="unlink";
		that.unlink.style.backgroundImage="url(img/unlink.png)";
		li7.appendChild(that.unlink);
		ul.appendChild(li7);
		//creation of ol button
		var li8=document.createElement("li");
		that.ol=document.createElement("button");
		that.ol.id="ol";
		that.ol.style.backgroundImage="url(img/ol.png)";
		li8.appendChild(that.ol);
		ul.appendChild(li8);
		//creation of ul button
		var li9=document.createElement("li");
		that.uol=document.createElement("button");
		that.uol.id="ul";
		that.uol.style.backgroundImage="url(img/ul.png)";
		li9.appendChild(that.uol);
		ul.appendChild(li9);
		//creation of hr button
		var li10=document.createElement("li");
		that.hr=document.createElement("button");
		that.hr.id="hr";
		that.hr.style.backgroundImage="url(img/hr.png)";
		li10.appendChild(that.hr);
		ul.appendChild(li10);
		
		//save btn
		var li11=document.createElement("li");
		that.save=document.createElement("button");
		that.save.id="save";
		that.save.innerHTML="Save";
		li11.appendChild(that.save);
		ul.appendChild(li11);
		menu.appendChild(ul);
		that.parent.appendChild(menu);
		
		//load btn
		var li12=document.createElement("li");
		that.load=document.createElement("button");
		that.load.id="load";
		that.load.innerHTML="Load";
		li12.appendChild(that.load);
		ul.appendChild(li12);
		menu.appendChild(ul);
		that.parent.appendChild(menu);
		
		//line creation
		var line=document.createElement("div");
		line.className="line";
		line.style.backgroundImage="url(img/bar.jpg)";
		line.style.backgroundRepeat="repeat-x";
		that.parent.appendChild(line); 
		
		//main body creation
		var mainbdy=document.createElement("div");
		mainbdy.className="main-body";
		mainbdy.style.margin="0px auto";
		//creation of txtarea inside main-body
		//that.txtarea=document.createElement("textarea"); 
		//that.txtarea.id="editor";
		//that.txtarea.style.display="none";
		//that.txtarea.style.overflow="hidden";
		//mainbdy.appendChild(that.txtarea);
		//creation of iframe inside main-body
		that.frame=document.createElement("iframe");
		that.frame.id="frame";
		that.frame.name="frame";
		that.frame.style.background="#FFF";
		that.frame.style.border="#000 1px solid";
		that.frame.style.borderRadius="5px";
		mainbdy.appendChild(that.frame);
		that.parent.appendChild(mainbdy);
		//creation of footer
		var footer=document.createElement("div");
		footer.className="footer";
		footer.style.backgroundColor="#d2d9d3";
		this.parent.appendChild(footer);
		//end of tag creation
		frameOn();
		
		function frameOn(){
			frame.document.designMode='On';
		}
		
	}
	//assigning function to button	
		this.styling=function(){
			
			//for bold
			that.bold.onclick=function(){
				frame.document.execCommand("bold",false,null);
			}
	
			//for italic
			that.italic.onclick=function(){
				frame.document.execCommand("italic",false,null);
			}
	
			//for underline
			that.underline.onclick=function(){
				frame.document.execCommand("underline",false,null);
			}
	
			//for text size
			that.txtSize.onclick=function(){
				size=that.txtSize.value;
				frame.document.execCommand("FontSize",false,size);
			}
	
			//for text color
			that.txtColor.onchange=function(){
				var color=that.txtColor.value;
				frame.document.execCommand("ForeColor",false,color);
			
			}
	
			//for horizontal line
			that.hr.onclick=function(){
				frame.document.execCommand("inserthorizontalrule",false,null);
			}
	
			//for unordered list
			that.uol.onclick=function(){
				frame.document.execCommand("InsertUnorderedList",false,"NewUL");
			}
	
			//for ordered list
			that.ol.onclick=function(){
				frame.document.execCommand("InsertOrderedList",false,"NewOL");
			}
	
			//for setting link
			that.link.onclick=function(){
				var Url=prompt("Enter link to insert ","http://");
				frame.document.execCommand("CreateLink",false,Url);
			}
	
			//for unlink
			that.unlink.onclick=function(){
				frame.document.execCommand("UnLink",false,null);
			}
				
			//for saving data 
			var value=document.getElementById("save");
			value.onclick=function(){
				var frameObj = document.getElementById("frame");
				
				 var frameContent = frameObj.contentWindow.document.body.innerHTML;
				 that.txtarea.innerHTML=frameContent;
				 that.ajax=new Ajax();
				 that.ajax.submitFormAjax();
				 return false;
			}
			
					
			//for loading data 
			var values=document.getElementById("load");
			values.onclick=function(){
				that.ajax=new Ajax();
				that.ajax.readDataAjax();
				
				var frameObj = document.getElementById("frame");
				var frameContent = frameObj.contentWindow.document.body.innerHTML;
				frameContent=that.txtarea.innerHTML;
				console.log(frameContent);
				return false;
			}
			
			
			
		}
}