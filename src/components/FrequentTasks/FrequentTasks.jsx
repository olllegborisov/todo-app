import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { addTodo } from '../../store/todoSlice'
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
    <>
        <div className={styles.wrapper}>
            <button className={`${styles.buttonAccent} ${styles.button}`} onClick={refresh}><RefreshIcon/></button>
            {randomTasks.map((item) => {
                return (
                <button className={styles.button} onClick={() => handleClick(item)}>{item}</button>
                )
            })}
        </div>
    </>
  )
}

export default FrequentTasks