"use strict";

var UI=
{ 
	construct: function(){
		console.log(model.baradress);
		var output = '';
		for (var i = 0; i <= model.baradress.length-1; i++) {
			console.log(model.baradress[i]);
			output += '<div id="bar_'+i+' style="margin-bottom:10px;"><h3>'+model.baradress[i].nom+'</h3>Distance : '+Math.round((model.baradress[i].distbar)*1000)+' mètres<br/><br/></div>';
		};
		document.getElementById('tritab').innerHTML = output;
	}
}