// import close from '../images/close.png';
import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import ToDoForm from './ToDoForm';
function ToDo(props) {
   let data = new Date().toLocaleDateString();
   let hours = new Date().getHours();
   let minutes = new Date().getMinutes()
   let time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);

   const [edit, setEdit] = useState({
      id: null,
      value: ''
   })
   const submitUpdate = value => {
      props.updateTask(edit.id, value);
      setEdit({
         id: null,
         value: ''
      })
   }
   if(edit.id) {
      return <ToDoForm edit={edit} addTask={submitUpdate} />;
   }
   return (
      <div className={props.todo.complete ? 
      "listItem complete" : "listItem"}
      key={props.todo.id}>
         <div className={props.todo.complete ? "item-text complete" : "item-text"}
         onClick={() => props.handleToggle(props.todo.id)}>
            {props.todo.text}
            <span>Дата: {data}</span>
            <span>Время: {time}</span>
         </div>
         <div className="toDoItem">
            <BiEdit className="editToDo" title="Редактировать"
            onClick={() => 
            setEdit({id: props.todo.id, value: props.todo.text})}/>

            <TiDelete className="deleteToDo" title="Удалить"
            onClick={() => props.removeTask(props.todo.id)}/>
         </div>
      </div>
   )
}

export default ToDo;