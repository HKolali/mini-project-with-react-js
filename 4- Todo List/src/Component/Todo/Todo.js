import React, { useState } from 'react'
import './Todo.css'
import { CgAddR } from "react-icons/cg";
import TodoItem from '../TodoItem/TodoItem'

export default function Todo() {

    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([])
    const [status, setStatus] = useState('All')

    const changeInputTextHandler = (event) => {
        setTodoText(event.target.value)
    }

    const addTodo = (todoText) => {
        if (todoText.trim() !== '') {
            let newTodo = {
                id: todoList.length + 1,
                text: todoText,
                complete: false
            }
            setTodoList(prevList => {
                return [...prevList, newTodo]
            })

            setTodoText('')
        }
    }

    const completeTodo = (todoId) => {

        let newTodoList = [...todoList]
        newTodoList.forEach(todo => {
            if (todo.id == todoId) {
                todo.complete = !todo.complete;
            }
        })

        setTodoList(() => {
            return newTodoList
        })
    }

    const removeTodo = (todoId) => {
        let newtodoList = todoList.filter(todo => {
            return todo.id !== todoId
        })
        setTodoList(() => {
            return newtodoList
        })
    }

    const selectedItem = (event) => {
        setStatus(event.target.value)
    }

    return (
        <>
            <div className="todo">
                <div className='todo__form'>
                    <div className="todo__input">
                        <input value={todoText} onChange={(event) => changeInputTextHandler(event)} className='todo__input-text' type="text" name="input" id="input" placeholder='insert to do' />
                        <CgAddR className='todo__input-btn-add' onClick={() => addTodo(todoText)} />
                    </div>
                    <div className="todo__select-box">
                        <select className='todo__selected-box-list' name="" id="list" onChange={(event) => selectedItem(event)} value={status}>
                            <option className='todo__selected-box-item' value="All">All</option>
                            <option className='todo__selected-box-item' value="Completed">Completed</option>
                            <option className='todo__selected-box-item' value="UnCompleted">UnCompleted</option>
                        </select>
                    </div>
                </div>
                {status === 'All' && (
                    todoList.map(todo => (
                        <TodoItem {...todo} onComplete={completeTodo} onRemove={removeTodo} />
                    ))
                )}

                {status === 'Completed' && (
                    todoList.filter(todo => todo.complete).map(todo => (
                        <TodoItem {...todo} onComplete={completeTodo} onRemove={removeTodo} />
                    ))
                )}

                {status === 'UnCompleted' && (
                    todoList.filter(todo => !todo.complete).map(todo => (
                        <TodoItem {...todo} onComplete={completeTodo} onRemove={removeTodo} />
                    ))
                )}
            </div>
        </>
    )
}
