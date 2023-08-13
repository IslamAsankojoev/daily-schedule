import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAllDays } from '@/utils/getAllDays'
import { ResponseObjectToArray } from '@/utils/ResponseObjectToArray'
import Day from '@/components/Day'
import Calendar from '@/components/Calendar'

const contributions = [
  {
    date: 'level0',
    contributions: 0,
    tooltip: '0',
  },
  {
    date: 'level1',
    contributions: 1,
    tooltip: '1-9',
  },
  {
    date: 'level2',
    contributions: 11,
    tooltip: '11-19',
  },
  {
    date: 'level3',
    contributions: 21,
    tooltip: '21-29',
  },
  {
    date: 'level4',
    contributions: 31,
    tooltip: '30+',
  },
]

const Home = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const [data, setData] = useState<IDay[][]>([])

  const handleClickOutside = (event: MouseEvent) => {
    // @ts-ignore
    if (!event?.target?.classList?.contains('select')) {
      setSelectedDay(null)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://dpg.gg/test/calendar.json')
      setData(getAllDays(ResponseObjectToArray(data)))
    })()
  }, [])

  return (
    <div className="App">
     <div className='main-wrapper'>
     <h1>Daily Scheduler</h1>
      <Calendar>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          gap: 1,
        }}
      >
        {data?.map((week, weekIndex) => (
          <div
            key={weekIndex}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            
            {week?.map((day, dayIndex) => (
              <Day
                key={dayIndex}
                date={day?.date}
                contributions={day?.contributions}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          color: 'grey',
          fontSize: 12,
        }}
      >
        <p>Меньшее</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {contributions?.map((item, index) => (
            <Day
              key={index}
              contributions={item?.contributions}
              date={item?.date}
              tooltip={item?.tooltip}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          ))}
        </div>
        <p>Большее</p>
      </div>
      </Calendar>


      </div>      
    </div>
  )
}

export default Home
