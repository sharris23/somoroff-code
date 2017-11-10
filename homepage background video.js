var content=document.getElementById("imgbk");
var video=document.getElementById("videobk");
var videosection = video.getElementsByClassName("upb_video-src");

content.style.display='none';

setTimeout(function(){
    var i;
    for(i=0; i<videosection.length; i++){
         videosection[i].pause();
    }
    video.style.display='none';
    content.style.display='block';
    player.api("pause");
  }, 31000);


//code for pausing the vimeo vid after it disappears 
function pausevid (){
	var iframe = document.getElementsByTagName("iframe")[0]; 
	var player = $f(iframe);
	player.api("pause");
}

//code for About Us Button 
var content=document.getElementById("imgbk"); 
var button=document.getElementById("buttonbk"); 
var video=document.getElementById("videobk"); 
video.style.display='none'; 
content.style.display='block'; 
button.style.display='none';

//New Code for skip button 
var skip=document.getElementById("skipperbutton");
skip.addEventListener("click", skipper);

function skipper (){
  var content=document.getElementById("imgbk"); 
  var video=document.getElementById("videobk"); 
  //var mbimg=document.getElementById("mobileimage");
  //window.addEventListener('resize', function() {
    if (window.innerWidth > 420){
      video.innerHTML="BLANK";
      video.style.display='none'; 
      content.style.display='block';
    }
    else{
      var test;
    }

  }//, true);
  //mbimg.style.margin="-200% 0% 0% 0%"
//}


//skip button function code that either replaces the window event or adds a new one entirely 

function skipper (){
  var content=document.getElementById("imgbk"); 
  var video=document.getElementById("videobk"); 
  if (window.attachEvent) {
    window.attachEvent('onresize', function() {
      if (window.innerWidth < 430)
        video.innerHTML="BLANK";
        video.style.display='none'; 
        content.style.display='block';
      else
        console.log("More than 430");
    });
  } else if (window.addEventListener) {
    window.addEventListener('resize', function() {
      if (window.innerWidth < 430)
        video.innerHTML="BLANK";
        video.style.display='none'; 
        content.style.display='block';
      else
        console.log("More than 430");
    }, true);
  } else {
    //The browser does not support Javascript event binding
  }
}

