import { getContributionLevel } from '@/utils/getContributionLevel'
import { FC, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './day.module.scss'
import locale from 'date-fns/locale/ru'
import { format } from 'date-fns'

const Colors = {
  level4: '#254E77',
  level3: '#527BA0',
  level2: '#7FA8C9',
  level1: '#ACD5F2',
  level0: '#EDEDED',
}

interface DayProps extends IDay {
  selectedDay?: IDay | null
  setSelectedDay?: any
  ref?: any
  tooltip?: string
}

const Day: FC<DayProps> = ({ date, contributions = 0, selectedDay, setSelectedDay, tooltip, ref }) => {
  const [active, setActive] = useState(false)
  const backgroundColor = Colors[`level${getContributionLevel(contributions)}`]

  useEffect(() => {
    if (selectedDay?.date === date) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [selectedDay])

  return (
    <div
      onClick={() => {
        setSelectedDay({ date, contributions })
      }}
      className={classNames(styles.day, 'select', {
        [styles.active]: active,
      })}
      style={{
        backgroundColor,
      }}
    >
      {/* {contributions} */}
      {active && (
        <span className={styles.tooltip}>
              <p className={styles.contributions}>{tooltip || contributions} contributions</p>
              {!tooltip && <p className={styles.date}>
                {format(new Date(date), 'EEEE, MMMM dd, yyyy', { locale })}
              </p>}
        </span>
      )}
    </div>
  )
}

export default Day
