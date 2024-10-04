import React from 'react';
import TodoItem from './TodoItem';

// const TodoItems = ({todoItems,itemName,itemDueDate}) => {
//    let time=new Date()
// // let time="ashish"
//   return (
//     <div >
//     {todoItems.map((item) => (
//       <TodoItem
//         todoDate={item.dueDate}
//         todoName={item.name}
//         onDeleteClick={onDeleteClick}
//       ></TodoItem>
//     ))}
//   </div>
//   );
// }
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div >
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
