const items = document.querySelectorAll('.accordion__item')

items.forEach((accordionItem) => {
  const questionEl = accordionItem.querySelector('.accordion__question')
  const answerEl = accordionItem.querySelector('.accordion__answer')
  const arrowIcon = accordionItem.querySelector('.accordion__arrow')

  questionEl.addEventListener('click', () => {
    questionEl.classList.toggle('open')
    arrowIcon.classList.toggle('open')
    answerEl.classList.toggle('open')
    // rmove all open class decorator
    items.forEach(item => {
      const quenEl = item.querySelector('.accordion__question')
      const ansEl = item.querySelector('.accordion__answer')
      const arrIcon = item.querySelector('.accordion__arrow')
      if (quenEl !== questionEl) {
        quenEl.classList.remove('open')
        arrIcon.classList.remove('open')
        ansEl.classList.remove('open')
      }
    })

  })
})

