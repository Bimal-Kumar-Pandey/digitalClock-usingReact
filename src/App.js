import React, { useEffect,useState} from 'react'
import "./App.css";

const App = () => {
  const [date, setDate] = useState(new Date());
  const days = ["sunday", "monday", "tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["january", "february", "march", "april", ' may', "jun", "july", "august", "september", "octoober", "november", "december"]

  useEffect(() => {
    const timerID = setInterval(() => updateDate(), 1000);
    return ()=>{
      clearInterval(timerID);
    };

  })
  const updateDate = () => {
    setDate(new Date());
  };

  function Time(t) {
    if (t > 12) {
      return t - 12
    }
    return t;
  }
  function addZero(t) {
    let length = t.toString().length;
    if (length <= 1) {
      return "0" + t;
    }
    return t;
  }

  return (
    <div>
  
      <h1 >Digital Clock</h1>
      <div className='body'>
        <div className='displayDay' >{days[date.getUTCDay()]}</div>
        <div className='Time' >
          <div className='child' >{addZero(Time(date.getHours()))}</div>
          <div className='child' >:</div>
          <div className='child' >{addZero(date.getMinutes())}</div>
          <span className='child1' >{addZero(date.getSeconds())}</span>
        </div>
        <div className='displayDate' >
          {addZero(months[date.getUTCMonth()])}-{addZero(date.getDate())}-{date.getFullYear()}
        </div>

      </div>
    </div>
  )
}

export default App
