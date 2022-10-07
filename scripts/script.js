const videoElement = document.querySelector("#video");
const path = "http://127.0.0.1:8887/mapbox_navigation.mp4";
const playButton = document.querySelector("#play");
const seekForward = document.querySelector("#forward");
videoElement.setAttribute("src", path);

// window.addEventListener("click", (_) => {
//   videoElement.play();
// });

window.addEventListener("click", (event) => {
  console.log(videoElement.paused);
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
});

seekForward.addEventListener("click", (_) => {
  videoElement.currentTime = videoElement.currentTime + 15;
});

class Video {
  constructor(source) {
    this.source = source;
  }

  play() {}

  // pause
  pause() {}

  seek(point) {}

  increaseVolume(increaseBy) {}

  decreaseVolume(decreaseBy) {}
}
