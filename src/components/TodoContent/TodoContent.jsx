import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoFilter from '../TodoFilter/TodoFilter'
import FrequentTasks from '../FrequentTasks/FrequentTasks'
import styles from './TodoContent.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setNote } from '../../store/todoSlice'

function TodoContent() {
  const note = useSelector(state => state.todos.note)
  const dispatch = useDispatch()
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Задачи на день</h1>
        <TodoForm />
        <FrequentTasks />
        <div className={styles.note}>
          <label htmlFor="textarea">Заметка:</label>
          <textarea id="textarea" className={styles.textarea} value={note} onChange={(e) => dispatch(setNote(e.target.value))} />
        </div>
      </div>
      <div className={styles.inner}>
        <TodoFilter/>
        <TodoList />
      </div>
    </div>
  )
}

export default TodoContent