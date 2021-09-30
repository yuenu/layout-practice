const cards = document.querySelectorAll('.card')
const planControl = document.querySelector('#plan-control')
const monthlyPrice = document.querySelectorAll('.card__price.monthly')
const annuallyPrice = document.querySelectorAll('.card__price.annually')

cards.forEach((card) => {
  card.addEventListener('mouseenter', (e) => {
    if (e.fromElement.dataset.card) {
      cards.forEach((card) => card.classList.remove('selected'))
      card.classList.add('selected')
    } else {
      console.log('else', e)
      cards.forEach((card) => {
        if(card !== e.target) card.classList.remove('selected')
      })
      card.classList.add('selected')
    }
  })

})

planControl.addEventListener('change', (e) => {
  if(e.target.checked) {
    monthlyPrice.forEach((mPrice) => mPrice.style.display = 'flex')
    annuallyPrice.forEach((aPrice) => aPrice.style.display = 'none')
  } else {
    monthlyPrice.forEach((mPrice) => mPrice.style.display = 'none')
    annuallyPrice.forEach((aPrice) => aPrice.style.display = 'flex')
  }
})