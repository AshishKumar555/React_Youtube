import React from 'react';


const Calculator = ({onButtonClick}) => {

    const buttonsNames=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];

  return (
    <div className='flex flex-wrap w-200px justify-center' >
      {buttonsNames.map( buttonvalue =><button key={buttonvalue} className=' border-2 border-slate-700 text-white text-2xl bg-blue-600 m-2 w-40px p-50px  px-7 rounded-md'
       onClick={()=>onButtonClick(buttonvalue)}>{buttonvalue}</button>
      )}
    </div>
  );
}

export default Calculator;
