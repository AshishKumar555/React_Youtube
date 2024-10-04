import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './Components/AppName'
import Addtodo from './Components/Addtodo'
import AddDate from './Components/TodoItems'
import TodoItems from './Components/TodoItems'
import WelcomeMessage from './Components/WelcomeMessage'
import "./App.css"

function App() {

  // const mydate=new Date();
  const [todoItems,setTodoItems]=useState([]);

  const handleNewItem=(itemName,itemDueDate)=>{
        // console.log(`Added New Item : ${itemName} Date:${itemDueDate}`)
        const newTodoItem=[...todoItems,{name:itemName,dueDate:itemDueDate}]
        setTodoItems(newTodoItem);
  }
  
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };


  return (
    <>
      <center className="todo-container">
 
       <AppName/>
       <Addtodo onNewItem={handleNewItem} />
       { todoItems.length ===0 && <WelcomeMessage></WelcomeMessage>}
       <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
       
       

      </center>
        
    </>
  )
}

export default App;
