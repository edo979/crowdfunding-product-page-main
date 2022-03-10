const navTogglerBtn = document.getElementById('nav-toggler'),
  navEl = document.querySelector('.nav'),
  openModalBtn = document.getElementById('open-modal'),
  modalEl = document.getElementById('modal'),
  modalSuccessEl = document.getElementById('modal-success'),
  closeModalBtn = document.getElementById('modal-close'),
  radioBtns = document.querySelectorAll('input[name=pledge]'),
  modalCardEls = document.querySelectorAll('.modal-card'),
  finishBtn = document.getElementById('finish-btn')

// Event listeners

navTogglerBtn.addEventListener('click', (e) => {
  navEl.classList.toggle('nav--expanded')
})

openModalBtn.addEventListener('click', (e) => {
  e.preventDefault()
  modalEl.style.display = 'grid'
})

closeModalBtn.addEventListener('click', (e) => (modalEl.style.display = 'none'))

modalEl.addEventListener('click', (e) => {
  // Set active clase
  if (e.target.getAttribute('name') === 'pledge') {
    const modalCardEl = e.target.parentElement.parentElement.parentElement

    modalCardEls.forEach((card) => card.classList.remove('modal-card--active'))

    modalCardEl.classList.add('modal-card--active')
  }

  // Activate success-modal
  if (e.target.classList.contains('footer-form__button')) {
    modalEl.style.display = 'none'
    modalSuccessEl.style.display = 'grid'
  }
})

finishBtn.addEventListener(
  'click',
  (e) => (modalSuccessEl.style.display = 'none')
)
