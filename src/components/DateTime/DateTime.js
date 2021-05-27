import React, { useState, useEffect} from 'react'
import '../DateTime/DateTime.css'

function DateTime () {
   const [date, setDate] = useState(new Date());
   
   useEffect(() => {
       const timer = setInterval(() => setDate(new Date()), 1000)

       return function cleanUp() {
           clearInterval(timer);
       }
   })

   const weekDays = {
       0: 'SU',
       1: 'MO',
       2: 'TU',
       3: 'WE',
       4: 'TH',
       5: 'FR',
       6: 'SA',
   }

   return (
    <div className="clock-container">
      <div className="clock-col">
        <p className="clock-day clock-timer">
            {weekDays[date.getDay()]}
        </p>
        <p className="clock-label">
          Day
        </p>
      </div>
      <div className="clock-col">
        <p className="clock-hours clock-timer">
            {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
        </p>
        <p className="clock-label">
          Hours
        </p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer">
            {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
        </p>
        <p className="clock-label">
          Minutes
        </p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer">
            {date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}
        </p>
        <p className="clock-label">
          Seconds
        </p>
      </div>
  </div>
   )
}

export default DateTime;
