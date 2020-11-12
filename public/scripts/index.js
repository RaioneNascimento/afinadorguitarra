'use strict'; //modo mais rigoroso

const sounds = {
  'E': '6-E.mp3',
  'A': '5-A.mp3',
  'D': '4-D.mp3',
  'G': '3-G.mp3',
  'B': '2-B.mp3',
  'M': '1-E.mp3'
}

const createDiv = (text) => {
  const div = document.createElement('div');
  div.classList.add('key');
  div.textContent = text;
  div.id = text;
  document.getElementById('container').appendChild(div);
};

const show = (sounds) => {
  Object.keys(sounds).forEach(createDiv);
};

const playSound = (lyrics) => {
  const audio = new Audio(`./public/sounds/${sounds[lyrics]}`);
  audio.play();
};

const addEffect = (lyric) => {
  document.getElementById(lyric)
          .classList.add('active')
};

const removeEffect = (lyric) => {
  const div = document.getElementById(lyric);
  const removeActive = () => div.classList.remove('active')
  div.addEventListener('transitionend', removeActive);
};

const activeDiv = (event) => {
  const lyric = event.type == 'click' ? event.target.id : event.key.toUpperCase();
  const lyricOk = sounds.hasOwnProperty(lyric);
  if (lyricOk) {
    addEffect(lyric);
    playSound(lyric);
    removeEffect(lyric);
  } 
}

show(sounds);

document.getElementById('container')
        .addEventListener('click', activeDiv);

window.addEventListener('keydown', activeDiv);