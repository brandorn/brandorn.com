$(document).ready(function(){
  var $w = $(window);
  var $prog = $('.scroll-progress');

  var wh, h, sHeight;

  function setSizes(){
      wh = $w.height();
      h = $('article').height();
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

});
