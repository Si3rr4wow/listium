import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

const startUp = () => {
  dayjs.extend(calendar)

  dayjs().calendar(dayjs('2008-01-01'))
  dayjs().calendar(null, {
    sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
    nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
    nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
    lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
    lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
    sameElse: 'DD/MM/YYYY' // Everything else ( 17/10/2011 )
  })
}

export default startUp