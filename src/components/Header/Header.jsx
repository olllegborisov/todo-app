import FeedBackActions from '../FeedbackActions/FeedbackActions'
import LogoIcon from '../../assets/icons/logo.svg?react'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.inner} container`}>
                <LogoIcon />
                <FeedBackActions />
            </div>
        </div>
    )
}

export default Header