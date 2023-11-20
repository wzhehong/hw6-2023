var video;

video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
	video.loop = false;
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let volume = document.querySelector("#volume");
	volume.innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	// console.log(video.playbackRate);
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	// console.log(video.playbackRate);
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	let duration = video.duration;
	let currtime = video.currentTime;

	if (currtime + 10 > duration) {
		video.currentTime = 0;
		video.pause();
	} else {
		video.currentTime = currtime + 10;
	}
	console.log("Skip ahead");
	console.log("Video current time is ", currtime);
});

document.querySelector("#mute").addEventListener("click", function() {
	let state = document.querySelector("#mute").innerHTML;

	if (state == "Mute") {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Mute");
	} else if (state == "Unmute") {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmute");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	let volume = document.querySelector("#slider").value;
	video.volume = volume / 100;
	document.querySelector("#volume").innerHTML = volume + "%";
	console.log("The current value is ", volume / 100);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});