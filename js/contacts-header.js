(function() {
  const items = document.querySelectorAll(".header__contacts-items");

  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.3}s`;
    item.classList.add("animate__animated", "animate__fadeInUp");
  });
})();