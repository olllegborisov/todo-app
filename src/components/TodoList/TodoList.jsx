import { useSelector } from 'react-redux'

import { selectVisibleTodos } from '../../store/todoSlice'

import TodoSection from './TodoSection'

export default function TodoList() {
    const todos = useSelector(selectVisibleTodos)

    const activeTodos = todos.filter(
        (todo) => !todo.isCompleted
    )

    const completedTodos = todos.filter(
        (todo) => todo.isCompleted
    )

    return (
        <>
            <TodoSection
                title="Активные:"
                todos={activeTodos}
            />

            <TodoSection
                title="Выполненные:"
                todos={completedTodos}
            />
        </>
    )
}