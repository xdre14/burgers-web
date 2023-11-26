(function () {
    const products = [
      {
        id: 1,
        img: 'menu-img/salad-freddy-kale.png',
        name: 'Freddy Kale',
        prise: '$15,00',
        desc: 'Chicken breast, baby kale, avocado, corn, feta, tomatoes, cilantro, and tortilla strips',
      },
      {
        id: 2,
        img: 'menu-img/salad-greek.png',
        name: 'Greek-Style Salad',
        prise: '$13,00',
        desc: 'Lettuce, olives, feta cheese, baby tomatoes, onion, red pepper, grape vinegar, and olive oil',
      },
      {
        id: 3,
        img: 'menu-img/salad-strawberry.png',
        name: 'Salad with Strawberry',
        prise: '$23,00',
        desc: 'Spinach, walnuts, feta cheese, chopped strawberries, and creamy signature sauce',
      },
      {
        id: 4,
        img: 'menu-img/salad-veggie.png',
        name: 'Veggie Salad',
        prise: '$18,00',
        desc: 'Lettuce blend, herbed goat cheese, alfalfa sprouts, baby tomatoes, and quinoa, tossed with dijon balsamic',
      },
      {
        id: 5,
        img: 'menu-img/salad-all-green.png',
        name: 'All-Green Salad',
        prise: '$13,00',
        desc: 'Lettuce, arugula, tomatoes, cucumber, two kinds of pepper, red onion, and olive oil',
      },
      {
        id: 6,
        img: 'menu-img/salad-turkey.png',
        name: 'Turkey Salad',
        prise: '$21,00',
        desc: 'Turkey breast, feta cheese, cucumbers, tomatoes, mixed olives, lettuce blend, and olive oil',
      },
    ];
  
    function renderProducts(products) {
      const productsContainer = document.querySelector('#salads');
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
  