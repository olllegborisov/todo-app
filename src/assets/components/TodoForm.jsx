import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice'

export default function TodoForm() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch();

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!todo.trim()) return

        dispatch(addTodo(todo))
        setTodo('')
    }

    return (
    <>
        <h1>Список задач</h1>
        <form onSubmit={handleFormSubmit} className='todo-form'>
            <label htmlFor="todo" className='todo-label'>Введите задачу</label>
            <input id="todo" className='todo-input' placeholder='Введите текст' onChange={(e) => setTodo(e.target.value)} value={todo}></input>
            <button type='submit'>Отправить</button>
        </form>
    </>
  )
}