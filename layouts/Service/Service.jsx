import ProtectPage from '@/components/ProtectPage'
import styles from './Service.module.scss'
import Header from '@/components/Header'
import { Button } from '@/components/Button'
import { useState } from 'react'
import classNames from 'classnames'
import { createServiceRequest } from '@/api/user'

export default function Service() {
    const [isLoading, setIsLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const [topicInputValue, setTopicInputValue] = useState('')
    const [issueInputValue, setIssueInputValue] = useState('')

    const [topicInputValueEmpty, setTopicInputValueEmpty] = useState(false)
    const [issueInputValueEmpty, setIssueInputValueEmpty] = useState(false)

    const topicChangeHandler = (event) => {
        setTopicInputValue(event.target.value)
    }

    const issueChangeHandler = (event) => {
        setIssueInputValue(event.target.value)
    }

    const sendMessageHandler = async () => {
        setIsLoading(true)
       const requestBody = {
        topic: topicInputValue,
        message: issueInputValue
       }
       
       try{
        const response = await createServiceRequest(requestBody)
        setIsLoading(false)
        setSent(true)
       } catch (err) {
        console.log(err)
        alert('Произошла ошибка')
        setIsLoading(false)
       }
    }

    return (
        <ProtectPage>
            <Header variant='blue'/>
            <div className={styles.serviceContainer}>
               <h2>Служба поддержки</h2>
               <input type='text' placeholder='Тема *' className={classNames(styles.input, {[styles.red]: topicInputValueEmpty})} onChange={topicChangeHandler}/>
               <textarea placeholder='Опишите проблему *' className={classNames(styles.large, {[styles.red]: issueInputValueEmpty})} onChange={issueChangeHandler}/>
               <Button variant='standardNextContained' className={styles.button} onClick={sendMessageHandler}>Отправить</Button>
               {isLoading && <p>Идёт отправка...</p>}
               {sent && <p>Отправлено!</p>}
            </div>
        </ProtectPage>
    )
}