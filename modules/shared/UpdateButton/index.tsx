import Image from 'next/image'
import styles from './UpdateButton.module.scss'
import Update from '../../../public/images/update.svg'

export default function UpdateButton({ onClick }) {
    return (
        <Image
            priority
            src={Update}
            height={25}
            alt='update'
            onClick={onClick}
            className={styles.update}
        />
    )
}

