import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import TodoForm from '../TodoForm/TodoForm'
import TodoQuickAdd from '../TodoQuickAdd/TodoQuickAdd'
import TodoNote from '../TodoNote/TodoNote'
import TodoToggleDetails from './TodoToggleDetails'
import CrossIcon from '../../assets/icons/cross.svg?react'
import styles from './TodoCreatePanel.module.css'


const TodoCreatePanel = () => {
    const [ showDetails, setShowDetails ] = useState(false)

    const useLockBodyScroll = (isLocked) => {
    useEffect(() => {
        if (isLocked) {
        document.body.style.overflow = 'hidden'
        } else {
        document.body.style.overflow = ''
        }

        return () => {
        document.body.style.overflow = ''
        }
    }, [isLocked])
    }

    return (
        <>
            <div className={styles.todoCreatePanel + ' ' + (showDetails ? styles.todoCreatePanelExpanded : '')}>
                {showDetails && (
                    <CrossIcon className={styles.crossIcon} onClick={() => setShowDetails(false)}/>
                )}
                <TodoForm hideLabel={!showDetails} placeholder="Новая задача..."/>
                <AnimatePresence>
                    {showDetails && (
                        <motion.div
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
                        </motion.div>
                    )}
                </AnimatePresence>

                <TodoToggleDetails
                    setShowDetails={setShowDetails}
                    showDetails={showDetails}
                    useLockBodyScroll={useLockBodyScroll(showDetails)}
                />
                
            </div>
        </>
    )
}

export default TodoCreatePanel