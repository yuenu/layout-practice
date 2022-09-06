// Variable
const ratesEl = document.querySelectorAll('.container__rate')
const submitBtnEl = document.querySelector('.container__submit')
const toastEl = document.querySelector('#toast')
let currentRate = null

// Function
ratesEl.forEach((rateEl) => {
  rateEl.addEventListener('click', onClickRate)
})

function onClickRate(e) {
  ratesEl.forEach((rate) => {
    rate.classList.remove('active')
  })
  e.target.classList.add('active')
  currentRate = e.target.dataset.set
}

submitBtnEl.addEventListener('click', () => {
  if(!currentRate) {
    toastEl.classList.add('active')
    HideToast()
  }

  if(currentRate) {
    document.querySelector('.container-1').style.transform = 'rotateY(-180deg)'
    document.querySelector('.container-2').style.transform = 'rotateY(0deg)'
    document.querySelector('.after-select__showup span').textContent = `You selected ${currentRate} out of 5`
  }
})

function HideToast() {
  setTimeout(() => {
    toastEl.classList.remove('active')
  }, 1000)
}
