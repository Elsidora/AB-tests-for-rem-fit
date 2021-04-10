const mapNavigation = [
  {
    subNavigation: [
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/400-mat-ghi-small_new-min.png',
        subtitle: '400 Hybrid',
        sublink: 'https://rem-fit.co.uk/rem-fit-sleep-400-series-hybrid-mattress'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-ortho-mat-which-small-min.png',
        subtitle: '500 Ortho',
        sublink: 'https://rem-fit.co.uk/rem-fit-sleep-500-hybrid-mattress'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/600-menu-min.png',
        subtitle: '600 Lux',
        sublink: 'https://rem-fit.co.uk/rem-fit-sleep-600-hybrid-mattress'
      }
    ],
    allGoods: 'Shop All Mattresses',
    link: 'https://rem-fit.co.uk/rem-fit-mattresses',
    id: 'id-mattresses',
    dropdownId: 'nav-1',
    linkId: 'ui-id-2'
  },
  {
    subNavigation: [
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-fianl-new-min.png',
        subtitle: '500 (Best Seller)',
        sublink: 'https://rem-fit.co.uk/rem-fit-500-cool-gel-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/pillows/hybrid-pillow-less-shadow-min.png',
        subtitle: 'Hybrid',
        sublink: 'https://rem-fit.co.uk/rem-fit-hybrid-pocket-sprung-pillow-1'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/pillows/snow-pillow-less-shadow-min.png',
        subtitle: 'Snow',
        sublink: 'https://rem-fit.co.uk/rem-fit-snow-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/pillows/travel-pillow3-min.png',
        subtitle: 'Luxury Travel',
        sublink: 'https://rem-fit.co.uk/rem-fit-travel-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/anti-allergy-pillow-top-nav-min.png',
        subtitle: 'Anti-allergy',
        sublink: 'https://rem-fit.co.uk/rem-fit-anti-allergy-pillow'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/luxury-fibre-pillow-top-nav-min.png',
        subtitle: 'Luxury Fibre',
        sublink: 'https://rem-fit.co.uk/rem-fit-luxury-pillows'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/goose-pillow-top-nav-min.png',
        subtitle: 'Goose down',
        sublink: 'https://rem-fit.co.uk/rem-fit-goose-feather-down-pillow'
      },
    ],
    allGoods: 'Shop All Pillows',
    link: 'https://rem-fit.co.uk/rem-fit-pillows',
    id: 'id-pillows',
    dropdownId: 'nav-2',
    linkId: 'ui-id-3'
  },
  {
    subNavigation: [
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/400-cotton-protector-min.png',
        subtitle: '400 Cotton',
        sublink: 'https://rem-fit.co.uk/rem-fit-400-cotton-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/400-bamboo-protector-min.png',
        subtitle: '400 Bamboo',
        sublink: 'https://rem-fit.co.uk/rem-fit-400-bamboo-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-tencel-cool-protector-min.png',
        subtitle: '500 Tencel Cool',
        sublink: 'https://rem-fit.co.uk/rem-fit-500-tencel-cooling-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/500-tencel-cloud-protector-min.png',
        subtitle: '500 Tencel Cloud',
        sublink: 'https://rem-fit.co.uk/rem-fit-500-tencel-cloud-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/600-tencel-protector-min.png',
        subtitle: '600 Tencel',
        sublink: 'https://rem-fit.co.uk/rem-fit-600-waterproof-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/SNOW-MAT-PROTECTION-min.png',
        subtitle: 'Snow',
        sublink: 'https://rem-fit.co.uk/rem-fit-cooling-mattress-protector'
      },
      {
        source: 'https://rem-fit.co.uk/media/wysiwyg/remfit/nav/SNOW-PILLOW-PROTECTION-min.png',
        subtitle: 'Snow Pillow',
        sublink: 'https://rem-fit.co.uk/rem-fit-cooling-pillow-protector'
      }
    ],
    allGoods: 'Shop All Protectors',
    link: 'https://rem-fit.co.uk/mattress-protectors',
    id: 'id-protectors',
    dropdownId: 'nav-3',
    linkId: 'ui-id-4'
  }
];

const navigation = document.querySelector('.navigation');
const levelTopFullwidth = navigation.querySelectorAll('.level-top-fullwidth');

