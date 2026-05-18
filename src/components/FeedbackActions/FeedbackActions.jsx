import React from 'react'
import styles from './FeedbackActions.module.css'
import EmailIcon from '../../assets/icons/email.svg?react'
import TelegramIcon from '../../assets/icons/tg.svg?react'

const FeedbackActions = () => {
    return (
        <>                
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
        </>
    )
}

export default FeedbackActions