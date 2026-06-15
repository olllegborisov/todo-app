import EditIcon from '../../../assets/icons/edit.svg?react'
import DeleteIcon from '../../../assets/icons/delete.svg?react'
import CheckIcon from '../../../assets/icons/check.svg?react'
import CrossIcon from '../../../assets/icons/cross.svg?react'
import styles from './ActiveButton.module.css'

export default function TodoActionButton({ type, onClick }) {
    const map = {
        edit: { icon: <EditIcon />, label: 'Редактировать задачу' },
        delete: { icon: <DeleteIcon />, label: 'Удалить задачу' },
        save: { icon: <CheckIcon />, label: 'Сохранить задачу' },
        cancel: { icon: <CrossIcon />, label: 'Отменить' }
    }

    const item = map[type]

    return (
        <button className={styles.btn} onClick={onClick} aria-label={item.label}>
            {item.icon}
        </button>
    )
}