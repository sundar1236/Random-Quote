$(document).ready(function(){
  var quote; 
  var author;
  
  function getNewQuote(){
//API Request
    $.ajax({
        url:'https://api.forismatic.com/api/1.0/',
        jsonp:'jsonp',
        dataType: 'jsonp',
        data: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp'
        }, 
      success : function (response){
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author){       
          $('#author').text(' - ' + author);
          } else {
            $('#author').text('- Unkown');
          }
      }
    });
    }
  getNewQuote();
  $('.get-quote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
  });
  
});
