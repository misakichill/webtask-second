'use strict';

{

// メニュー
 const show = document.getElementById('show');
 const menu = document.getElementById('hamburger-menu');
 const close = document.getElementById('close');

 show.addEventListener('click', () => {
    menu.classList.toggle('open');
    close.classList.toggle('open');
    show.classList.remove('open');
 });

 close.addEventListener('click', () => {
    menu.classList.toggle('open');
    close.classList.toggle('open');
    show.classList.add('open');
 });


//  スライドショー
const topImages = [
   '../img/top-image1.png',
   '../img/top-image2.png',
   '../img/top-image3.png',
   '../img/top-image4.png',
   '../img/top-image5.png',
   '../img/top-image6.png'
];
let num = 0;

function playSlideShow() {
   if(num === topImages.length -1) {
      num = 0;
   } else {
      num ++;
   }
   document.getElementById('top-image').src = topImages[num];
}
setInterval(playSlideShow, 2000);

}
