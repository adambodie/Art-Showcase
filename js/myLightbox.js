$(function() {
	// OVERLAY
	overlayOn = function(){
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	},
	overlayOff = function(){
			$( '#imagelightbox-overlay' ).remove();
	},
	// CLOSE BUTTON
	closeButtonOn = function( instance ){
		$( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
	},
	closeButtonOff = function(){
		$( '#imagelightbox-close' ).remove();
	},

	// TOGGLE BUTTON
	toggleButtonOn = function(){
		$( '<button type="button" id="imagelightbox-toggle" title="Toggle Description"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( '#imagelightbox-caption' ).toggle(); return false; });
	},
	toggleButtonOff = function(){
		$( '#imagelightbox-toggle' ).remove();	
	},		
	
	// CAPTION
	captionOn = function(){
	var title = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "alt" );
	var color = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "color" );
	var types = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "type" );
	var medium = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "medium" );
	var description = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "description" );
	
	var newColor = color[0].toUpperCase() + color.substring(1, color.length);
	var newTypes = types[0].toUpperCase() + types.substring(1, types.length);
	var newMedium = medium[0].toUpperCase() + medium.substring(1, medium.length);
	if (newColor === 'Bnw') {
		newColor = 'Black & White';	
	}	
				
		if( title.length > 0 )
			$( "<div id='imagelightbox-caption'><h4><strong>Title:</strong> " + title + "</h4><p><strong>Color:</strong> " + newColor + "&nbsp;<strong>Type: </strong>" + newTypes + "&nbsp;<strong>Medium: </strong>" + newMedium + "</p><p><strong>Description:</strong> " + description + "</p></div>" ).appendTo( 'body' );
	},
	captionOff = function(){
		$( '#imagelightbox-caption' ).remove();
	}
	
	captionHide = function() {
		$( '#imagelightbox-caption' ).toggle();	
	}
	var selector = 'a[data-imagelightbox="a"]';
	var instance = $( selector ).imageLightbox({
			onStart:		function() { overlayOn(); closeButtonOn( instance ); toggleButtonOn() },
			onEnd:			function() { overlayOff(); captionOff(); closeButtonOff(); toggleButtonOff() },
			onLoadStart: 	function() { captionOff()},
			onLoadEnd:	 	function() { captionOn()}
		});		
});