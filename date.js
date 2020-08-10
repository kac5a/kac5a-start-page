$(() => {
  var date = new Date()

  let currentSeason = ''
  let currentDayTime = ''

  Object.keys(seasons).find((seasonName) => {
    if (seasons[seasonName].includes(date.getMonth()))
      currentSeason = seasonName
  })

  let currentHour = date.getHours()

  if (currentHour > 4 && currentHour < 8) {
    currentDayTime = 'morning'
  } else if (currentHour > 8 && currentHour < 18) {
    currentDayTime = 'day'
  } else {
    currentDayTime = 'night'
  }

  weekDaysEng.find((weekday, index) => {
    index < date.getDay() - 1 && $(`#weekday-${weekday}`).css('width', '100%')

    index === date.getDay() - 1 &&
      $(`#weekday-${weekday}`).css(
        'width',
        `${Math.floor((date.getHours() / 24) * 100)}%`
      )
  })

  $('.background').css(
    'background-image',
    `url('backgrounds/${currentSeason}/${currentDayTime}.jpg')`
  )

  setHtmls()
  setInterval(() => {
    setHtmls()
  }, 1000)
})

const setHtmls = () => {
  let date = new Date()
  $('#hour').html(`${isSingleDigit(date.getHours())}`)
  $('#min').html(`${isSingleDigit(date.getMinutes())}`)
  $('#sec').html(`${isSingleDigit(date.getSeconds())}`)
  $('#day').html(weekDays[date.getDay() - 1])
  $('#date').html(
    `${isSingleDigit(date.getFullYear())} ${
      months[date.getMonth()]
    }  ${date.getDate()}`
  )
}

const seasons = {
  winter: [12, 1, 2],
  spring: [3, 4, 5],
  summer: [6, 7, 8],
  autumn: [9, 10, 11],
}

const weekDays = [
  'hétfő',
  'kedd',
  'szerda',
  'csütörtök',
  'péntek',
  'szombat',
  'vasárnap',
]

const weekDaysEng = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

const months = [
  'január',
  'február',
  'március',
  'április',
  'május',
  'június',
  'július',
  'augusztus',
  'szeptember',
  'október',
  'november',
  'december',
]

const isSingleDigit = (number) => {
  return number < 10 ? `0${number}` : `${number}`
}
