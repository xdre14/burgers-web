(function () {
    function openProducts(evt, productName) {
      let i, menuTabContent, menuTabItems;
      menuTabContent = document.querySelectorAll('.menu__tab-box-content');
      for (i = 0; i < menuTabContent.length; i++) {
        menuTabContent[i].style.display = 'none';
      }
      menuTabItems = document.querySelectorAll('.tab-box__button-container');
  
      for (i = 0; i < menuTabItems.length; i++) {
        menuTabItems[i].className = menuTabItems[i].className.replace(' menu__tab-box--active', '');
      }
      document.getElementById(productName).style.display = 'flex';
      evt.currentTarget.className += ' menu__tab-box--active';
    }
  
    document.querySelector('.tab-box-burger').onclick = function () {
      openProducts(event, 'burgers');
    };
    document.querySelector('.tab-box-salad').onclick = function () {
      openProducts(event, 'salads');
    };
    document.querySelector('.tab-box-drink').onclick = function () {
      openProducts(event, 'drinks');
    };
    document.getElementById('defaultOpen').click();
  })();
  