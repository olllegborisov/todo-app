import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, selectVisibleTodos, editTodo } from '../../store/todoSlice'
import style from './TodoList.module.css'

export default function TodoList() {
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')
    const todos = useSelector(selectVisibleTodos)

    const dispatch = useDispatch()

    function handleListItemOnClick(todo) {
        dispatch(toggleTodo(todo.id))
    }

    function handeInputKeydown(e, todo) {
        if (e.key === 'Enter') {
            dispatch(editTodo({ id: todo.id, text: editText }))
            setEditingId(null)
        }
        if (e.key === 'Escape') {
            setEditingId(null)
            setEditText('')
        }
    }

    function handleButtonSaveOnClick(e, todo) {
        e.stopPropagation()
        dispatch(editTodo({
            id: todo.id,
            text: editText
        }))

        setEditingId(null)
        setEditText('')
    }

    return (
        <ul className={style.list}>
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleListItemOnClick(todo)} className={`${todo.isCompleted ? `${style.checked}` : ''}`} >
                    {editingId === todo.id ? (
                        <>
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => handeInputKeydown(e, todo)}
                            />
                            <button
                                onClick={(e) => handleButtonSaveOnClick(e, todo)}
                                >
                                Save
                            </button>
                        </>
                    ) : (
                        <span>{todo.text}</span>
                    )}

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setEditingId(todo.id)
                            setEditText(todo.text)
                        }}
                        >
                        Редактировать
                    </button>   
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        ❌
                    </button>
                </li>
            ))}
        </ul>
    )
}