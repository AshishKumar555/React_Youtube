import React from 'react';
import { useState } from 'react';
import { MdLibraryAdd } from "react-icons/md";

const Addtodo = ({onNewItem}) => {

const [todoName,setTodoName]=useState('');
const [dueDate,setDueDate]=useState('');

const handleNameChange=(event)=>{
      setTodoName(event.target.value);
     
}
const handleDateChange=(event)=>{
      setDueDate(event.target.value);
      
}
const handleAddButtonClicked=()=>{
      onNewItem(todoName,dueDate);
      setDueDate("");
      setTodoName("");
}

  return (
    <div className='todo-list'>
      <div className="row">
        <div className="col-6" >
          <input 
          type="text" 
          placeholder='Enter todo Here' 
          value={todoName} 
          onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input 
          type="date"  
          value={dueDate} 
          onChange={handleDateChange}/>
          </div>
        <div className="col-2"><button type="button" className="btn btn-success" 
        onClick={handleAddButtonClicked}>
          <MdLibraryAdd />
          </button></div>
       </div>
    </div>
  );
}

export default Addtodo;
