// tinkerbin.com user script
// 2011−10−03
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
// select "Hello World", and click Uninstall.
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−//
//
// ==UserScript==
// @name Custom Tinkerbin.com UI
// @version 1.0
// @namespace http://madsendev.com/
// @description Style and improve tinkerbin.com to feel more like an in-browser IDE
// @match http://*.tinkerbin.com/*
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

alert( 'user scripts applied' );