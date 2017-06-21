$(document).ready(function(){
    //Set up clipboard for buttons 
    var clip = new Clipboard('.btn');
    //Setup the Copied tooltip for the buttons on click
    $('#emailButton').tooltip({
    	trigger:'click',
    	placement:'right'
    });

    $('#phoneButton').tooltip({
    	trigger:'click',
    	placement:'right'
    });


    //When the clipboard succeeds.
    clip.on('success', function(e) {
    	setTooltip(e.trigger,'Copied!');
    	hideTooltip(e.trigger);
    });
    //When the clipboard fails.
    clip.on('error', function(e){
    	setTooltip(e.trigger,'Copy Failed. Press CTRL+C');
    	hideTooltip(e.trigger);
    });
});
	/*Code from following link for copy tooltip popup.
	 *https://stackoverflow.com/questions/37381640/tooltips-highlight-animation-with-clipboard-js-click
     */
    function setTooltip(btn, message){
    	$(btn).tooltip('hide')
    	.attr('data-original-title',message).tooltip('show');
    }

    function hideTooltip(btn){
    	setTimeout(function() {
    		$(btn).tooltip('hide');
    	}, 1000);
    }