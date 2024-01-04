import { useState, useEffect } from 'react';


const CurrentTime =()=> {

  const [currentMin, setCurrentMin] = useState(new Date().getMinutes())
  const [currentSec, setCurrentSec] = useState(new Date().getSeconds())
  const [currentHr, setCurrentHr] = useState(new Date().getHours())

  const [myTodayDate, setMyTodayDate] = useState(new Date().getDate())
  const [myTodayMonth, setMyTodayMonth] = useState(new Date().getMonth())

  let month;
  if (myTodayMonth === 0) {
    month = 'January'
  }
  else if (myTodayMonth === 1) {
    month = 'February'
  }
  else if (myTodayMonth === 2) {
    month = 'March'
  }
  else if (myTodayMonth === 3) {
    month = 'April'
  }
  else if (myTodayMonth === 4) {
    month = 'May'
  }
  else if (myTodayMonth === 5) {
    month = 'June'
  }
  else if (myTodayMonth === 6) {
    month = 'July'
  }
  else if (myTodayMonth === 7) {
    month = 'August'
  }
  else if (myTodayMonth === 8) {
    month = 'September'
  }
  else if (myTodayMonth === 9) {
    month = 'October'
  }
  else if (myTodayMonth === 10) {
    month = 'November'
  }
  else {
    month = 'December'
  }

  let todayYear = new Date().getYear()

  let interval;
  const currTimeFun = () => {
    let oldTime = new Date(`${month} ${myTodayDate}, 2024 23:59:59`).getTime()

    interval = setInterval(() => {
      let newTime = new Date().getTime();
      let distance = oldTime - newTime

      let hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      let seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current)
        setMyTodayDate((new Date().getDate()) + 1)
        setMyTodayMonth(new Date().getMonth())
      } else {
        setCurrentMin(minutes)
        setCurrentSec(seconds)
        setCurrentHr(hours)

      }
    })

  }

  useEffect(() => {
    currTimeFun();
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <main>
      <p className="timer">  {currentHr < 10 ? `0${currentHr}` : currentHr} < span > : </span> {currentMin < 10 ? `0${currentMin}` : currentMin} < span > : </span>{currentSec < 10 ? `0${currentSec}` : currentSec} </p>

    </main >
  )
}

export default CurrentTime;