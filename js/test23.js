document.addEventListener("DOMContentLoaded", () => {

  if (window.innerWidth < 768) {
    console.log('one');
    const pageUrl = document.location.href;
    const pageMain = document.querySelector('.page-header');
  
    const goodsSection = document.createElement('section');
    goodsSection.classList.add('goods');
    const goodsList = document.createElement('ul');
    goodsList.classList.add('goods-list');
    goodsSection.appendChild(goodsList);
  
    const itemMattresses = [
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/400-mat-ghi-small_new-min.png',
        title: '400 Hybrid',
        link: 'https://rem-fit.co.uk/rem-fit-sleep-400-series-hybrid-mattress'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-ortho-mat-which-small-min.png',
        title: '500 Ortho',
        link: 'https://rem-fit.co.uk/rem-fit-sleep-500-hybrid-mattress'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/600-menu-min.png',
        title: '600 Lux',
        link: 'https://rem-fit.co.uk/rem-fit-sleep-600-hybrid-mattress'
      }
  
    ];
  
    const itemPillows = [
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-fianl-new-min.png',
        title: '500',
        link: 'https://rem-fit.co.uk/rem-fit-500-cool-gel-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/bamboo-charcoal-pillow.png',
        title: 'Bamboo',
        link: 'https://rem-fit.co.uk/rem-fitr-bamboo-charcoal-pillow-choice-of-depths'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/pillows/hybrid-pillow-less-shadow-min.png',
        title: 'Hybrid',
        link: 'https://rem-fit.co.uk/rem-fit-hybrid-pocket-sprung-pillow-1'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/pillows/snow-pillow-less-shadow-min.png',
        title: 'Snow',
        link: 'https://rem-fit.co.uk/rem-fit-snow-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/pillows/travel-pillow3-min.png',
        title: 'Travel',
        link: 'https://rem-fit.co.uk/rem-fit-travel-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/anti-allergy-pillow-top-nav-min.png',
        title: 'Anti-allergy',
        link: 'https://rem-fit.co.uk/rem-fit-anti-allergy-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/luxury-fibre-pillow-top-nav-min.png',
        title: 'Luxury',
        link: 'https://rem-fit.co.uk/rem-fit-luxury-pillows'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/goose-pillow-top-nav-min.png',
        title: 'Goose',
        link: 'https://rem-fit.co.uk/rem-fit-goose-feather-down-pillow'
      },
    ];
  
    const itemProtectors = [
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/400-cotton-protector-min.png',
        title: '400 Cotton',
        link: 'https://rem-fit.co.uk/rem-fit-400-cotton-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/400-bamboo-protector-min.png',
        title: '400 Bamboo',
        link: 'https://rem-fit.co.uk/rem-fit-400-bamboo-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-tencel-cool-protector-min.png',
        title: 'Tencel Cool',
        link: 'https://rem-fit.co.uk/rem-fit-500-tencel-cooling-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-tencel-cloud-protector-min.png',
        title: 'Tencel Cloud',
        link: 'https://rem-fit.co.uk/rem-fit-500-tencel-cloud-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/600-tencel-protector-min.png',
        title: '600 Tencel',
        link: 'https://rem-fit.co.uk/rem-fit-600-waterproof-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/SNOW-MAT-PROTECTION-min.png',
        title: 'Snow',
        link: 'https://rem-fit.co.uk/rem-fit-cooling-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/SNOW-PILLOW-PROTECTION-min.png',
        title: 'Snow Pillow',
        link: 'https://rem-fit.co.uk/rem-fit-cooling-pillow-protector'
      }
    ];
  
    const createGoodsSection = (mapItems) => {
  
      mapItems.forEach(({source, title, link}) => {
        const goodsItem = document.createElement('li');
        goodsItem.classList.add('goods-item');
        goodsList.appendChild(goodsItem);
  
        const goodsLink = document.createElement('a');
        goodsLink.classList.add('goods-link');
        goodsLink.href = link;
        goodsItem.appendChild(goodsLink);
  
        const imageWrap = document.createElement('div');
        imageWrap.classList.add('goods-imagewrap');
        goodsLink.appendChild(imageWrap);
  
        const imageElement = document.createElement('img');
        imageElement.classList.add('goods-image');
        imageElement.src = source;
        imageWrap.appendChild(imageElement);
  
        const titleElement = document.createElement('h3');
        titleElement.classList.add('goods-title');
        titleElement.textContent = title;
        goodsLink.appendChild(titleElement);
      });
    };
  
    
    /*
    if (pageUrl.endsWith('mattress')) {
      createGoodsSection(itemMattresses);
    }
  
    if (pageUrl.includes('pillow')) {
      createGoodsSection(itemPillows);
    }
    
  
    if (pageUrl.endsWith('protector')) {
      createGoodsSection(itemProtectors);
    }
    */

    createGoodsSection(itemProtectors);
    
    pageMain.insertAdjacentElement('afterend', goodsSection);
    
    
    let slider = document.querySelector('.goods'),
    sliderList = slider.querySelector('.goods-list'),
    slides = slider.querySelectorAll('.goods-item'),
  
    slideWidth = slides[0].offsetWidth,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posFinal = 0,
    posThreshold = slideWidth * .35,
    trfRegExp = /[-0-9.]+(?=px)/,
    slide = function() {
      sliderList.style.transition = 'transform .5s';
      sliderList.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
      
    }
    
    const getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event;
  
    const swipeStart = function() {
      let evt = getEvent();
      posInit = posX1 = evt.clientX;
      sliderList.style.transition = '';
      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
    };
  
    const swipeAction = function() {
      let evt = getEvent(),
      
      style = sliderList.style.transform,
     
      transform = +style.match(trfRegExp)[0];
      console.log(transform);
  
      posX2 = posX1 - evt.clientX;
      posX1 = evt.clientX;
  
      sliderList.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    };
    
    const swipeEnd = function() {
   
      posFinal = posInit - posX1;
  
      document.removeEventListener('touchmove', swipeAction);
      document.removeEventListener('touchend', swipeEnd);
   
      if (Math.abs(posFinal) > posThreshold) {
      
        if (posInit < posX1) {
          slideIndex--;
   
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }
      if (posInit !== posX1) {
        slide();
      }
  
    };
    slider.addEventListener('touchstart', swipeStart);
  }
  });