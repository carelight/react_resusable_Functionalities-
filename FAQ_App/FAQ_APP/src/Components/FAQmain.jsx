import "../App.css"
import FAQ from './FAQ';

const FAQmain = () => {
 
  const arr =[
    {
        Question :"How many bones in Human body",
        answer :"206",
    },
    {
      Question :"How much healthy human sleeps",
      answer :"6 - 7 hours",
    },
    {
      Question :"Avergae Human age",
      answer :"100  years",
    }
  ]

  return (
    <>
    

    {
       arr.map((ar,index) => {
          return <FAQ
           ar={ar}
           index ={index}
           key={index}
          />

       })
    }
         
   


    </>
  )
}

export default FAQmain
