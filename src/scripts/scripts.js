$(document).ready(function(){

// Sorts book titles alphabetically


  $(".book-list li").sort(dec_sort).appendTo('.book-list');

  function dec_sort(a, b){
      return ($(b).find('.last-name').text()) < ($(a).find('.last-name').text()) ? 1 : -1;    
  }
 

// Bookshelf filters

  $('.book-filter li a').click(function() {
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
