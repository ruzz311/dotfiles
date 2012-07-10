// grooveshark.com user script
// 2011−10−05
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
// @name Custom Grooveshark UI
// @version 1.0
// @namespace http://madsendev.com/
// @description Style and improve grooveshark.com - No Ads
// @match http://*.grooveshark.com/*
// ==/UserScript==

function addGlobalStyle( css ) {
	var head, style;
	head = document.getElementsByTagName( 'head' )[0];
	if ( !head ) { return; }
	style = document.createElement( 'style' );
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild( style );
}

//addGlobalStyle('p { font−size: large ! important; }');

addGlobalStyle( '#capital { position:absolute!important; z-index: -99999px!important; }' );
addGlobalStyle( '#application { margin-right:0!important; }' );
console.info( 'user scripts applied' );