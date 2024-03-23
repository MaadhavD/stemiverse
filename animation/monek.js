const stars = document.querySelectorAll('.star');

stars.forEach((star) => {
  let randomTranslateX = Math.random();
  let randomTranslateY = Math.random();
  star.style.setProperty('--translate-x', randomTranslateX);
  star.style.setProperty('--translate-y', randomTranslateY);
});


