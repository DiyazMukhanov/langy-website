import styles from './HowCard.module.scss'
import classNames from "classnames"

export default function HowCard({ number, text, color }) {
   return (
    <div className={classNames(styles.card, styles[color])}>
        <div className={classNames(styles.number, styles[color])}>{number}</div>
        <div className={styles.text}>{text}</div>
    </div>
   )
}