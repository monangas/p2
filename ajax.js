function pais(){
    var p=document.getElementById("pais").value;
    var l=document.get
    var url="p.php";
    var div="mostrar";
    var v="variable="+p+"&lolo=perra";
    ajax(v,url,div);
}
function ajax(v,b ,c)
{
    
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById(c).innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST",b,true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(v);
}


