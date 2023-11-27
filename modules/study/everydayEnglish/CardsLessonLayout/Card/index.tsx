import styles from './Card.module.scss'
import PlayAudioButton from '@/modules/shared/PlayAudioButton'
import { useState } from 'react'
import classNames from 'classnames'

export default function Card() {
    const [isEnglish, setIsEnglish] = useState(true)

    const toggleCardHanlder = () => {
        setIsEnglish(!isEnglish)
    }

    return (
        <div className={classNames(
            styles.card,
            { [styles.ru]: !isEnglish }
        )
        }>
            <div className={styles.top}>
                <p>Hi! How are you?</p>
                {isEnglish && <PlayAudioButton src='https://storage.googleapis.com/langy.su/audio/lesson1/apple.mp3' />}
            </div>
            <p
                className={classNames(
                    styles.changeBtn,
                    { [styles.ruBtn]: !isEnglish }
                )}
                onClick={toggleCardHanlder}
            >
                Перевернуть
            </p>
        </div>
    )
}