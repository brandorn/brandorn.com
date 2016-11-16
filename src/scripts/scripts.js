$(document).ready(function(){

// Landing quote carousel thing

var quotes = [
  { quote: "In our daily experience words are used as a means to convey meaning. In the Bible to speak is to act, and the word is more than an instrument of expression; it is a vessel of divine power, the mystery of creation.", author: "Abraham Joshua Heschel", source: "God in Search of Man"},
  { quote: "That is the best of what the old heads meant when they spoke of being ‘politically conscious’–as much a series of actions as a state of being, a constant questioning, questioning as ritual, questioning as exploration rather than the search for certainty.", author: "Ta-Nehisi Coates", source: "Between the World and Me"},
  { quote: "I feel sometimes as if I were a child who opens its eyes on the world once and sees amazing things it will never know any names for and then has to close its eyes again.", author: "Marilynne Robinson", source: "Gilead"},
  { quote: "Ask questions. Find out what has been going on all these years before you were born.", author: "Deuteronomy 4.32", source: "The Message"},
  { quote: "You mustn’t wish for another life. You mustn’t want to be somebody else. What you must do is this: ‘Rejoice evermore. Pray without ceasing. In everything give thanks.’ I am not all the way capable of so much, but those are the right instructions.", author: "Wendell Berry", source: "Hannah Coulter"},
   { quote: "I cannot find language of sufficient energy to convey my sense of the sacredness of private integrity.", author: "Emerson", source: "Lecture on the Times"}
],  i = 0,
    blockquote = document.getElementById('quote'),
    quoteContent = document.getElementById('quote-content'),
    quoteAuthor = document.getElementById('quote-author'),
    quoteSource = document.getElementById('quote-source'),
    prevButton = document.getElementById('prev-button'),
    nextButton = document.getElementById('next-button');

function nextItem() {
    i = i + 1; // increase i by one
    i = i % quotes.length; // if we've gone too high, start from `0` again
    return quotes[i];
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = quotes.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return quotes[i]; // give us back the item of where we are now
}

window.addEventListener('load', function () {
    quoteContent.textContent = quotes[0].quote; // initial value
    quoteAuthor.textContent = quotes[0].author;
    quoteSource.textContent = quotes[0].source;
  
    prevButton.addEventListener(
        'click', // we want to listen for a click
        
        function (e) { // the e here is the event itself
            blockquote.classList.add('hide');
            prevItem();
            setTimeout(function() {
              quoteContent.textContent = quotes[i].quote;
              quoteAuthor.textContent = quotes[i].author;
              quoteSource.textContent = quotes[i].source;
            }, 300);
            setTimeout(function() { 
                blockquote.classList.remove('hide')
            }, 300);
        }
    );
    
    nextButton.addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            blockquote.classList.add('hide');
            nextItem();
            setTimeout(function() {
              quoteContent.textContent = quotes[i].quote;
              quoteAuthor.textContent = quotes[i].author;
              quoteSource.textContent = quotes[i].source;
            }, 300);
            setTimeout(function() { 
                blockquote.classList.remove('hide')
            }, 300);
        }
    );
});






// Sorts book titles alphabetically


  $(".book-list li").sort(dec_sort).appendTo('.book-list');

  function dec_sort(a, b){
      return ($(b).find('.last-name').text()) < ($(a).find('.last-name').text()) ? 1 : -1;    
  }
 

// Bookshelf filters

  $('.book-filter li span').click(function() {
        var filterName = $(this).text();
        
        // Add active class to clicked filter
        $('.book-filter li').removeClass('active');
        $(this).closest('li').addClass('active');
        
        // Show all if "all" clicked
        if ( filterName == 'all') {
          $('.book-list').children('li').show();
        }
        
        // Show items of selected type
        else {
          $('.book-list').children('li:not(.' + filterName + ')').hide();
          $('.book-list').children('li.' + filterName).show();
        }
    });

});
