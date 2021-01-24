import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
    return (
        <div  className={s.dialogs}>
            {props.users.map(user =>{
               return  <Dialog user = {user} key={user.id}/>
            })}
        </div>

    );
}



// {
//     props.todos.map((todo, index) =>{
//         return <TodoItem  todo ={todo} key = {todo.id} index = {index}/>
//     })
// }
export default Dialogs;