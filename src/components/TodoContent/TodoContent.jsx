import { useMediaQuery } from '../../hooks/useMediaQuery'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoFilter from '../TodoFilter/TodoFilter'
import FrequentTasks from '../TodoQuickAdd/TodoQuickAdd'
import FeedBackActions from '../FeedbackActions/FeedbackActions'
import TodoNote from '../TodoNote/TodoNote'
import styles from './TodoContent.module.css'

function TodoContent() {
  const isMobile = useMediaQuery('(min-width: 744px)')
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Задачи на день</h1>
        {isMobile && (
          <>
            <TodoForm />
            <FrequentTasks />
            <TodoNote />
          </>
        )}


      </div>
      <div className={styles.inner}>
        <TodoFilter/>
        <TodoList />
      </div>
    </div>
  )
}

export default TodoContent