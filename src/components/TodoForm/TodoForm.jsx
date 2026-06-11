import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice'
import styles from './TodoForm.module.css'

export default function TodoForm({placeholder}) {
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
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <label className={styles.label} htmlFor="todo" >Новая задача:</label>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} id="todo"  placeholder={placeholder ? placeholder : 'Введите текст'} onChange={(e) => setTodo(e.target.value)} value={todo}></input>
                    <button className={styles.button} type='submit'>Добавить задачу</button>
                </div>
            </form>
        </>
    )
}