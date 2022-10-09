const videoElement = document.querySelector("#video");
const path = "http://127.0.0.1:8887/mapbox_navigation.mp4";
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const seekForward = document.querySelector("#forward");
const seekBackward = document.querySelector("#backward");
const volumeUpButton = document.querySelector("#volume-up");
const volumeDownButton = document.querySelector("#volume-down");
const muteButton = document.querySelector("#mute-button");
const btnElem = document.querySelector("#btn-elem");

class Video {
  constructor(source, videoElement) {
    this.source = source;
    this.videoElement = videoElement;
    this.videoElement.setAttribute("src", source);
    this.duration = this.videoElement.duration;
    this.listenForTimeChanges();
  }

  updateUi() {
    // getting the duration

    if (this.videoElement.paused) {
      btnElem.setAttribute("class", "fa fa-play");
    } else {
      btnElem.setAttribute("class", "fa fa-pause");
    }
  }

  playAndPause() {
    console.log(this.videoElement.paused);
    if (this.videoElement.paused) {
      this.videoElement.play();
      this.updateUi();
    } else {
      this.videoElement.pause();
      this.updateUi();
    }
  }

  listenForTimeChanges() {
    this.videoElement.addEventListener("timeupdate", (_) => {
      let minutes = Math.floor(this.videoElement.currentTime / 60);
      let seconds = Math.floor(this.videoElement.currentTime - minutes * 60);
      const duration = this.videoElement.duration;
      const progressTrack = document.querySelector("#progress-track");
      const progressBar = document.querySelector("#progress-bar");

      progressBar.style.width = `${
        progressTrack.clientWidth * (this.videoElement.currentTime / duration)
      }px`;
      this.updateUi();
    });
  }

  // pause

  seekForward(point) {
    this.videoElement.currentTime = this.videoElement.currentTime + 15;
  }

  increaseVolume() {
    if (this.videoElement.volume >= 1) return;
    this.videoElement.volume += 0.1;
  }

  decreaseVolume() {
    if (this.videoElement.volume <= 0) {
      this.videoElement.volume = 0;
      return;
    }
    this.videoElement.volume -= 0.1;
  }

  mute() {
    console.log(this.videoElement.muted);
    this.videoElement.muted = !this.videoElement.muted;
  }

  seekBackward(point) {
    if (this.videoElement.currentTime <= 0) {
      this.videoElement.currentTime = 0;
      return;
    }
    this.videoElement.currentTime = this.videoElement.currentTime - 15;
  }
}

const video = new Video(path, videoElement);

// window.addEventListener("click", (_) => {
//   videoElement.play();
// });

// window.addEventListener("click", (event) => {
//   video.playAndPause();
// });

muteButton.addEventListener("click", (_) => {
  video.mute();
});

volumeUpButton.addEventListener("click", (_) => {
  video.increaseVolume();
});

volumeDownButton.addEventListener("click", (_) => {
  video.decreaseVolume();
});

playButton.addEventListener("click", (_) => {
  video.playAndPause();
});

// pauseButton.addEventListener("click", (_) => {
//   video.pause();
// });

seekForward.addEventListener("click", (_) => {
  video.seekForward();
});

seekBackward.addEventListener("click", (_) => {
  video.seekBackward();
});
