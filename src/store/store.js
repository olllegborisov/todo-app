import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

const STORAGE_KEY = 'todo-app-state'

function loadTodosState() {
    try {
        const savedState = localStorage.getItem(STORAGE_KEY)

        if (!savedState) return undefined

        return JSON.parse(savedState)
    } catch {
        return undefined
    }
}

const preloadedTodosState = loadTodosState()

export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    preloadedState: preloadedTodosState
        ? { todos: preloadedTodosState }
        : undefined
})

store.subscribe(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().todos))
})