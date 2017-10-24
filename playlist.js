function makeplaylist() {	
	var playlist = new Array();
	var w = document.getElementsByClassName("widgetcount");
	var widget = w[0];
	if(document.cookie){
		widget.innerHTML=document.cookie;
	}
}
document.onload=function(){makeplaylist};

/*button code to be used for each video*/
/*.widgetcont is what you'll be adding these divs to*/
function playadd (vid) {
	if(document.cookie){
		playlist=document.cookie;
	}
	playlist[playlist.length]=document.getElementById(vid);
	document.cookie=playlist; /*update this later with more cookie identifiers if it is not specific enought*/
	widget.innerHTML=playlist;

}

function playremove (vid) {
	for (var i = playlist.length - 1; i >= 0; i--) {
		if(playlist[i]===widget.getElementById(vid)){
			playlist.splice(i,1);
			document.cookie=playlist;
			widget.innerHTML=playlist;
		}
	};
}