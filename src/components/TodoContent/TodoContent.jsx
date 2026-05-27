import { useSelector, useDispatch } from 'react-redux'
import { setNote } from '../../store/todoSlice'
import { useMediaQuery } from '../../utils/useMediaQuery'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoFilter from '../TodoFilter/TodoFilter'
import FrequentTasks from '../TodoQuickAdd/TodoQuickAdd'
import FeedBackActions from '../FeedbackActions/FeedbackActions'
import styles from './TodoContent.module.css'

function TodoContent() {
  const note = useSelector(state => state.todos.note)
  const dispatch = useDispatch()
  const isMobile = useMediaQuery('(min-width: 744px)')
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Задачи на день</h1>
        {isMobile && (
          <>
            <TodoForm />
            <FrequentTasks />
            <div className={styles.note}>
              <label htmlFor="textarea">Заметка:</label>
              <textarea id="textarea" className={styles.textarea} value={note} onChange={(e) => dispatch(setNote(e.target.value))} />
            </div>
          </>
        )}


      </div>
      <div className={styles.inner}>
        <TodoFilter/>
        <TodoList />
      </div>
      <FeedBackActions isMobile/>
    </div>
  )
}

export default TodoContent