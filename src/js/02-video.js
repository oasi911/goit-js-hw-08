import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');

const video = document.querySelector('iframe');
const player = new Vimeo(video);

function onPlay(time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}

player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = localStorage.getItem('videoplayer-current-time');
const parsedCurrentTime = JSON.parse(currentTime);

if (currentTime) {
  player.setCurrentTime(parsedCurrentTime.seconds);
}
