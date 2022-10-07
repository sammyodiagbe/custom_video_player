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
  constructor(source, videoElement) {
    this.source = source;
    this.videoElement = videoElement;
    this.videoElement.setAttribute("src", source);
  }

  play() {
    this.videoElement.play();
  }

  // pause
  pause() {
    this.videoElement.pause();
  }

  seekForward(point) {
    this.videoElement.currentTime = this.videoElement.currentTime + 15;
  }

  seekBackward(point) {
    if (this.videoElement.currentTime <= 0) {
      this.videoElement.currentTime = 0;
    } else {
      this.videoElement.currentTime = this.videoElement.currentTime - 15;
    }
  }

  increaseVolume(increaseBy) {}

  decreaseVolume(decreaseBy) {}
}
