import EmailIcon from '../../assets/icons/email.svg?react'
import LogoIcon from '../../assets/icons/logo.svg?react'
import TelegramIcon from '../../assets/icons/tg.svg?react'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.inner} container`}>
                <LogoIcon />
                <div className={styles.actions}>
                    <a href="mailto:olllegborisov@gmail.com" className={styles.action}>
                        <EmailIcon />
                        <span className={styles.text}>olllegborisov@gmail.com</span>
                    </a>
                    <a href="https://t.me/olllegborisov" className={styles.action}>
                        <TelegramIcon />
                        <span className={styles.text}>olllegborisov</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header