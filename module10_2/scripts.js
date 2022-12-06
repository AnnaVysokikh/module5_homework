const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let width_ = window.screen.width;
  let height_ = window.screen.height;
 
  let innerWidth_ = window.innerWidth;
  let innerheight_ = window.innerHeight;
  
  let clientWidth_ = document.documentElement.clientWidth;
  let clientHeight_ = document.documentElement.clientHeight;
  
  alert(`  Размер монитора: ${width_} на ${height_}.
  Размер экрана с учётом полосы прокрутки: ${innerWidth_} на ${innerheight_}.
  Размер экрана без учёта полосы прокрутки: ${clientWidth_} на ${clientHeight_}.`);
}) 