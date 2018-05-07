var HTML=true;


$("textarea").click(function(){
 var content=$("textarea").val();
 //alert(content);
 console.log(content);
 var converted=marked(content);
 $("#htmlOutput").text(converted);
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