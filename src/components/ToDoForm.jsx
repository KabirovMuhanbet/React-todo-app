import { useState } from 'react';

function ToDoForm(props) {
   const [input, setInput] = useState('');

   const handleChange = (e) => {
      setInput(e.target.value);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      props.addTask({
         id: Math.floor(Math.random() * 10000),
         text: input,
         complete: false
      });
      setInput("");
   }
   const handleKeyPress = (e) => {
      if (e.key === "Enter") {
         handleSubmit(e)
      }
   }
   return (
      <form className="form" onSubmit={handleSubmit}>
         <input
            className="textarea"
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите текст..." />
         <button className="addBtn" type="submit">Добавить</button>
      </form>
   )
}

export default ToDoForm;