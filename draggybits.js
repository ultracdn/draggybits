(function( $ ) {
  $.fn.draggyBits = function() {
  
  	// get the element we are making draggable and absolute position it
  	var container = this;
  	this.css('position','absolute');
  	
 	// add draggybits-move icon to upper-right corner of container
	container.prepend('<div class="draggybits-move">[&harr;]</p>');
	
	// start dragging when the icon is clicked
	$('.draggybits-move').mousedown(function(event) {
		container.addClass('draggybits-dragging');
		
		
		// TEST_
		$('#test').html('dragging');
		
		
		
		if ( window.getSelection) {
		    window.getSelection().removeAllRanges();
		} 
		else if (document.selection) {
		    document.selection.clear();
		}
		resetSelectStart = document.onselectstart;
		document.onselectstart = function() { return false; };
		
		
	});
	
	// stop dragging when the icon is no longer clicked
	$(window).mouseup(function() {
		container.removeClass('draggybits-dragging');
		
		// TEST_
		$('#test').html('not dragging');
		
		
		document.onselectstart = function() { return true; };
	});
	
	// move the dragging box wherever the cursor goes
	$(window).mousemove(function(event) {
		container.each(function() { 
			if ( !container.hasClass('draggybits-dragging') ) {
				// nothing to be dragged herrre, Nelly
			} 
			else {
				var position = container.position();
				var moverPosition = container.find('.draggybits-move').position();
				console.log('click x: ' + event.pageX + ', draggybits-move left: ' + moverPosition.left + ', box left: ' + position.left);

				container.css('top', event.pageY).css('left', event.pageX );
			}
		});
	});



  };
})( jQuery );