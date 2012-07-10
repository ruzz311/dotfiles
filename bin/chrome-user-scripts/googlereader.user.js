( function( window ) {
// Google Reader user script
// 2011−11-03
// Copyright (c) 2011, Russell Madsen
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
//
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select this extension, and click Uninstall.
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−//
//
// ==UserScript==
// @name Custom Google Reader UI elements
// @version 1.0
// @namespace http://madsendev.com/
// @description Style and improve Google Reader - favicons on content rows for fast skimming when reading folders
// @match http://*.google.com/reader/*
// ==/UserScript==
	
	var rwm = {};
	var newStyles = "";
	//loads JQUERY via google api
	var jqueryLoaded = false;
	var jqueryCheck;
	window.jQuery || document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js">\x3C/script>')

	/** addGlobalStyle - append style to page
	 * Example use: 
	 *		addGlobalStyle('p { font−size: large ! important; }');
	**/
	function addGlobalStyle( css ) {
		var head, style;
		head = document.getElementsByTagName( 'head' )[0];
		if ( !head ) { return; }
		style = document.createElement( 'style' );
		style.type = 'text/css';
		style.innerHTML = css;
		head.appendChild( style );
	}

	//INIT app
	rwm.init = function() {
		newStyles  += ' #item-favicon { height: 16px; width: 16px; float: left; }';
		addGlobalStyle( newStyles );
	}

	//Start the checker
	jqueryCheck = setInterval( function() {
		if( window.jQuery =! 'undefined' && window.jQuery =! undefined && window.jQuery =! null ) {
			clearInterval( jqueryCheck );
			jqueryLoaded = true;
			rwm.init();
		}
	}, 1000 );

	console.info( 'user scripts applied' );

})( window );


/*


!!!!!! THIS IS HOW THE DOM SHOULD BE MANIPULATED FOR EACH ITEM IN THE VIEW !!!!!!



<div class="entry entry-0 read" id="current-entry">
<div class="collapsed">
<div class="entry-icons">
	<div class="item-favicon unselectable empty" style="background:url(http://s2.googleusercontent.com/s2/favicons?domain=ableton.com&amp;alt=feed); height: 16px; width: 16px; float: left;"></div>
	<div class="item-star star link unselectable empty"></div>
</div>
<div class="entry-date">10:10 AM</div>
<div class="entry-main">
	<a class="entry-original" target="_blank" href="http://ableton.com/blog/2011/11/03/more-ableton-cookbooks-crash-course-music-theory/"></a>
	<span class="entry-source-title">Latest entries</span><div class="entry-secondary">
	<h2 class="entry-title">Tricks for using Simpler as a synth from the Ableton Cookbook</h2>
	<span class="entry-secondary-snippet"> - <span class="snippet">
  
In this new tutorial, the Ableton Cookbook's Anthony Arroyo looks at some fun modulation tricks in Simpler. For this tutorial, he's using Simpler as a sampling synthesizer, having loaded up a ...</span></span></div></div></div></div>

*/