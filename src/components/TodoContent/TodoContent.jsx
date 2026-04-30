import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoFilter from '../TodoFilter/TodoFilter'
import FrequentTasks from '../FrequentTasks/FrequentTasks'
import styles from './TodoContent.module.css'


function TodoContent() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Задачи на день</h1>
        <TodoForm />
        <FrequentTasks />
        <div className={styles.note}>
          <label htmlFor="textarea">Заметка:</label>
          <textarea id="textarea" className={styles.textarea} value="Доставку заказать только после 18:00, после этого сразу отправить чек" />
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