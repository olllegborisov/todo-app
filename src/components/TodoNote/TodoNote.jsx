
import { useDispatch, useSelector } from 'react-redux'
import { setNote } from '../../store/todoSlice'
import styles from './TodoNote.module.css'

const TodoNote = () => {
    const note = useSelector(state => state.todos.note)
    const dispatch = useDispatch()
    

    return (
        <>
            <div className={styles.note}>
                <label className={styles.label} htmlFor="textarea">Заметка:</label>
                <textarea 
                    id="textarea" 
                    className={`${styles.textarea} form-field`} 
                    placeholder="Введите текст заметки" 
                    value={note} 
                    onChange={(e) => dispatch(setNote(e.target.value))} 
                />
            </div>
        </>
    )
}

export default TodoNote