videojs.registerPlugin('toggleOverlay', function() {
    var myPlayer = this,
      overlayDisplayed,
      eOverlayButton = document.getElementById("overlayButton");

      // Initialize the overlay plugin with a clickable image
      myPlayer.overlay({
        "overlays": [
          {
            "align": "top",
            "start" : "loadedmetadata",
            "content": "<a href='http://www.brightcove.com'><img src='http://solutions.brightcove.com/bcls/assets/images/modus_overlay.png'></a>"
          }
        ],
        "content": "Default overlay content"
      });

      // Initially hide the overlay
      overlayDisplayed = false;
      myPlayer.addClass("hide-overlay");

      // Listen for the click event on the Toggle Overlay button
    	eOverlayButton.addEventListener("click",function(){
        if (overlayDisplayed) {
        	// Hide the overlay
        	overlayDisplayed = false;
        	myPlayer.addClass("hide-overlay");
        } else {
        	// Show the overlay
          overlayDisplayed = true;
          myPlayer.removeClass("hide-overlay");
        }
    	});
    });

});
