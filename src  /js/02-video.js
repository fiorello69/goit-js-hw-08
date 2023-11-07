import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const storedTime = localStorage.getItem('videoplayer-current-time');
const initialTime = storedTime ? parseFloat(storedTime) : 0;
player.setCurrentTime(initialTime);
player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toFixed(1));
  }, 1000)
);
