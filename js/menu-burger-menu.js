(function () {
    const header__burger = document.querySelector('.header__burger');
    const header__wrapper = document.querySelector('.header__wrapper');
    const body = document.querySelector('body');
    header__burger.addEventListener('click', () => {
      body.classList.toggle('lock');
      header__burger.classList.toggle('active');
      header__wrapper.classList.toggle('active');
    });
  })();
  