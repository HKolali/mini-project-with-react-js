import React, {useState} from 'react'
import './TodoItem.css'
import { CgTrashEmpty } from "react-icons/cg";
import { GrCheckmark } from "react-icons/gr";

export default function TodoItem(props) {

    const completeTodo = (todoId) => {
      props.onComplete(todoId)
    }

    const RemoveTodo = (todoId) => {
        props.onRemove(todoId)
    }

    return (
        <>
            <div className="todo-item__input">
                {console.log("???")}
                <input value={props.text} className={`todo-item__input-text ${props.complete? 'completed' : ''}`} type="text" name="input" id="input" />
                <GrCheckmark  className='todo-item__input-btn-compelet' onClick={() => completeTodo(props.id)}/>
                <CgTrashEmpty  className='todo-item__input-btn-remove' onClick={() => RemoveTodo(props.id)}/>
            </div>
        </>
    )
}
