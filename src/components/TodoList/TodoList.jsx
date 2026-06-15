import { useSelector } from 'react-redux'

import { selectVisibleTodos } from '../../store/todoSlice'
import { selectFilter, selectTodos } from '../../store/todoSlice'

import TodoSection from './TodoSection/TodoSection'

export default function TodoList() {
    const todos = useSelector(selectTodos)
    const filter = useSelector(selectFilter)
    

    const activeTodos = todos.filter(
        (todo) => !todo.isCompleted
    )

    const completedTodos = todos.filter(
        (todo) => todo.isCompleted
    )

    return (
        <>
            {(filter === 'all' || filter === 'active') && (
                <TodoSection
                    title="Активные:"
                    todos={activeTodos}
                />
            )}

            {(filter === 'all' || filter === 'completed') && (
                <TodoSection
                    title="Выполненные:"
                    todos={completedTodos}
                />
            )}
        </>
    )
}