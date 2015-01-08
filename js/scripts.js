$(document).ready(function(){
    
				// List view modification on Main page
				
				$('#blockView').click(function(){
        if ($('.notes').hasClass('listView')){
            $('.notes').removeClass('listView');
            $('#listView').removeClass('selected');
            $('#blockView').addClass('selected');
        }
    });
    $('#listView').click(function(){
        $('.notes').addClass('listView');
        $('#blockView').removeClass('selected');
        $('#listView').addClass('selected');
    });
				
				
				// Tabs on Work page
				
				$(function(){
				  $( "#tabs" ).tabs();
				});
				
				
});