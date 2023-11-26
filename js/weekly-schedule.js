(function () {

  const contacts = ['+ 1 (234) 567 89 00', '0 800 501 482', '+ 38 (044) 428 62 81'];
  const scheduleInfoPhoneSection = document.querySelector('.schedule-info-phone-number');
  let currentElement = 0;

  setInterval(() => {
    scheduleInfoPhoneSection.textContent = contacts[currentElement];
    scheduleInfoPhoneSection.classList.toggle("color-red");
    currentElement = (++currentElement) % contacts.length;
  }, 1500);
  
})();
