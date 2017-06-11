$(document).ready(function() {
    var $navRevealBtn = $('#nav-reveal');
    var $nav = $('#nav');
    var $navScrim = $('#nav-scrim');

    $navRevealBtn.on('click', function() {
      $nav.addClass('visible');
      $navScrim.addClass('visible');
    });

    $navScrim.on('click', function() {
      $nav.removeClass('visible');
      $navScrim.removeClass('visible');
    });
  });

/*

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

});  */
