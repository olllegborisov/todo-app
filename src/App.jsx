
import './App.css'
import TodoForm from './assets/components/TodoForm/TodoForm'
import TodoList from './assets/components/TodoList/TodoList'
import TodoFilter from './assets/components/TodoFilter/TodoFilter'


function App() {
  return (
    <div className="container">
      <h1 className="title">Список задач</h1>
      <TodoForm />
      <TodoList />
      <TodoFilter/>
    </div>
  )
}

export default App
