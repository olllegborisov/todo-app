
import './App.css'
import TodoForm from './assets/components/TodoForm'
import TodoList from './assets/components/TodoList'
import TodoFilter from './assets/components/TodoFilter'


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
