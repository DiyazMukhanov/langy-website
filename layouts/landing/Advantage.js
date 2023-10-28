import styles from './Advantage.module.scss'

export default function Advantage({ text, color }) {
    return (
        <div className={styles.advantage}>
            <div style={{ borderRadius: '50%', backgroundColor: color, width: '25px', height: '25px' }}></div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}