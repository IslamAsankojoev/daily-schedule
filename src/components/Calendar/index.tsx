import { FC, ReactNode } from 'react'
import styles from './calendar.module.scss'


interface CalendarProps {
  children?: ReactNode
}

const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const Calendar:FC<CalendarProps> = ({children}) => {
  return (
    <div className={styles.calendar}>
      <div className={styles.weeks}>
        {weeks.map((week, index) => (
          <div key={index} className={styles.week}>{week}</div>
        ))}
      </div>
     <div className={styles.days}>
     {children}
     </div>
    </div>
  )
}

export default Calendar