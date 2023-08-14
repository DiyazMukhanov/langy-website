import ProtectPage from '@/components/ProtectPage'
import styles from './Service.module.scss'
import Header from '@/components/Header'
import { Button } from '@/components/Button'
import { useState } from 'react'
import classNames from 'classnames'

export default function Service() {
    const [emailInputValue, setEmailInputValue] = useState('')
    const [topicInputValue, setTopicInputValue] = useState('')
    const [issueInputValue, setIssueInputValue] = useState('')

    const [emailInputValueEmpty, setEmailInputValueEmpty] = useState(false)
    const [topicInputValueEmpty, setTopicInputValueEmpty] = useState(false)
    const [issueInputValueEmpty, setIssueInputValueEmpty] = useState(false)

    return (
        <ProtectPage>
            <Header variant='blue'/>
            <div className={styles.serviceContainer}>
               <h2>Служба поддержки</h2>
               <input type='text' placeholder='Электронная почта *' className={classNames(styles.input, {[styles.red]: emailInputValueEmpty})}/>
               <input type='text' placeholder='Тема *' className={classNames(styles.input, {[styles.red]: topicInputValueEmpty})}/>
               <textarea placeholder='Опишите проблему *' className={classNames(styles.large, {[styles.red]: issueInputValueEmpty})}/>
               <Button variant='standardNextContained' className={styles.button}>Отправить</Button>
            </div>
        </ProtectPage>
    )
}