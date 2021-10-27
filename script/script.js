// video
// document.getElementById('btnPause').addEventListener('click', function(){
//     let video = document.getElementById('video')
//     video.pause();
// });
// document.getElementById('btnPlay').addEventListener('click', function(){
//     let video = document.getElementById('video')
//     video.play();
// });

const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `Country ${event.target.value}`;
});


const selectCod = document.querySelector('.cod');

selectCod.addEventListener('change', (e) => {
  const hasil = document.querySelector('.hasil');
  hasil.textContent = `Title :  ${e.target.value}`;
});
