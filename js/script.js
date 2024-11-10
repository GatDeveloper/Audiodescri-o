
const botao = {
    projeto: document.querySelector('#audiodescrição'),
    buddy: document.querySelector('#buddyBuilder'),
    taste: document.querySelector('#tasteMap'),
    rastre: document.querySelector('#rastreio'),
    chet: document.querySelector('#chetOn'),
    plantson: document.querySelector('#plantson')
}



const audio = {
    projeto: document.querySelector('#audioProjeto'),
    buddy: document.querySelector('#audioBuddy'),
    taste: document.querySelector('#audioTaste'),
    rastre: document.querySelector('#audioRastre'),
    chet: document.querySelector('#audioChet'),
    plantson: document.querySelector('#audioPlantson')
}

botao.projeto.addEventListener('click', ()=>{
    audio.projeto.currentTime = 0;
    audio.projeto.play();
    audio.taste.pause();
    audio.buddy.pause();
    audio.rastre.pause();
    audio.chet.pause();
    audio.plantson.pause();
    mostrarPopup();

});

botao.buddy.addEventListener('click', ()=>{
    audio.buddy.currentTime = 0;
    audio.buddy.play();
    audio.taste.pause();
    audio.projeto.pause();
    audio.rastre.pause();
    audio.chet.pause();
    audio.plantson.pause();
    mostrarPopup();

});

botao.taste.addEventListener('click', ()=>{
    audio.taste.currentTime = 0;
    audio.taste.play();
    audio.buddy.pause();
    audio.projeto.pause();
    audio.rastre.pause();
    audio.chet.pause();
    audio.plantson.pause();
    mostrarPopup();

});

botao.plantson.addEventListener('click', ()=>{
    audio.plantson.currentTime = 0;
    audio.plantson.play();
    audio.taste.pause();
    audio.projeto.pause();
    audio.rastre.pause();
    audio.chet.pause();
    audio.buddy.pause();
    mostrarPopup();

});

botao.rastre.addEventListener('click', ()=>{
    audio.rastre.currentTime = 0;
    audio.rastre.play();
    audio.taste.pause();
    audio.projeto.pause();
    audio.buddy.pause();
    audio.chet.pause();
    audio.plantson.pause();
    mostrarPopup();

});

botao.chet.addEventListener('click', ()=>{
    audio.chet.currentTime = 0;
    audio.chet.play();
    audio.taste.pause();
    audio.projeto.pause();
    audio.rastre.pause();
    audio.buddy.pause();
    audio.plantson.pause();
    mostrarPopup();
});

const popup = document.getElementById("popup");

function mostrarPopup() {
    popup.style.display = "block";  // Exibe o pop-up
    setTimeout(() => {
      popup.style.display = "none";  // Esconde o pop-up após 3 segundos
    }, 5000); // 3000ms = 3 segundos
  }