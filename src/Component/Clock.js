import React, { Component } from 'react'

 class Clock extends Component {

    state = {
       day : new Date().getDay(),
       month: new Date().getMonth(),
       date : new Date().getDate(),
       year : new Date().getFullYear(),
       hour : new Date().getHours(),
       minut : new Date().getMinutes(),
        second : new Date().getSeconds()
    }

     counting = ()=>{
        this.setState({
            day : new Date().getDay(),
            month: new Date().getMonth(),
            date : new Date().getDate(),
            year : new Date().getFullYear(),
            hour : new Date().getHours(),
            minut : new Date().getMinutes(),
             second : new Date().getSeconds()
        })   
    }


  componentDidMount(){
    this.reseteTime = setInterval(()=>{
        this.counting();
    },1000)
  }
   
  componentWillUnmount(){
    clearInterval(this.reseteTime)
  }

  render() {

    const days = ["sunday", "monday", "tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["january", "february", "march", "april", ' may', "jun", "july", "august", "september", "octoober", "november", "december"]
  

    return (
      <div>
     
        <h1 >Digital Clock</h1>
      <div className='body' >
        <div className='displayDay' >{days[this.state.day]}</div>
        <div className='Time' >
          <div className='child' >{this.state.hour}</div>
          <div className='child' >:</div>
          <div className='child' >{this.state.minut}</div>
          <span className='child1' >{this.state.second}</span>
        </div>
        <div className='displayDate' >
         <h2>{this.state.date}</h2><h2>{months[this.state.month]}</h2><h2>{this.state.year}</h2>
        </div>

      </div>
      </div>
    )
  }
}

export default Clock