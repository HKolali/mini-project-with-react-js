import React, { useState } from 'react'
import './Todo.css'
import { CgAddR } from "react-icons/cg";
import TodoItem from '../TodoItem/TodoItem'

export default function Todo() {

    const [todotext, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([])

    const changeInputTextHandler = (event) => {
        setTodoText(PrevText => {
            return PrevText + event.nativeEvent.data;
        })
    }

    const addTodo = (todotext) => {
        if (todotext.trim() !== '') {
            let newTodo = {
                id: todoList.length + 1,
                text: todotext
            }
            setTodoList(prevList => {
                return [...prevList, newTodo]
            })

            setTodoText('')
        }
    }

    return (
        <>
            <div className="todo">
                <div className='todo__form'>
                    <div className="todo__input">
                        <input value={todotext} onChange={(event) => changeInputTextHandler(event)} className='todo__input-text' type="text" name="input" id="input" placeholder='insert to do' />
                        <CgAddR className='todo__input-btn-add' onClick={() => addTodo(todotext)} />
                    </div>
                    <div className="todo__select-box">
                        <select className='todo__selected-box-list' name="" id="list">
                            <option className='todo__selected-box-item' value="All">All</option>
                            <option className='todo__selected-box-item' value="Compeleted">Compeleted</option>
                            <option className='todo__selected-box-item' value="UnCompeleted">UnCompeleted</option>
                        </select>
                    </div>
                </div>
                {todoList.length > 0 && (
                    todoList.map(todo => (
                        <TodoItem {...todo}/>
                    ))
                )}

            </div>
        </>
    )
}
