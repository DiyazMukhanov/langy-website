import { Button } from '@/components/Button'
import LessonLayout from './LessonLayout'
import styles from './WritingLessonLayout.module.scss'
import { lessonsSummary } from '@/utils/lessonsSummary'

export default function WritingLessonLayout()  {
    return (
    <>
    <LessonLayout lessonsSummary={lessonsSummary} chapter='writing'>
       <div className={styles.lessonContainer}>
          <p className={styles.title}>
             Напишите короткое сочинение на тему “Мое хобби”
          </p>
          <textarea
          type='text'
          placeholder='Введите текст'
          className={styles.input}
          />
          <div className={styles.checkButtonContainer}>
            <Button variant='standardNextContained'>Проверить</Button>
          </div>
          <p className={styles.title}>Комментарии к сочинению</p>
          <div className={styles.commentsContainer}></div>
          <div className={styles.nextButtonContainer}>
            <Button variant='standardNextContained'>Далее</Button>
          </div>
       </div>
    </LessonLayout>
    </>
    )
}