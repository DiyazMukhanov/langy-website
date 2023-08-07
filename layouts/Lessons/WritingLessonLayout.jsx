import { Button } from '@/components/Button'
import LessonLayout from './LessonLayout'
import styles from './WritingLessonLayout.module.scss'
import { lessonsSummary } from '@/utils/lessonsSummary'
import axios from 'axios'
import { useState } from 'react'

export default function WritingLessonLayout()  {
    const [essay, setEssay] = useState('')
    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    console.log(response)

    //Test Chat GPT
    const handleSubmit = async () => {
        try {
            if(essay.length < 1) {
                alert('Пожалуйста напишите эссе')
                return
            }

            setIsLoading(true)

            const headers = {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDA2ZDc0MDdlNjNjMDk5NGRkNTBkNCIsImlhdCI6MTY5MTM4OTExNiwiZXhwIjoxNjk5MTY1MTE2fQ.V_87nGcuk10ymHQo2h_Z7kZwu2mxTIoNKMDg9JuHnrw`,
                'Content-Type': 'application/json', // Set the content type of the request (optional)
              };
            const response = await axios.post('https://langy-api.onrender.com/api/v1/users/essay', { essay }, { headers });
            if(response) {
                setIsLoading(false)
            }
            setResponse(response.data);
          } catch (error) {
            console.error('Error making API request:', error);
            setIsLoading(false)
            // Handle the error, show an error message, etc.
          }
    }

    const inputValueHandler = (event) => {
        setEssay(event.target.value)
    }
    
    if(isLoading) {
        return <div>Loading...</div>
    } else {
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
                  onChange={inputValueHandler}
                  />
                  <div className={styles.checkButtonContainer}>
                    <Button variant='standardNextContained' onClick={handleSubmit}>Проверить</Button>
                  </div>
                  <p className={styles.title}>Комментарии к сочинению</p>
                  <textarea className={styles.commentsContainer} value={response && response.result}>{}</textarea>
                  <div className={styles.nextButtonContainer}>
                    <Button variant='standardNextContained'>Далее</Button>
                  </div>
               </div>
            </LessonLayout>
            </>
            )
    }
  
}