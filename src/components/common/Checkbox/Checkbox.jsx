import styles from './Checkbox.module.css'
import CheckIcon from '../../../assets/icons/check.svg?react'



const Checkbox = ({dispatch, todoState}) => {
    return (
        <label className={styles.checkbox}>
            <input
                type="checkbox"
                className={styles.checkboxInput}
                checked={todoState}
                onChange={dispatch}
                aria-label={
                    todoState
                        ? 'Отметить задачу как невыполненную'
                        : 'Отметить задачу как выполненную'
                }
            />

            <span
                className={`${styles.checkboxVisual} ${
                    todoState
                        ? styles.checkboxVisualChecked
                        : ''
                }`}
                aria-hidden
            >
                {todoState && (
                    <CheckIcon className={styles.checkmarkIcon} />
                )}
            </span>
        </label>
    )
}

export default Checkbox