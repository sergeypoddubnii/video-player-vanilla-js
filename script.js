const refs = {
  play: document.querySelector("#play"),
  stop: document.querySelector("#stop"),
  video: document.querySelector("#video"),
  progress: document.querySelector("#progress"),
  timestamp: document.querySelector("#timestamp"),
};

const toggleVideoStatus = () => {
  if (refs.video.paused) {
    refs.video.play();
  } else {
    refs.video.pause();
  }
  console.log("toggle");
};

const updatePlayIcon = () => {
  if (refs.video.paused) {
    refs.play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    refs.play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

const stopVideo = () => {
  refs.video.currentTime = 0;
  refs.video.pause();
};

refs.video.addEventListener("click", toggleVideoStatus);
refs.video.addEventListener("play", updatePlayIcon);
refs.video.addEventListener("pause", updatePlayIcon);
refs.video.addEventListener("timeupdate", setProgress);

refs.play.addEventListener("click", toggleVideoStatus);

refs.stop.addEventListener("click", stopVideo);

refs.progress.addEventListener("change", setVideoProgress);
