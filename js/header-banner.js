const synonyms = ['TASTY', 'YUMMY', 'SPICY'];
const headerBannerSynonyms = document.querySelector('.header__banner-synonyms');
let currentIndex = 0;

setInterval(() => {
  headerBannerSynonyms.textContent = synonyms[currentIndex];
  currentIndex = (currentIndex + 1) % synonyms.length;
}, 2000);
