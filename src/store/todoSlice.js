import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    list: [],
    filter: 'all'
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.list.unshift({
                id: uuidv4(),
                text: action.payload,
                isCompleted: false
            })
        },
        removeTodo(state, action) {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        },
        toggleTodo(state, action) {
            const todo = state.list.find(item => item.id === action.payload)
            if (todo) {
                todo.isCompleted = !todo.isCompleted
            }
        },
        setFilter(state, action) {
            state.filter = action.payload
        },
        editTodo(state, action) {
            const { id, text } = action.payload

            const todo = state.list.find(item => item.id === id)

            if (todo) {
                todo.text = text
            }
        }
    }
})

export const selectVisibleTodos = (state) => {
    const { list, filter } = state.todos

    if (filter === 'active') {
        return list.filter(todo => !todo.isCompleted)
    }

    if (filter === 'completed') {
        return list.filter(todo => todo.isCompleted)
    }

    return list
}

export const { addTodo, removeTodo, toggleTodo, setFilter, editTodo } = todoSlice.actions
export default todoSlice.reducer