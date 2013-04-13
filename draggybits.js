(function($) {
	$.fn.draggyBits = function() {
		return this.each(function() {	  
			
			var moverX, moverY;
			var container = $(this);
			container.prepend('<div class="draggybits-mover">[&harr;]</p>');
			if ( container.css('position') != "absolute" ) {
				container.css('position','absolute');
			}
				
			$('.draggybits-mover').mousedown(function(event) {
				container = $(this).parent('.draggy');
				container.addClass('draggybits-dragging'); 		
				moverX = container.position().left - event.pageX;
				moverY = container.position().top - event.pageY;
			
				if ( window.getSelection) {
				    window.getSelection().removeAllRanges();
				} 
				else if (document.selection) {
				    document.selection.clear();
				}
				resetSelectStart = document.onselectstart;
				document.onselectstart = function() { return false; };
			});
			
			$(window).mouseup(function() {
				$('.draggybits-dragging').removeClass('draggybits-dragging');
				document.onselectstart = function() { return true; };
			});
			
			$(window).mousemove(function(event) {
				container.each(function() { 
					if ( container.hasClass('draggybits-dragging') ) {
						container.css({
							'top': event.pageY + moverY,
							'left': event.pageX + moverX,
							'bottom':'inherit'
						});
					}
				});
			});
		
		});  
	};
})( jQuery );