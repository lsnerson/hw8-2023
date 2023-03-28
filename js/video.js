let video = document.querySelector("#player1");
let play_button = document.querySelector("#play");
let pause_button = document.querySelector("#pause");
let slow_down = document.querySelector("#slower");
let speed_up = document.querySelector("#faster");
let skip_ahead = document.querySelector("#skip");
let mute_button = document.querySelector("#mute");
let volume_slider = document.querySelector("#slider");
let volume = document.querySelector("#volume");
let styled = document.querySelector("#vintage");
let original = document.querySelector("#orig");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay: " + video.autoplay)
	console.log("loop: " + video.loop)
});

play_button.addEventListener("click", function(){
	video.play();
	volume.innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
})

pause_button.addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
})

slow_down.addEventListener("click", function(){
	video.playbackRate *= 0.90;
	console.log(video.playbackRate);
})

speed_up.addEventListener("click", function(){
	video.playbackRate *= 1.10;
	console.log(video.playbackRate);
})

skip_ahead.addEventListener("click", function(){
	if (video.currentTime + 10 >= 67.403333){
		video.currentTime = 0
		video.play()
	}
	else{
		video.currentTime += 10
	}
	console.log(video.currentTime)
})

mute.addEventListener("click", function(){
	if (video.muted == true){
		mute_button.innerHTML = "Mute";
		video.muted = false;
		console.log("It is muted.");
	} 
	else {
		mute_button.innerHTML = "Unmute";
		video.muted = true;
		console.log("It is Unmuted.");
	}
})

volume_slider.addEventListener("change", function(){
	video.volume = volume_slider.value / 100;
	volume.innerHTML = video.volume * 100 + "%";
})

styled.addEventListener("click", function(){
	video.style = document.getElementsByClassName(".oldSchool");
	// console.log("It is styled.");
})

styled.addEventListener("click", function(){
	video.className += " oldSchool";
})

original.addEventListener("click", function(){
	video.className = "video";
})

