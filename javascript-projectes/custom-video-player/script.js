const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// play & pouse videpo
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = "<i class ='fa fa-play fa-2x'></i>";
  } else {
    play.innerHTML = "<i class ='fa fa-pause fa-2x'></i>";
  }
}

// update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < video.duration) {
    mins = "0" + String(mins);
  }

  // Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < video.duration) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
// stop vedio
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listenners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pouse", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