if (window.innerWidth < 768) {
  levelTopFullwidth.forEach((item) => {
      
    mapNavigation.forEach(({subNavigation, allGoods, link, id, dropdownId, linkId}) => {
      const dropdownWrap = document.createElement('div');
      dropdownWrap.classList.add('nav-inner', 'level0', 'submenu', 'fullwidth', 'hide-all-category', 'has-menu-block', 'top-block-child',  'top-moved', 'ui-menu', 'ui-widget', 'ui-widget-content', 'ui-corner-all');
      dropdownWrap.classList.add(id, linkId);
      dropdownWrap.id = dropdownId;

      if (item.className.includes(dropdownWrap.id)) {
        const itemSubmenu = item.querySelector('ul');
        itemSubmenu.replaceWith(dropdownWrap);
      } else {
        return;
      }
      /*
      if (dropdownWrap.className.includes('id-mattresses')) {
        // const linkActive = dropdownWrap.previousElementSibling;
        dropdownWrap.classList.add('nav-active');
      }
      */

      const navSublist = document.createElement('ul');
      navSublist.classList.add('nav-sublist');
      navSublist.removeAttribute('aria-hidden', 'aria-expanded', 'style');
      dropdownWrap.appendChild(navSublist);

      subNavigation.forEach(({source, subtitle, sublink}) => {
        const subitemElement = document.createElement('li');
        subitemElement.classList.add('nav-subitem');
        navSublist.appendChild(subitemElement);

        const sublinkElement = document.createElement('a');
        sublinkElement.classList.add('nav-sublink');
        sublinkElement.href = sublink;
        subitemElement.appendChild(sublinkElement);

        const imageWrap = document.createElement('div');
        imageWrap.classList.add('nav-imagewrap');
        sublinkElement.appendChild(imageWrap);

        const imageElement = document.createElement('img');
        imageElement.classList.add('nav-image');
        imageElement.src = source;
        imageWrap.appendChild(imageElement);

        const subtitleElement = document.createElement('h3');
        subtitleElement.classList.add('nav-subtitle');
        subtitleElement.textContent = subtitle;
        sublinkElement.appendChild(subtitleElement);

        navSublist.appendChild(subitemElement);
      });

      const linkAllshop = document.createElement('a');
      linkAllshop.classList.add('nav-shop');
      linkAllshop.href = link;
      linkAllshop.textContent = allGoods;
      dropdownWrap.appendChild(linkAllshop);
      
    });

  });
  const navigationList = document.querySelector('.navigation');
  const navInnerElements = navigationList.querySelectorAll('.nav-inner');
  const linkClickHandler = (evt) => {
    evt.preventDefault();
    if (!evt.target.className.includes('level-top')) {
      return;
    }
    navInnerElements.forEach((element) => {
      if (element.className.includes(evt.target.id)) {
        element.classList.toggle('nav-active');
        evt.target.blur();
      }
    });
    
  };
  navigationList.addEventListener('click', linkClickHandler);
}

/*
  const levelLinks = document.querySelectorAll('.level-top');
  levelLinks.forEach((levelLink) => {
    levelLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      levelLink.parentElement.parentElement.style.marginTop = '71px';
    
  });
  
  });

  const navToggle = document.querySelector('.nav-toggle');
  
  const linkClickHandler = (evt) => {
    evt.preventDefault();
    const navigationList = document.querySelector('.navigation');
    const firstLi = navigationList.querySelector('first');
    const navInnerElement = firstLi.querySelector('.nav-inner');
  
    navInnerElement.setAttribute('aria-hidden', 'false');
    navInnerElement.setAttribute('aria-expanded', 'true');
    navInnerElement.style.display = 'block';
    
  };
  navToggle.addEventListener('click', linkClickHandler);

const navigationList = document.querySelector('.navigation');
    const navInnerElements = navigationList.querySelectorAll('.nav-inner');
    const linkClickHandler = (evt) => {
      evt.preventDefault();
      if (!evt.target.className.includes('level-top')) {
        return;
      }
      navInnerElements.forEach((element) => {
        if (element.className.includes(evt.target.id)) {
          element.classList.toggle('nav-active');
          evt.target.blur();
        }
      });
    
    };
    navigationList.addEventListener('click', linkClickHandler);
*/
