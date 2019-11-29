'use strict';

{

// メニュー
  const header = document.getElementById('header');
  const show = document.getElementById('show');
  const burMenu = document.getElementById('bur-menu-wrap');
  const burTitle = document.getElementById('bur-header-title');
  const close = document.getElementById('close');   
  const smpTitle = document.getElementById('smp-title');
  const barSmpTitle = document.getElementById('bar-smp-title');

  show.addEventListener('click', () => {
    burMenu.style.display = 'block';
    close.style.display = 'block';
    show.style.display = 'none';
    header.style.display = 'none';
    barSmpTitle.style.display = 'none';
  });

  close.addEventListener('click', () => {
    burMenu.style.display = 'none';
    close.style.display = 'none';
    show.style.display = 'block';
    header.style.display = 'block';
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
    if(num === topImages.length - 1) {
        num = 0;
    } else {
        num ++;
    }
    document.getElementById('top-image').src = topImages[num];
  }

  let setSlide;

  function startSlide() {
    setSlide = setInterval(playSlideShow, 2000);
  }

  startSlide();

  function stopSlide() {
    clearInterval(setSlide);
  }


  // 414px 以下

    const mediaQuery = matchMedia('(max-width: 414px)');

    handle(mediaQuery);
    mediaQuery.addListener(handle);

    function handle(mq) {
      if(mq.matches) {

        // メニュー
        show.addEventListener('click', () => {
          barSmpTitle.style.display = 'block';
        });

      }
    }


    // 375px 以下

    const mediaQueryXs = matchMedia('(max-width: 375px)');

    handleXs(mediaQueryXs);
    mediaQueryXs.addListener(handleXs);

    function handleXs(mqXs) {
      if(mqXs.matches) {

        // スライドショー停止
        stopSlide();

        // xsスライドショー
        const topImagesXs = [
          '../img/smp-bg1.png',
          '../img/smp-bg2.png',
          '../img/smp-bg3.png',
          '../img/smp-bg4.png',
        ];
        let numXs = 0;
        
        function playSlideShowXs() {
          if(numXs === topImagesXs.length - 1) {
            numXs = 0;
          } else {
            numXs ++;
          }
          document.getElementById('top-image-xs').src = topImagesXs[numXs];
        }
        setInterval(playSlideShowXs, 2000);

      }
    }




}