//JavaScript
function Ajax(){
	
	
	this.submitFormAjax=function(){
		var baseUrl="file.php";
    	var xmlhttp= window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            alert(xmlhttp.responseText); // Here is the response
   		}

    	var data = document.getElementById('txtarea').value;

    	xmlhttp.open("POST",baseUrl,true);
    	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    	xmlhttp.send("action=write&data=" + data);
	
	}
	this.readDataAjax=function()	{
		var baseUrl="file.php";
    	var xmlhttp= window.XMLHttpRequest ?
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            document.getElementById('txtarea').value=xmlhttp.responseText;
    	}

    	xmlhttp.open("POST",baseUrl,true);
    	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    	xmlhttp.send("action=read");
	}
}