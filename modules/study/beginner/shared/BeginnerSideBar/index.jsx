import { useRouter } from 'next/router'
import styles from './BeginnerSideBar.module.scss'
import classNames from 'classnames'

export default function BeginnerSidebar({ lessonsSummary, beginnerProgress }) {
   const router = useRouter()

   const navigationHandler = (lessonNumber) => {
      router.push(`/lessons/beginner/lesson${lessonNumber}`)
   }

   return (
      <div className={styles.lessonsListContainer}>
         {lessonsSummary.map(lessonBlock => (
            <div key={lessonBlock.title}>
               <div
                  className={classNames(
                     styles.chapter,
                     { [styles.completed]: beginnerProgress?.completed.includes(lessonBlock.lessonNumber) },
                     { [styles.currentChapter]: beginnerProgress?.currentLesson === lessonBlock.lessonNumber }
                  )}
                  key={lessonBlock.lessonNumber}
                  onClick={() => navigationHandler(lessonBlock.lessonNumber)}
               >
                  Lesson {lessonBlock.lessonNumber}
               </div>
            </div>
         ))}
      </div>
   )
}