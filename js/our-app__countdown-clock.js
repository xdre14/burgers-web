(function () {
  const countDownDate = new Date("March 13, 2023 00:00:00").getTime();
  const contactUsCaption = document.querySelector(".our-app__countdown-container");

  function getTime() {
    let currentTime = new Date().getTime();
    let difference = countDownDate - currentTime;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector(".countdown-days").innerHTML = days;
    document.querySelector(".countdown-hours").innerHTML = hours;
    document.querySelector(".countdown-minutes").innerHTML = minutes;
    document.querySelector(".countdown-seconds").innerHTML = seconds;

    if (difference < 0) {
      clearInterval(x);
      document.querySelector(".countdown-days").innerHTML = "00";
      document.querySelector(".countdown-hours").innerHTML = "00";
      document.querySelector(".countdown-minutes").innerHTML = "00";
      document.querySelector(".countdown-seconds").innerHTML = "00";
    }
  }

  setInterval(getTime, 1000);
})();