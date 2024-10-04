import React from 'react';

const Display = ({displayValue}) => {
  return (
    <div className='flex  justify-center  w-200px'> 
    <input className='w-72 border-2 border-black rounded-md text-xl font-bold h-10 mb-14  text-center '  type="text" 
    value={displayValue} readOnly/>
    </div>
  );
}

export default Display;
