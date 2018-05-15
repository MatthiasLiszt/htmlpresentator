var HTML=true;


$("#yourmarkdown").click(function(){
 var content=$("#yourmarkdown").val();
 //alert(content);
 console.log(content);
 var converted=marked(content);
 $("#htmlOutput").text(converted);
 $("#yourmarkdown").val(converted);
 $("#yourmarkdown").select();
 document.execCommand('copy');
 $("#yourmarkdown").val(content);
 console.log("textarea changed");
});

$("#htmlOutput").click(function(){
 var content=$("textarea").val();
 var converted=marked(content);
 HTML=!HTML;
 if(!HTML)
  {$("#htmlOutput").html(converted);}
 else
  {$("#htmlOutput").text(converted);}
  
});