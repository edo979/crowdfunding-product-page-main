const navTogglerBtn = document.getElementById('nav-toggler'),
  navEl = document.querySelector('.nav'),
  openModalBtn = document.getElementById('open-modal'),
  modalEl = document.getElementById('modal'),
  modalSuccessEl = document.getElementById('modal-success'),
  closeModalBtn = document.getElementById('modal-close')

// Event listeners

navTogglerBtn.addEventListener('click', (e) => {
  navEl.classList.toggle('nav--expanded')
})

openModalBtn.addEventListener('click', (e) => {
  e.preventDefault()
  modalEl.style.display = 'grid'
})

closeModalBtn.addEventListener('click', (e) => (modalEl.style.display = 'none'))
