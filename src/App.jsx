
import './App.css'
import Header from './components/Header/Header'
import TodoContent from './components/TodoContent/TodoContent'
import TodoCreatePanel from './components/TodoCreatePanel/TodoCreatePanel'
import { useMediaQuery } from './utils/useMediaQuery'

function App() {
  const isMobile = useMediaQuery('(max-width: 744px)')
  return (
    <>
      <Header />
      <TodoContent />
      {isMobile && <TodoCreatePanel />}
    </>
  )
}

export default App
