import { useState } from 'react'

import './App.css'
import Calculator from './Components/Calculator'
import Display from './Components/Display';

function App() {

  //  const buttonsNames=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
   let [calVal,setCalval]=useState("");
   const onButtonClick=(buttonText)=>{
    if(buttonText==="C"){
      setCalval("");
    }
    else if(buttonText==="="){
      const result=eval(calVal);
      setCalval(result);
    }
    else{
      const newDisplayValue= calVal + buttonText;
      setCalval(newDisplayValue);
    }
   }
  return (
    <div className='border-red-400 bg-lime-200 h-screen w-screen mt-8  flex  justify-center items-center '>
       <div className='container w-96 h-fit box-border flex flex-col border-2  p-10 bg-slate-400 justify-self-center rounded-2xl items-center '>
          <Display displayValue={calVal}></Display>
          <Calculator className="ml-96"  onButtonClick={onButtonClick}></Calculator>
       </div>
    </div>
  )
}

export default App
