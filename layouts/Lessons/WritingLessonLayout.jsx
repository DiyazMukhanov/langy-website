import { Button } from '@/components/Button'
import LessonLayout from './LessonLayout'
import styles from './WritingLessonLayout.module.scss'
import { useState } from 'react'
import { sendAssay } from '@/api/charGPT'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'
import { setProgressData } from '@/api/user'

export default function WritingLessonLayout({ writingTask, nextUrl, currentLessonData, subscriptionIsNeeded, lessonNumber, isBeginner }) {
  const [essay, setEssay] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  //Test Chat GPT
  const handleSubmit = async () => {
    try {
      if (essay.length < 1) {
        alert('Пожалуйста напишите эссе')
        return
      }

      setIsLoading(true)

      const response = await sendAssay(essay)

      setResponse(response.data)
      setIsLoading(false)

    } catch (error) {
      console.error('Error making API request:', error);
      setResponse('Извините, произошла ошибка')
      setIsLoading(false)
    }
  }

  const inputValueHandler = (event) => {
    setEssay(event.target.value)
  }

  const onChangeBackup = () => {

  }

  const setProgressHandler = async () => {
    setIsLoading(true)
    try {
      const data = await setProgressData({ lessonNumber: lessonNumber, chapterCode: 'wr' })
      router.push(nextUrl)

    } catch (err) {
      setIsLoading(false)
      router.push(nextUrl)
    }
  }

  const goNextHndler = () => {
    setProgressHandler()
  }

  return (
    <>
      <LessonLayout chapter='writing' currentLessonData={currentLessonData} subscriptionIsNeeded={subscriptionIsNeeded} isBeginner={isBeginner}>
        <div className={styles.lessonContainer}>
          <p className={styles.title}>
            {writingTask}
          </p>
          <textarea
            type='text'
            placeholder='Введите текст'
            className={styles.input}
            onChange={inputValueHandler}
            defaultValue={essay}
          />
          <div className={styles.checkButtonContainer}>
            <Button variant='standardNextContained' onClick={handleSubmit} disabled={isLoading}>Проверить</Button>
          </div>
          <p className={styles.title}>Комментарии к сочинению</p>
          {isLoading ? (<Loader small={true} />) : (
            <textarea className={styles.commentsContainer} value={response && response.result} onChange={onChangeBackup}></textarea>
          )}

          <div className={styles.nextButtonContainer}>
            <Button variant='standardNextContained' onClick={goNextHndler}>Далее</Button>
          </div>
        </div>
      </LessonLayout>
    </>
  )
}
