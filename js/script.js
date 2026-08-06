// js/script.js

const audio = document.getElementById("audio");

const radioIcon =
document.querySelector(".radio-icon");

audio.addEventListener("error", () => {
  console.error("Erro ao carregar áudio:", audio.src);
});

const musicName = document.getElementById("musicName");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const progress = document.getElementById("progress");


// PLAYLIST
const tracks = [

  {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },
      {
    title:"Mensagem: A Cura do Leproso - Evangelista Diego Nascimento",
    src:"audio/A Cura do Leproso - Diego Nascimento (youtube).mp3"
  },
  {
    title:"I See the Lord (Live) - Ron Kenoly - Integrity Music",
    src:"audio/Música - Ron Kenoly - I See the Lord (Live) - Integrity Music (youtube).mp3"
  },
  {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
      {
    title:"Mensagem: Vinde a Mim - Evangelista Diego Nascimento",
    src:"audio/Mensagem - “Vinde a Mim” — A Mensagem de Jesus Para Quem Está Cansado e Sobrecarregado  Mateus 1128–30 - Diego Nascimento (youtube).mp3"
  },
  {
    title:"Pão da Vida",
    src:"audio/Pão da Vida Rachel Mt 6 33.m4a"
  },
  {
    title:"Be Thou My Vision",
    src:"audio/Música - BE THOU MY VISION -- My Favorite Irish Hymn! ) - NathanPachecoMusic (youtube).mp3"
  },
  {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
  {
    title:"Deus é Amor",
    src:"audio/Sarah Deus é Amor.m4a"
  },
      {
    title:"Mensagem: A quem tendes servido? - Evangelista Diego Nascimento",
    src:"audio/Mensagem - A quem tendes servido - Diego Nascimento (youtube).mp3"
  },
  {
    title:"Lamb Of God - Maranatha! Music",
    src:"audio/Música - Lamb Of God - Maranatha! Music (youtube).mp3"
  },
  {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },
  {
    title:"Mensagem: A Santidade de Deus - Evangelista Diego Nascimento",
    src:"audio/Mensagem - A Santidade de Deus - O Atalaia - Diego Nascimento (youtube).mp3"
  },

  {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
    {
    title:"In Christ Alone",
    src:"audio/In Christ Alone).mp3"
  },


  {
    title:"Pão da Vida",
    src:"audio/Pão da Vida Rachel Mt5 6.m4a"
  },
    {
    title:"Mensagem: Adoração Celestial - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Adoração Celestial - O Atalaia - Diego Nascimento (youtube).mp3"
  },
  {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
      {
    title:"Here I am to worship",
    src:"audio/Here I am to worship.mp3"
  },

  {
    title:"Deus é Alegria",
    src:"audio/Deus é Alegria.ogg"
  },
      {
    title:"Mensagem: Crer e Confessar - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Crer e Confessar - O Atalaia - Diego Nascimento (youtube).mp3"
  },
    {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },
      {
    title:"Majesty",
    src:"audio/Majesty (Live) - Michael W. Smith (youtube).mp3"
  },

      {
    title:"Mensagem: Encontre a Paz no Centro da Tempestade - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Encontre a Paz no Centro da Tempestade - O Atalaia - Diego Nascimento (youtube).mp3"
  },
 
  {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },  
      {
    title:"Worthy Is The Lamb",
    src:"audio/Worthy Is The Lamb - Brooklyn Tabernacle Choir (youtube).mp3"
  },

      {
    title:"Mensagem: Acontecimentos Finais - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Escatologia - Acontecimentos Finais - Diego Nascimento (youtube).mp3"
  },

    {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
      {
    title:"Agnus Dei",
    src:"audio/Agnus Dei (Live) - Michael W. Smith (youtube).mp3"
  },


      {
    title:"Mensagem: Maravilhosa Graça - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Maravilhosa Graça - O Atalaia - Diego Nascimento (youtube).mp3"
  },
    {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },
      {
    title:"Blessed Assurance",
    src:"audio/Blessed Assurance - Walkers to Heaven (youtube).mp3"
  },


      {
    title:"Mensagem: Na Fenda da Rocha - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Na Fenda da Rocha - O Atalaia - Diego Nascimento (youtube).mp3"
  },

  {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
      {
    title:"Amazing Grace",
    src:"audio/Amazing Grace (My Chains Are Gone) - Chris Tomlin (youtube).mp3"
  },



      {
    title:"Mensagem: O Sinal do Filho do Homem - Evangelista Diego Nascimento",
    src:"audio/Mensagem - O Sinal do Filho do Homem - O Atalaia - Diego Nascimento (youtube).mp3"
  },

    {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
      {
    title:"Holy Holy Holy",
    src:"audio/Alvin Slaughter- Holy Holy Holy - SEBAOT (youtube).mp3"
  },


      {
    title:"Mensagem: Pai Nosso que estás nos céus - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Pai Nosso que estás nos céus - O Atalaia - Diego Nascimento (youtube).mp3"
  },
    {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },
      {
    title:"Holy, Holy, Holy (Hymn 48)",
    src:"audio/Holy, Holy, Holy (Hymn 48).mp3"
  },



      {
    title:"Mensagem: Sinais dos Tempos - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Sinais dos Tempos - Diego Nascimento (youtube).mp3"
  },

  {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
      {
    title:"Goodness of God",
    src:"audio/Goodness of God.mp3"
  },


      {
    title:"Mensagem: Sou Pecador - Evangelista Diego Nascimento",
    src:"audio/Mensagem - Sou Pecador - O Atalaia - Diego Nascimento (youtube).mp3"
  },

    {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
      {
    title:"Ancient of Days",
    src:"audio/LOUVOR E HONRA (ANCIENT OF DAYS).mp3"
  },


      {
    title:"Mensagem: Quem ouvirá: 'Nunca vos conheci'? - Evangelista Diego Nascimento",
    src:"audio/Mensagemm - Quem ouvirá Nunca vos conheci Um alerta para todos os cristãos - Diego Nascimento (youtube).mp3"
  },
    {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },
      {
    title:"I See The Lord",
    src:"audio/I See The Lord.mp3"
  },
    {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
        {
    title:"Mensagem: A Purificação do Leproso - Evangelista Diego Nascimento",
    src:"audio/A Purificação do Leproso - 18min.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
          {
    title:"Mensagem: Arrepende-te dos Teus Pecados - Evangelista Diego Nascimento",
    src:"audio/Arrepende-te dos Teus Pecados 15min.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },

            {
    title:"Mensagem: JESUS ou Barrabás - Evangelista Diego Nascimento",
    src:"audio/JESUS ou Barrabás.mp3"
  },


  
      {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
        {
    title:"Mensagem: Arrependa-se - Evangelista Diego Nascimento",
    src:"audio/MRD - Arrependa-se.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
          {
    title:"Mensagem: Arrependei-vos - Evangelista Diego Nascimento",
    src:"audio/MRD - Arrependei-vos.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },

            {
    title:"Mensagem: O Chamado de Deus - Evangelista Diego Nascimento",
    src:"audio/MRD - O Chamado de Deus.mp3"
  },




      {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
        {
    title:"Mensagem: O Convite da Graça - Evangelista Diego Nascimento",
    src:"audio/MRD - O Convite da Graça.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
          {
    title:"Mensagem: O Livro da Vida - Evangelista Diego Nascimento",
    src:"audio/MRD - O Livro da Vida.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },

            {
    title:"Mensagem: O REINO DE DEUS - Evangelista Diego Nascimento",
    src:"audio/MRD - O REINO DE DEUS.mp3"
  },






      {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
        {
    title:"Mensagem: Temer a Deus - Evangelista Diego Nascimento",
    src:"audio/MRD - Temer a Deus.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
          {
    title:"Mensagem: VIDA EM ABUNDÂNCIA - Evangelista Diego Nascimento",
    src:"audio/MRD - VIDA EM ABUNDÂNCIA.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },

            {
    title:"Mensagem: ZAQUEU O PUBLICANO - Evangelista Diego Nascimento",
    src:"audio/MRD - ZAQUEU O PUBLICANO.mp3"
  },




      {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
        {
    title:"Mensagem: O Grande Amor de Deus - Evangelista Diego Nascimento",
    src:"audio/O Grande Amor de Deus - 21min.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
          {
    title:"Mensagem: O Propósito de Deus para a Humanidade - Evangelista Diego Nascimento",
    src:"audio/O Propósito de Deus para a Humanidade.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },

            {
    title:"Mensagem: O Rico e Lázaro - Evangelista Diego Nascimento",
    src:"audio/O Rico e Lázaro.mp3"
  },




      {
    title:"Rádio Atalaia Spot",
    src:"audio/Rádio Atalaia Spot.m4a"
  },
        {
    title:"Mensagem: Para Que Deus Enviou Cristo - Evangelista Diego Nascimento",
    src:"audio/Para Que Deus Enviou Cristo - 10min.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia.mpeg"
  },
          {
    title:"Mensagem: Será Que Deus Me Ama - Evangelista Diego Nascimento",
    src:"audio/Será Que Deus Me Ama - 08min.mp3"
  },

      {
    title:"Rádio Atalaia",
    src:"audio/Rádio Atalaia Abertura.m4a"
  },

            {
    title:"Mensagem: Vestes de Salvação - Evangelista Diego Nascimento",
    src:"audio/MRD - Vestes de Salvação.mp3"
  },










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
atualizarRadio();
localStorage.setItem("trackIndex",index);
}

function atualizarRadio(){
  if(audio.paused){
    radioIcon.classList.remove("playing");
  }else{
    radioIcon.classList.add("playing");
  }
}


// PLAY
playBtn.addEventListener("click",()=>{

  audio.play();
});

audio.addEventListener("play", atualizarRadio);


// PAUSE
pauseBtn.addEventListener("click",()=>{

  audio.pause();
});

audio.addEventListener("pause", atualizarRadio);

// PRÓXIMA
nextBtn.addEventListener("click",()=>{

  nextTrack();
});

audio.addEventListener("ended", atualizarRadio);


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

  if(!db) return;

  const tx =
  db.transaction(
    "playerState",
    "readwrite"
  );

  const store =
  tx.objectStore(
    "playerState"
  );

  store.put({

    id:1,

    track:currentTrack,

    time:audio.currentTime

  });

}

// CARREGAR SALVAMENTO
function loadSavedState(){

  if(!db){

    loadTrack(currentTrack);

    return;
  }

  const tx =
  db.transaction(
    "playerState",
    "readonly"
  );

  const store =
  tx.objectStore(
    "playerState"
  );

  const getRequest =
  store.get(1);

  getRequest.onsuccess =
  function(){

    if(getRequest.result){

      currentTrack =
      getRequest.result.track;

      loadTrack(currentTrack);

      audio.currentTime =
      getRequest.result.time;

    }else{

      const savedTrack =
      localStorage.getItem(
        "trackIndex"
      );

      const savedTime =
      localStorage.getItem(
        "currentTime"
      );

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
if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    async () => {

      try {

        const registration =
        await navigator
        .serviceWorker
        .register(
          "./service-worker.js"
        );

        console.log(
          "Service Worker registrado:",
          registration.scope
        );

      } catch (error) {

        console.error(
          "Erro ao registrar Service Worker:",
          error
        );

      }

    }
  );

}

// BOTÃO COMPARTILHAR
const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

  shareBtn.addEventListener("click", async () => {

    const shareData = {
      title: "Rádio Atalaia",
      text: "Ouça agora a Rádio Atalaia - A Voz que Ecoa Esperança",
      url: window.location.href
    };

    // NAVEGADOR SUPORTA SHARE
    if (navigator.share) {

      try {

        await navigator.share(shareData);

        console.log("Compartilhado com sucesso");

      } catch (error) {

        console.log("Compartilhamento cancelado");

      }

    } else {

      // FALLBACK
      try {

        await navigator.clipboard.writeText(window.location.href);

        alert("Link copiado para compartilhar!");

      } catch {

        alert("Seu navegador não suporta compartilhamento.");

      }

    }

  });

}