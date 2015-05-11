$(document).ready(function(){
  
  // Scroll progress indicator (without window resizing)

  /*var $w = $(window);
  var $prog = $('.scroll-progress');
  var wh = $w.height();
  var h = $('body').height();
  var sHeight = h - wh;
  
  
  $w.on('scroll', function(){
      var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
      updateProgress(perc);
  });

  function updateProgress(perc){
      $prog.css({width : perc*100 + '%'});
  }*/

  // Scroll progress indicator with window resizing

  var $w = $(window);
  var $prog = $('.scroll-progress');

  var wh, h, sHeight;

  function setSizes(){
      wh = $w.height();
      h = $('body').height();
      sHeight = h - wh;
  }

  setSizes();

  $w.on('scroll', function(){
      var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
      updateProgress(perc);
  }).on('resize', function(){
      setSizes();
      $w.trigger('scroll');
  });

  function updateProgress(perc){
    $prog.css({width : perc*100 + '%'});
  }

  // Content list filtering

  $('.content-filter li a').click(function() {
        var filterName = $(this).text();
        
        // Add active class to clicked filter
        $('.content-filter li a').removeClass('selected');
        $(this).addClass('selected');
        
        // Show all if "all" clicked
        if ( filterName == 'all') {
            $('.content-items').children('.item').show();
        }
        
        // Show items of selected type
        else {
            $('.content-items').children('li:not(.' + filterName + ')').hide();
            $('.content-items').children('li.' + filterName).show();
        }
    });

});
