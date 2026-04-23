import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoFilter from '../TodoFilter/TodoFilter'
import styles from './TodoContent.module.css'


function TodoContent() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Задачи на день</h1>
        <TodoForm />
      </div>
      <div className={styles.inner}>
        <TodoList />
        <TodoFilter/>
      </div>
    </div>
  )
}

export default TodoContent