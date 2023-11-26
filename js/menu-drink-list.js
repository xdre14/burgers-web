(function () {
    const products = [
      {
        id: 1,
        img: 'menu-img/drink-coca.png',
        name: 'Coca-cola',
        prise: '$2,00',
        desc: 'There is nothing better than a Coke after a hearty burger! Enjoy an ice-cold cola at Freddy Burgers!',
      },
      {
        id: 2,
        img: 'menu-img/drink-strawberry.png',
        name: 'Strawberry Lemonade',
        prise: '$7,00',
        desc: 'House-made fresh and sparkling lemonade with strawberries, mint, and ice cubes',
      },
      {
        id: 3,
        img: 'menu-img/drink-weiss-beer.png',
        name: 'Weiss Beer',
        prise: '$5,00',
        desc: 'Have a sip of cold draft beer! We offer several types of lager beer to choose from',
      },
      {
        id: 4,
        img: 'menu-img/drink-stout-beer.png',
        name: 'Stout Beer',
        prise: '$5,00',
        desc: 'Indulge yourself with the bitter and full-bodied taste of draft stout beer at Freddy Burgers!',
      },
      {
        id: 5,
        img: 'menu-img/drink-mojito.png',
        name: 'Mojito',
        prise: '$15,00',
        desc: 'Plantation 3 Star white rum, fresh lime juice, brown sugar, mint, soda water, and ice cubes',
      },
      {
        id: 6,
        img: 'menu-img/drink-fresh-juice.png',
        name: 'Fresh Juice',
        prise: '$6,00',
        desc: 'Orange, pomegranate, apple, pineapple, banana & strawberry, grape, celery, and carrot — on your choice',
      },
      {
        id: 7,
        img: 'menu-img/drink-sex-on-the-beach.png',
        name: 'Sex on the Beach',
        prise: '$15,00',
        desc: 'Classic mix of cranberry juice, orange juice, Finlandia vodka, and peach schnapps in a highball glass',
      },
      {
        id: 8,
        img: 'menu-img/drink-soda-water.png',
        name: 'Soda Water',
        prise: '$4,00',
        desc: 'Carbonated water will refresh your receptors and give you a feeling of cheerfulness',
      },
    ];
  
    function renderProducts(products) {
      const productsContainer = document.querySelector('#drinks');
      productsContainer.innerHTML = '';
      for (const product of products) {
        productsContainer.innerHTML += `
              <article class="menu__tab-box-card-container">
              <img class="menu__tab-box-card-img" src="${product.img}" alt="${product.name}">
              <div class="menu__tab-box-card-content">
                <div class="menu__tab-box-card-title-price">
                  <h4 class="menu__tab-box-card-title">${product.name}</h4>
                  <span></span>
                  <h5 class="menu__tab-box-card-price">${product.prise}</h5>
                </div>
                <p class="menu__tab-box-card-sub">${product.desc}</p>
              </div>
              </article>`;
      }
    }
  
    renderProducts(products);
  })();
  