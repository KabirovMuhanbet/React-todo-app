import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

function App() {
   let [todos, setTodos] = useState([]);

   const addTask = todo => {
      if(!todo.text || /^\s*$/.test(todo.text)) {
         return;
      }
      setTodos([todo, ...todos]);
   }
   const updateTask = (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
         return;
      }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
   }
   const removeTask = (id) => {
      setTodos([...todos.filter(todo => todo.id !== id)])
   }
   const handleToggle = (id) => {
      setTodos([
         ...todos.map(todo =>
            todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
         )
      ])
   }
   return (
      <div className="app">
         <div className="container">
            <header className="header">
               <h1 className="title">Список задач: {todos.length}</h1>
            </header>
            <ToDoForm addTask={addTask} />
            <div className="toDoListItem">
               {todos.map(todo => {
                  return (
                     <ToDo
                        key={todo.id}
                        todo={todo}
                        handleToggle={handleToggle}
                        removeTask={removeTask}
                        updateTask={updateTask} />
                  )
               })
               }
            </div>
         </div>
      </div>
   )
}

export default App;
