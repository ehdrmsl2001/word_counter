function getWordCount(){
    var text=document.getElementById("text").value;
    var with_space=document.getElementById("with_space");
    with_space.innerHTML="<div id=\"with_space\">공백 포함 : " +text.length+" 자</div>"
    var without_space=document.getElementById("without_space");
    without_space.innerHTML="<div style=\"margin: 10px\" id=\"without_space\">공백 미포함 : "+text.replace(/(\s*)/g, "").length+" 자</div>"
}