import styles from './Advantage.module.scss'
import Image from 'next/image'
import Circle from '../../public/images/circle.svg'

export default function Advantage({ text }) {
    return (
    <div className={styles.advantage}>
        <Image
           priority
           src={Circle}
           />
         <div className={styles.text}>
        {text}
        </div>
    </div>
    )
}