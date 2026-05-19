// js/script.js

const audio = document.getElementById("audio");

const musicName = document.getElementById("musicName");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const progress = document.getElementById("progress");


// PLAYLIST
const tracks = [

  {
    title:"Faixa 1",
    src:"audio/faixa1.mp3"
  },

  {
    title:"Faixa 2",
    src:"audio/faixa2.mp3"
  },

  {
    title:"Faixa 3",
    src:"audio/faixa3.mp3"
  }

];

let currentTrack = 0;


// INDEXED DB
let db;

const request = indexedDB.open("radioAtalaiaDB",1);

request.onupgradeneeded = function(e){

  db = e.target.result;

  db.createObjectStore("playerState",{keyPath:"id"});
};

request.onsuccess = function(e){

  db = e.target.result;

  loadSavedState();
};


// CARREGAR FAIXA
function loadTrack(index){

  audio.src = tracks[index].src;

  musicName.innerText = tracks[index].title;

  localStorage.setItem("trackIndex",index);
}


// PLAY
playBtn.addEventListener("click",()=>{

  audio.play();
});


// PAUSE
pauseBtn.addEventListener("click",()=>{

  audio.pause();
});


// PRÓXIMA
nextBtn.addEventListener("click",()=>{

  nextTrack();
});


// ANTERIOR
prevBtn.addEventListener("click",()=>{

  currentTrack--;

  if(currentTrack < 0){

    currentTrack = tracks.length - 1;
  }

  loadTrack(currentTrack);

  audio.play();
});


// AUTO NEXT
audio.addEventListener("ended",()=>{

  nextTrack();
});

function nextTrack(){

  currentTrack++;

  if(currentTrack >= tracks.length){

    currentTrack = 0;
  }

  loadTrack(currentTrack);

  audio.play();
}


// BARRA
audio.addEventListener("timeupdate",()=>{

  const value =
  (audio.currentTime / audio.duration) * 100;

  progress.value = value || 0;

  savePlayback();
});


// MUDAR POSIÇÃO
progress.addEventListener("input",()=>{

  audio.currentTime =
  (progress.value / 100) * audio.duration;
});


// SALVAR
function savePlayback(){

  localStorage.setItem(
    "currentTime",
    audio.currentTime
  );

  const tx =
  db.transaction("playerState","readwrite");

  const store =
  tx.objectStore("playerState");

  store.put({

    id:1,

    track:currentTrack,

    time:audio.currentTime
  });
}


// CARREGAR SALVAMENTO
function loadSavedState(){

  const tx =
  db.transaction("playerState","readonly");

  const store =
  tx.objectStore("playerState");

  const getRequest = store.get(1);

  getRequest.onsuccess = function(){

    if(getRequest.result){

      currentTrack =
      getRequest.result.track;

      loadTrack(currentTrack);

      audio.currentTime =
      getRequest.result.time;

    }else{

      const savedTrack =
      localStorage.getItem("trackIndex");

      const savedTime =
      localStorage.getItem("currentTime");

      if(savedTrack){

        currentTrack =
        parseInt(savedTrack);

      }

      loadTrack(currentTrack);

      if(savedTime){

        audio.currentTime =
        parseFloat(savedTime);
      }
    }
  };
}


// INICIAR
loadTrack(currentTrack);


// SERVICE WORKER
if("serviceWorker" in navigator){

  window.addEventListener("load",()=>{

    navigator.serviceWorker.register(
      "service-worker.js"
    );
  });
}