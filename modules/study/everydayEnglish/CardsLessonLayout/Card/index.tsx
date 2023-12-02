import styles from './Card.module.scss'
import PlayAudioButton from '@/modules/shared/PlayAudioButton'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

export default function Card({ phrase }) {
    const [isEnglish, setIsEnglish] = useState(true)

    useEffect(() => {
        setIsEnglish(true)
    }, [phrase])

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
                <p>{isEnglish ? phrase.en : phrase.ru}</p>
                {isEnglish && <PlayAudioButton src='https://storage.googleapis.com/langy.su/audio/lesson1/bread.mp3' />}
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