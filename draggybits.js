(function($) {
	$.fn.draggyBits = function( options ) {
		return this.each(function() {	  
			
			var drag, moverX, moverY;
			var container = $(this);
			var settings = $.extend({
			      'dragText' : '&harr;',
			      'dragImg' : null
			    }, options);
			
			if ( settings.dragImg == null ) {
				drag = '<div class="draggybits-mover">' + settings.dragText + '</div>';
			}
			else {
				drag = '<div class="draggybits-mover" style="background-image:url(\'' + settings.dragImg + '\');"> </div>';
			}
			
			container.prepend(drag);
			
			if ( container.css('position') != "absolute" ) {
				container.css('position','absolute');
			}
				
			$('.draggybits-mover').mousedown(function(event) {
				container = $(this).parent('.draggy');
				container.addClass('draggybits-dragging'); 		
				moverX = container.position().left - event.pageX;
				moverY = container.position().top - event.pageY;
				
				$(this).each('img', function(){ 
					$(this).bind('dragstart', function(event) { 
						event.preventDefault() 
					});
				});
			
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