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

const whoContent = document.querySelector(".who--content");

const whoContentBtn = document.querySelector(".who--content button");

whoContentBtn.addEventListener('click', (e) => {
  whoContent.style.animation = "1s whoContent forwards ease";
  setTimeout(() => {
    whoContent.textContent += "C'est en hivers 1981 qu'a été fondée cette association sous l'impulsion d'étudiants de 20 ans ayant pour projet de créer un centre d'alphabétisationau Mokattam (Egypte) dans les bidonvilles, malgré une tentative de dissuasion instaurée par sur Emmanuelle craignant pour la vie de ces derniers, C'était sans compter sur leur pugnacité et l'étonnant sens de l'hospitalité des habitants locaux. Malgré de nombreuses difficultés rencontrées pour se nourrir et cohabiter non pas avec les locaux mais les rats, tout se passait de bon train jusqu'au moment où, l'entreprise d'alphabétisation mis en place s'est vu risqué d'être mis en péril par des entrepreneurs de la banque centrale, ayant projetés de raser le centre au profit d'e l'instauration d'une bretelle d'autoroute. Chose qui aurait pu se faire, s'il n'y avait pas eu l'intervention salutaire de Sur Emmanuelle, revenue sur ses craintes vis-à-vis des habitants, elle a organisé une marche à Bruxelles ayant mobilisée un millier d'habitant et ayant permis de récolter plus de 7500 et quelques avantages en nature dont une jeep, convertie en ambulance. Le succès de cette opération ayant permis au centre de s'agrandir, le projet de bretelle d'autoroute n'y a pas vu le jours.";
    whoContent.style.animation = "1s whoAddContent forwards ease";
    console.log(window.innerHeight);
    if (window.innerHeight < 700) {
      document.querySelector('.who').style.height = "200vh";
    }

  }, 1500);
});