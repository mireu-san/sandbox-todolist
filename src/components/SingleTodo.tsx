import React, { useState } from 'react'
import { Todo } from "../models/models"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./styles.css"
import TodoList from './TodoList'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo)=>todo.id === id?{...todo, isDone: !todo.isDone} : todo
      )
    );
  };

  // const handleDelete = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id))
  // };

  // const handleEdit = (id: number) =>

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== todo.id))
  }

  return (
    <form className="todos__single">
      {edit ? (
        <input />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      {/* {
        TodoList.isDone? (
          <s className="todos__single--text">{todo.todo}</s>
        ): (
          <span className="todos__single--text">{todo.todo}</span>
        )
        } */}

        <div>
          <span 
            className="icon"
            onClick={() => {
            if(!edit && !todo.isDone){
              setEdit(!edit)
            }
            }}
            >
            <AiFillEdit />  
          </span> 
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </form>
      //     onClick={() => {
      //       if(!edit && todo.isDone)
      //         setEdit(!edit);
      //     }
//       //   }}
//       // > 
//       </div> */}


//       <span className="todos__single--text">{todo.todo}</span>
//         <div>
//           <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillEdit /></span>
//           <span className="icon" ><AiFillDelete /></span>
//           <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
//         </div>
//     </form>
  )
}

export default SingleTodo