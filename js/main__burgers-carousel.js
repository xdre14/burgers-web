(function () {

    const slides = [
    '<div class="burgers__carousel-slide"><img width="150" src="img/double-beef.png" alt="Double Beef"><h4 class="burgers__carousel-title">Double Beef</h4><p class="burgers__carousel-text"> 2 patties, home-made sauce, tomato, and cheddar cheese </p><p class="burgers__carousel-price">$12.00</p></div>',
    '<div class="burgers__carousel-slide"><img width="150" src="img/freshburger.png" alt="Freshburger"><h4 class="burgers__carousel-title">Freshburger</h4><p class="burgers__carousel-text">Beef, red onion relish, lettuce, two kinds of pepper & classic sauce</p><p class="burgers__carousel-price">$13.00</p></div>',
    '<div class="burgers__carousel-slide"><img width="150" src="img/black-hamburger.png" alt="Black Hamburger"><h4 class="burgers__carousel-title">Black Hamburger</h4><p class="burgers__carousel-text">Fresh bun with squid ink, beef patty, red onion, and cheese</p><p class="burgers__carousel-price">$23.00</p></div>',
    '<div class="burgers__carousel-slide"><img width="150" src="img/egg-freshburger.png" alt="Egg Freshburger"><h4 class="burgers__carousel-title">Egg Freshburger</h4><p class="burgers__carousel-text">Beef, fried egg, red onion, lettuce, pepper, cheese, and classic sauce</p><p class="burgers__carousel-price">$17.00</p></div>',
    '<div class="burgers__carousel-slide"><img width="150" src="img/chicken-burger.png" alt="Chicken burger"><h4 class="burgers__carousel-title">Chicken burger</h4><p class="burgers__carousel-text">Chicken breast,basil pesto,mustard mayo,tomato,and lettuce</p><p class="burgers__carousel-price">$12.00</p></div>',
    '<div class="burgers__carousel-slide"><img width="150" src="img/buffalo-ranch.png" alt="Buffalo Ranch"><h4 class="burgers__carousel-title">Buffalo Ranch</h4><p class="burgers__carousel-text">Beef patty, crispy bacon, lettuce, tomato, and home-made sauce</p><p class="burgers__carousel-price">$20.00</p></div>'        
    ];
    
    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.our__burgers-carusel-container');
        slidesContainer.innerHTML = slides[currentSlide];  
        if (window.innerWidth > 767) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide];                        
            if (window.innerWidth > 1200) {
                const fourSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
                slidesContainer.innerHTML += slides[fourSlide];
           
             }
          }  
        }    
    }

    function nextSlides() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }
    //    setInterval(nextSlides, 3000);

       renderSlides(slides);

       const nextButton = document.querySelector('.our__burgers-carousel-next');
       nextButton.addEventListener('click', nextSlides);
   
       const prevButton = document.querySelector('.our__burgers-carousel-prev');
       prevButton.addEventListener('click', prevSlide);
   
       window.addEventListener('resize', () => {
           renderSlides(slides);
        });
})();