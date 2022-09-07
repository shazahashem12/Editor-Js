var codes=document.getElementById("codes");
var run=document.getElementById("run");
var remove=document.getElementById("remove");
var result=document.getElementById("result");

run.onclick=()=>{
    var text=codes.value;
    result.innerHTML=text;
    localStorage.setItem("codes",text);
}

remove.onclick=()=>{
    result.innerHTML="";
    //codes.value="";
}
onload=()=>{
   codes.value =localStorage.getItem("codes");
   result.innerHTML=codes.value;
}