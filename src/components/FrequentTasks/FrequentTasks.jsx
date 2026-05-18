import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { addTodo } from '../../store/todoSlice.js'
import RefreshIcon from '../../assets/icons/refresh.svg?react'
import tasks from '../../data/tasks.js'
import getRandomTasks from '../../utils/getRandomTasks.js'
import styles from './FrequentTasks.module.css'

const FrequentTasks = () => {
    const dispatch = useDispatch()
    const [randomTasks, setRandomTasks] = useState(() => getRandomTasks(tasks, 4))

    const refresh = () => {
        setRandomTasks(getRandomTasks(tasks, 4))
    }

    function handleClick(text) {
        dispatch(addTodo(text))
    }

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>Частые задачи:</label>
            <div className={styles.wrapper}>
                <button className={`${styles.buttonAccent}`} onClick={refresh} aria-label="Обновить задачи"><RefreshIcon/></button>
                {randomTasks.map((item, index) => {
                    return (
                    <button key={index} className={styles.button} onClick={() => handleClick(item)} >{item}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default FrequentTasks