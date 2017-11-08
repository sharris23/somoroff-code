var skip=document.getElementById("skipperbutton");
skip.addEventListener("click", skipper);

setTimeout(function(){
   skipper();
  }, 37000);

function skipper (){
	var content=document.getElementById("imgbk"); 
	var video=document.getElementById("videobk"); 
	/*var mbimg=document.getElementById("mobileimage");*/
	video.innerHTML="BLANK";
	video.style.display='none'; 
	content.style.display='block'; 
	/*mbimg.style.margin="-200% 0% 0% 0%"*/
}
