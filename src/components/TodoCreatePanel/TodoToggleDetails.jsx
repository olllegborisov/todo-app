
import styles from './TodoToggleDetails.module.css'

const TodoToggleDetails = ({setShowDetails, showDetails}) => {
    
    return (
        <button className={styles.button} onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Готово' : 'Показать больше'}
        </button>
    )
}

export default TodoToggleDetails