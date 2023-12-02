import EverydayEnglishContainer from '../shared/EverydayEnglishContainer'
import Audioplayer from './../../../shared/Audioplayer/index'
import styles from './DialogueLessonLayout.module.scss'
import { dialogueData } from '@/utils/lessonsMaterials/easyEnglish/lesson1/dialogue'

export default function DialogueLessonLayout() {
    return (
        <div className={styles.container}>
            <Audioplayer audioSrc='/audio/lesson-1.mp3' />
            <EverydayEnglishContainer className={styles.internalLayout}>
                {dialogueData.map(item => (
                    <div key={item.id}>
                        <p className={styles.en}>{item.nameEn} - {item.phraseEn}</p>
                        <p className={styles.ru}>{item.nameRu} - {item.phraseRu}</p>
                    </div>
                ))}
            </EverydayEnglishContainer>
        </div>
    )
}