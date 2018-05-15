$('#addSlide').click(function(){
 var newSlide=$('<textarea></textarea>');
 $('#slideList').append(newSlide);
 newSlide.focus();
 newSlide.select();
 document.execCommand('Paste');
 console.log('addSlide executed');
});