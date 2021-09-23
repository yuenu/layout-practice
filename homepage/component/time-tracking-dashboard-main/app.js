const controls = document.querySelectorAll('.user__control')
const dailyBtn = controls[0]
const weeklyBtn = controls[1]
const monthlyBtn = controls[2]
const contents = document.querySelectorAll('.card__content')
const footers = document.querySelectorAll('.card__footer')

fetch('data.json')
  .then((res) => {
  return res.json()
  })
  .then((data) => {
    for(let i = 0; i < contents.length; i++) {
      contents[i].textContent = data[i].timeframes.weekly.current + 'hrs'
      footers[i].textContent = 'Last Day - ' + data[i].timeframes.weekly.previous + 'hrs'
    }

    controls.forEach((controlEl) => {
      controlEl.addEventListener('click', (e) => {
        controls.forEach((el) => el.classList.remove('active'))
        e.target.classList.add('active')

        const dataType = e.target.dataset.type
        let type = ''
        switch(dataType) {
          case 'daily':
            type = 'Day'
            break
          case 'weekly':
            type = 'Week'
            break
          case 'monthly':
            type = 'Month'
        }

        for(let i = 0; i < contents.length; i++) {
          contents[i].textContent = data[i].timeframes[dataType].current + 'hrs'
          footers[i].textContent = `Last ${type} - ` + data[i].timeframes[dataType].previous + 'hrs'
        }
      })
    })
  })

