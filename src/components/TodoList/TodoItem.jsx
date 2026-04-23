import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo, editTodo } from '../../store/todoSlice'

import styles from './TodoList.module.css'

export default function TodoItem({todo}) {
    
    const dispatch = useDispatch()

    const [editingId, setEditingId] = useState(null)
    const [text, setText] = useState(todo.text)

    function handleEditClick() {
        setEditingId(todo.id)
        setText(todo.text)
    }

    const handleSave = () => {
        dispatch(editTodo({ id: todo.id, text}))
        setEditingId(null)
    }

    const handleKeyDown = (e, todo) => {
        if (e.key === 'Enter') handleSave()
        if (e.key === 'Escape') {
            setEditingId(null)
            setText(todo.text)
        }
    }

  return (
    <li>
        {editingId === todo.id ? (
            <>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <button onClick={handleSave}>Save</button>
            </>
        ) : (
            <>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span className={todo.isCompleted 
                    ? styles.completed : ''}>{todo.text}</span>
            </>
        )}

      <button onClick={handleEditClick}> Редактировать</button>
      <button onClick={() =>dispatch(removeTodo(todo.id))}>❌</button>
    </li>
  )
}