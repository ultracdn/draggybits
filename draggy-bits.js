(function( $ ) {
  $.fn.draggyBits = function() {
  
  	var draggyItem = this;
  	this.css('position','absolute');
  	
 	// add dragger icon to upper-right corner of draggy box
	draggyItem.prepend('<div class="dragger">[&harr;<span>&harr;</span>]</p>');
	
	// start dragging when the icon is clicked
	$('.dragger').mousedown(function(event) {
		draggyItem.addClass('dragging');
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
		draggyItem.removeClass('dragging');
		$('#test').html('not dragging');
		document.onselectstart = resetSelectStart;
	});
	
	// move the dragging box wherever the cursor goes
	$(window).mousemove(function(event) {
		draggyItem.each(function() { 
			if ( !draggyItem.hasClass('dragging') ) {
				// nothing to be dragged herrre, Nelly
			} 
			else {
				var position = draggyItem.position();
				var draggerPosition = draggyItem.find('.dragger').position();
				console.log('click x: ' + event.pageX + ', dragger left: ' + draggerPosition.left + ', box left: ' + position.left);

				draggyItem.css('top', event.pageY).css('left', event.pageX );
			}
		});
	});



  };
})( jQuery );