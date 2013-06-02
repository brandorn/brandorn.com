$(document).ready(function() {
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=37057592@N07&format=json&jsoncallback=?", function(data) {
    var target = "#flickr"; // Name of div surrounding images
    for (i = 0; i <= 10; i++) { // Loop through your 145 photos
      var pic = data.items[i];
      var liNumber = i + 1; // Add class to each li
      $(target).append("<div class='imgholder'><a title='" + pic.title + "' href='" + pic.link + "'><img src='" + pic.media.m + "' /></a></div>");
    }
  });
});