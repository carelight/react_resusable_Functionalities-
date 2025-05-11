import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false);
  const [pause, setpause] = useState(false);
  const [Hour, setHour] = useState(-1);
  const [min, setmin] = useState(-1);
  const [Sec,setSec] =useState(-1);
  const [tid, setId] =useState()

  const visible =()=>{ 
    if(Hour<0||min<0||Sec<=0) {
     alert("Enter Time to start ")
      return;
    } 
    else{
      setShow(true);
    }  
 
  }
  const runTime = (Hour,min,Sec)=>{
    if(Sec>0){
      setSec((Sec)=>Sec-1);
    }
    else if(Sec==0 && min>0){
       setmin((min)=>min-1)
       setSec(59)
    }
    else{
       setHour((Hour)=>Hour-1)
      setmin(59);
      setSec(59);
    }

    if(Sec === 0 && min === 0 && Hour === 0 ){
      setHour(0); setmin(0); setSec(0);
      clearInterval(tid);
      alert("Time's Up")
    }
  }

  useEffect(()=>{
      let tid;

    if(show){
    tid = setInterval(() => {
         runTime(Hour,min,Sec);
      }, 1000);
      setId(tid);
    }
   return()=>{
       clearInterval(tid);
   }
  
  },[show,Hour,min,Sec])
 

  return (
    <>
           <div className="App">
              <h1>Countdown timer</h1>

              {
                !show &&  <div className='input-container'>
                <div className='input-box'>
                    <input id="hours" onChange={(e)=>{setHour(parseInt(e.target.value))}}  ></input>
                    <input id="minutes" onChange={(e)=>{setmin(parseInt(e.target.value))}} />
                    <input id ="second"onChange={(e)=>{setSec(parseInt(e.target.value))}} ></input>
                </div>
                <button className="Start" onClick={visible}>start</button>
              </div>
              }
             

              {
                show &&    <div className='out-container'>
                <div className='timer-box'>
                  <div >{ Hour< 10 ?`0${Hour}` :Hour} : </div>
                  <div>{min<10 ? `0${min}`:min }  :</div>
                  <div>{Sec<10 ? `0${Sec}`:Sec} </div>
                </div>
                <div id="showButtons">
                {
                  !pause &&  <button className='Start'onClick={()=>{
                    setpause(true)
                    clearInterval(tid)
                 }}>Pause</button>
                }
                {
                  pause &&  <button className='Start'onClick={()=>{
                    setpause(false)
                    runTime(Hour,min,Sec)
                    
                 }}>Resume</button>
                }
              
                    <button className='Start' onClick={()=>{
                       setShow(false);
                       setpause(false);
                       setHour(0); setmin(0); setSec(0);
                    }} >reset</button>
                 </div>
              </div>

              }
            
               
              
           </div>
    </>
  )
}

export default App
