const total = document.querySelector('#total')
const tipBtns = document.querySelectorAll('.tip-btn')


// Error message display element
const numberOfPeopleEl = document.querySelector('.number-of-people')


setModel('bill')
setModel('people')
setModel('tip')
setModel('total')

window['tip'] = '100'

function setModel(name) {
  const model = document.querySelector('[v-model="' + name + '"]')

  Object.defineProperty(window, name, {
    get: function () {
      return model.value
    },
    set: function (value) {
      model.value = value
    }
  })

  model.addEventListener('input', function () {
    window[name] = this.value
    let billNum = Number(window['bill'])
    let peopleNum = Number(window['people'])
    let tip = Number(window['tip'])

    if (billNum > 0 && peopleNum > 0) {
      total.textContent = '$' + (billNum / peopleNum * tip / 100).toFixed(2)
      numberOfPeopleEl.classList.remove('error')
    } else if (billNum > 0 && peopleNum === 0) {
      numberOfPeopleEl.classList.add('error')
    } else {
      total.textContent = '$0.00'
    }
  })

}


tipBtns.forEach(function (tip) {
  tip.addEventListener('click', function () {
    window['tip'] = tip.value

    //  tipBtn UI control
    tip.classList.add('active')
    tipBtns.forEach(function(tipBtn) {
      if(tipBtn !== tip) tipBtn.classList.remove('active')
    })
  })
})



// displayModel('total')
// function displayModel(name) {
//   const model = document.querySelector('[v-model="' + name + '"]')
//   console.log(model.)
//   Object.defineProperty(window, name, {
//     get: function () {
//       return model.value
//     },
//     set: function (value) {
//       model.value = value
//     }
//   })
// }


