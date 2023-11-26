(function () {
    const products = [
      {
        id: 1,
        img: 'menu-img/burger-chicken.png',
        name: 'Chicken burger',
        prise: '$12,00',
        desc: 'Chicken breast, basil pesto, mustard mayo, tomato, lettuce, caramelized onions, and pepper',
      },
      {
        id: 2,
        img: 'menu-img/burger-freshburger.png',
        name: 'Freshburger',
        prise: '$13,00',
        desc: 'Beef, red onion relish, lettuce, two kinds of pepper, melted cheese slices, and classic Freddy sauce',
      },
      {
        id: 3,
        img: 'menu-img/burger-egg-freshburger.png',
        name: 'Egg Freshburger',
        prise: '$17,00',
        desc: 'Beef, fried egg, red onion, lettuce, pepper, melted cheese slices, and classic Freddy sauce',
      },
      {
        id: 4,
        img: 'menu-img/burger-hamburger.png',
        name: 'Hamburger',
        prise: '$12,00',
        desc: 'Classic beef patty, Freddy sauce, melted cheese, sliced tomatoes, onion, lettuce, and cucumber',
      },
      {
        id: 5,
        img: 'menu-img/burger-black.png',
        name: 'Black Hamburger',
        prise: '$23,00',
        desc: 'Fresh bun with squid ink, beef patty, red onion, tomatoes, melted cheese, and lettuce',
      },
      {
        id: 6,
        img: 'menu-img/burger-buffalo.png',
        name: 'Buffalo Ranch',
        prise: '$23,00',
        desc: 'Beef patty, crispy bacon, fresh lettuce, tomatoes, onion, and home-made sauce',
      },
      {
        id: 7,
        img: 'menu-img/burger-double-beef.png',
        name: 'Double Beef',
        prise: '$12,00',
        desc: 'Two hot patties, home-made sauce, red pepper, cheddar cheese, sliced tomatoes, and mayo',
      },
      {
        id: 8,
        img: 'menu-img/burger-double-tuna.png',
        name: 'Double Tuna',
        prise: '$18,00',
        desc: 'Two tuna patties, lettuce, tomatoes, melted cheese, red onion, and tartar sauce',
      },
    ];
  
    function renderProducts(products) {
      const productsContainer = document.querySelector('#burgers');
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
  