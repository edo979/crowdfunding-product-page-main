const navTogglerBtn = document.getElementById('nav-toggler'),
  navEl = document.querySelector('.nav'),
  openModalBtn = document.getElementById('open-modal'),
  reward1Btn = document.getElementById('reward-btn-1'),
  reward2Btn = document.getElementById('reward-btn-2'),
  modalEl = document.getElementById('modal'),
  modalSuccessEl = document.getElementById('modal-success'),
  closeModalBtn = document.getElementById('modal-close'),
  radioBtns = document.querySelectorAll('input[name=pledge]'),
  modalCardEls = document.querySelectorAll('.modal-card'),
  finishBtn = document.getElementById('finish-btn'),
  totalBackedEl = document.getElementById('total-backed'),
  totalBackersEl = document.getElementById('total-backers'),
  progressBarEl = document.getElementById('progress-bar')

// Event listeners

navTogglerBtn.addEventListener('click', (e) => {
  navEl.classList.toggle('nav--expanded')
})

openModalBtn.addEventListener('click', (e) => {
  e.preventDefault()
  modalEl.style.display = 'grid'
})

reward1Btn.addEventListener('click', (e) => {
  removeActiveFromModalCard()
  modalCardEls[1].classList.add('modal-card--active')
  modalCardEls[1].querySelector('#bamboo').checked = true
  modalEl.style.display = 'grid'
})

reward2Btn.addEventListener('click', (e) => {
  removeActiveFromModalCard()
  modalCardEls[2].classList.add('modal-card--active')
  modalCardEls[2].querySelector('#black').checked = true
  modalEl.style.display = 'grid'
})

closeModalBtn.addEventListener('click', (e) => (modalEl.style.display = 'none'))

modalEl.addEventListener('click', (e) => {
  // Set active clase
  if (e.target.getAttribute('name') === 'pledge') {
    const modalCardEl = e.target.parentElement.parentElement.parentElement

    removeActiveFromModalCard()

    modalCardEl.classList.add('modal-card--active')
  }

  // Activate success-modal
  if (e.target.classList.contains('footer-form__button')) {
    const inputValue = e.target.parentElement.querySelector('input').value

    updateData(parseInt(inputValue))
    modalEl.style.display = 'none'
    modalSuccessEl.style.display = 'grid'
  }
})

finishBtn.addEventListener(
  'click',
  (e) => (modalSuccessEl.style.display = 'none')
)

// Calculate and update data
function updateData(inputData) {
  const totalBacked = parseInt(totalBackedEl.innerText.replace(/\D/g, '')),
    newTotalBacked = totalBacked + inputData,
    totalBackers = parseInt(totalBackersEl.innerText.replace(/\D/g, '')),
    newTotalBackers = totalBackers + 1
  let newProgressBarValue = Math.round((newTotalBacked / 100000) * 100)

  if (newProgressBarValue > 100) {
    newProgressBarValue = 100
  }

  totalBackedEl.innerText = numberWithCommas(newTotalBacked)
  totalBackersEl.innerText = numberWithCommas(newTotalBackers)
  progressBarEl.style.width = `${newProgressBarValue}%`
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function removeActiveFromModalCard() {
  modalCardEls.forEach((card) => card.classList.remove('modal-card--active'))
}
