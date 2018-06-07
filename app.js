function smoothScrollTo(endY, duration = 400) {
  const startY = window.pageYOffset,
  distanceY = endY - startY,
  startTime = new Date().getTime();

  const easeInOut = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) {
      return distance / 2 * time * time * time * time + from;
    } else {
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }
  }

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime,
    newY = easeInOut(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    scrollTo(0, newY);
  }, 1000/60);
}
const homeBtn = document.querySelector('.home--btn');
homeBtn.addEventListener('click', (e) => {
  smoothScrollTo(window.innerHeight, 1000);
});