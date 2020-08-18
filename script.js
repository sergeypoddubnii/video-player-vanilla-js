//refs
const refs = {
  play: document.querySelector("#play"),
  stop: document.querySelector("#stop"),
  video: document.querySelector("#video"),
  progress: document.querySelector("#progress"),
  timestamp: document.querySelector("#timestamp"),
};

// helpers
const getMinutes = (time) => {
  let minutes = Math.floor(time / 60);
  if (minutes < 10) {
    return "0" + String(minutes);
  }
  return minutes;
};

const getSeconds = (time) => {
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    return "0" + String(seconds);
  }
  return seconds;
};

// callbacks
const toggleVideoStatus = () => {
  if (refs.video.paused) {
    refs.video.play();
  } else {
    refs.video.pause();
  }
};

const updatePlayIcon = () => {
  if (refs.video.paused) {
    refs.play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    refs.play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

const setProgress = () => {
  const minutes = getMinutes(refs.video.currentTime);
  const seconds = getSeconds(refs.video.currentTime);

  refs.progress.value = (refs.video.currentTime / refs.video.duration) * 100;
  refs.timestamp.innerHTML = `${minutes}:${seconds}`;
};

const stopVideo = () => {
  refs.video.currentTime = 0;
  refs.video.pause();
};

const setVideoProgress = () => {
  refs.video.currentTime =
    (Number(refs.progress.value) * refs.video.duration) / 100;
};

//events
refs.video.addEventListener("click", toggleVideoStatus);
refs.video.addEventListener("play", updatePlayIcon);
refs.video.addEventListener("pause", updatePlayIcon);
refs.video.addEventListener("timeupdate", setProgress);

refs.play.addEventListener("click", toggleVideoStatus);
refs.stop.addEventListener("click", stopVideo);

refs.progress.addEventListener("change", setVideoProgress);
