import { useState} from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'

import TodoForm from '../TodoForm/TodoForm'
import TodoQuickAdd from '../TodoQuickAdd/TodoQuickAdd'
import TodoNote from '../TodoNote/TodoNote'
import TodoToggleDetails from './TodoToggleDetails'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import styles from './TodoCreatePanel.module.css'


const TodoCreatePanel = () => {
    const [ showDetails, setShowDetails ] = useState(false)
    
    useLockBodyScroll(showDetails)

    return (
        <div className={`${styles.todoCreatePanel} ${
            showDetails ? styles.todoCreatePanelExpanded : ''
        }`}>
            <TodoForm hideLabel={!showDetails} placeholder="Новая задача..."/>
            <AnimatePresence>
                {showDetails && (
                    <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.35 },
                            opacity: { duration: 0.25 }
                        }}
                        style={{ overflow: 'hidden' }}
                        className={styles.detailsContainer}
                    >
                        <TodoQuickAdd />
                        <TodoNote />
                    </Motion.div>
                )}
            </AnimatePresence>

            <TodoToggleDetails
                setShowDetails={setShowDetails}
                showDetails={showDetails}
            />
            
        </div>
    )
}

export default TodoCreatePanel