import React, { useEffect, useState } from 'react'

const FAQ = ({ar, index}) => {
    const [show , setShow] =useState(false);
    console.log(ar);

   useEffect(()=>{     //  first question viisble only
      
     if(index == 0)  setShow(true);

   },[])




  return (
    <div className='Question_box'>
    <div className='quest' onClick={() => setShow((Show) => !Show)}  >
    <button className={show ?'arrow':''}> {'>'} </button>
     {ar.Question}
    </div>            
    {
      show &&  <div className='ans'>{ar.answer}</div>
    }       
    </div>
  )
}

export default FAQ
