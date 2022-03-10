const navTogglerBtn = document.getElementById('nav-toggler'),
  navEl = document.querySelector('.nav')

navTogglerBtn.addEventListener('click', (e) => {
  navEl.classList.toggle('nav--expanded')
})
