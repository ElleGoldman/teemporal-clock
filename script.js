import { Temporal, Intl } from '@js-temporal/polyfill'

const today = Temporal.Now.plainDateTimeISO()

// Temporal Internalization
const currentDateEl = document.getElementById('currentDate')
const links = document.getElementsByTagName('a')
const setIntlDate = (countryCode = 'ru-RU') => {
  const date = new Intl.DateTimeFormat(countryCode, { dateStyle: 'full' }).format(today);
  currentDateEl.innerText = date
}
const handleLinkClick = (event) => {
  event.preventDefault();
  setIntlDate(event.target.innerText)
}
for (let i = 0; i < links.length; i ++) {
  links[i].addEventListener('click', handleLinkClick)
}
setIntlDate()

// Temporal Clock
const clockEl = document.getElementById('clock')
const formatTime = (n) => n < 10 ? `0${n}` : n
const startTime = () => {
  const now = Temporal.Now.plainDateTimeISO()
  const hours = formatTime(now.hour)
  const minutes = formatTime(now.minute)
  const seconds = formatTime(now.second)
  clockEl.innerText = `${hours}:${minutes}:${seconds}`
}
setInterval(startTime, 1000);

// Days till new year
const newYearInEl = document.getElementById('newYear')
const newYear = Temporal.PlainDate.from({ year: 2023, month: 1, day: 1 })
newYearInEl.innerText = `${today.until(newYear).days} days until new year!`