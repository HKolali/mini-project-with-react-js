import React from 'react'
import './TodoItem.css'
import { CgTrashEmpty } from "react-icons/cg";
import { GrCheckmark } from "react-icons/gr";

export default function TodoItem(props) {
    return (
        <>
            <div className="todo-item__input">
                <input value={props.text} className='todo-item__input-text' type="text" name="input" id="input" />
                <GrCheckmark  className='todo-item__input-btn-compelet' />
                <CgTrashEmpty  className='todo-item__input-btn-remove' />
            </div>
        </>
    )
}
