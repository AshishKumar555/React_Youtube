import React from 'react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import {counterActions} from '../store/counter';
import { privacyActions } from '../store/privacy';


const Controls = () => {
  const inputElement=useRef();
 

  const dispatch=useDispatch();

  const handleIncrement =()=>{
    //dispatch({type : "INCREMENT"})
    dispatch(counterActions.increment());
  }

  const handleDecrement =()=>{
   // dispatch({type : "DECREMENT"})
   dispatch(counterActions.decrement());
  }

  const handlePrivacy =()=>{
    // dispatch({type : "PRIVACY"})
    dispatch(privacyActions.toggle())
  }

  const handleAdd =()=>{
    // dispatch({type : "ADD",
    // payload:{
    //   num:inputElement.current.value,
    // }})
    dispatch(counterActions.add({
      num:inputElement.current.value,
    }))
    inputElement.current.value=""
  }

  const handleSubtract =()=>{
    // dispatch({type : "SUBTRACT",
    // payload:{
    //   num:inputElement.current.value,
    // }})
    dispatch(counterActions.subtract({
      num:inputElement.current.value,
    }))
    inputElement.current.value=""
  }

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>Increment </button>
        <button type="button" className="btn btn-success btn-lg px-4" onClick={handleDecrement}>Decrement</button>
        <button type="button" className="btn btn-warning" onClick={handlePrivacy}>Privacy Toggle</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" ref={inputElement} placeholder='Enter the numbers'/>
        <button type="button" className="btn btn-info btn-lg px-4" onClick={handleAdd}>Add</button>
        <button type="button" className="btn btn-danger btn-lg px-4"  onClick={handleSubtract}>Subtact</button>
      </div>
    </div>
  );
}

export default Controls;
