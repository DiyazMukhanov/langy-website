import { useState, ChangeEvent, FormEvent } from 'react'
import classNames from 'classnames'
import ProtectPage from '@/modules/shared/ProtectPage'
import Header from '@/modules/shared/Header'
import { Button } from '@/ui-kit/Button'
import { createServiceRequest } from './shared/api/createServiceRequest'
import styles from './Service.module.scss'

interface ServiceRequestData {
    topic: string
    message: string
}

export default function Service() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [topic, setTopic] = useState('')
    const [issue, setIssue] = useState('')
    const [topicError, setTopicError] = useState(false)
    const [issueError, setIssueError] = useState(false)

    const handleTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSubmitted(false)
        setTopic(event.target.value)
        setTopicError(false)
    }

    const handleIssueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setIsSubmitted(false)
        setIssue(event.target.value)
        setIssueError(false)
    }

    const validateForm = (): boolean => {
        const isTopicValid = topic.trim().length > 0
        const isIssueValid = issue.trim().length > 0
        
        setTopicError(!isTopicValid)
        setIssueError(!isIssueValid)
        
        return isTopicValid && isIssueValid
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        
        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        
        const requestData: ServiceRequestData = {
            topic: topic.trim(),
            message: issue.trim()
        }

        try {
            await createServiceRequest(requestData)
            setIsSubmitted(true)
            setTopic('')
            setIssue('')
        } catch (error) {
            console.error('Service request error:', error)
            alert('Произошла ошибка')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <ProtectPage adminNeeded={true} subscriptionIsNeeded={false}>
            <Header variant='blue' />
            <div className={styles.serviceContainer}>
                <h2>Служба поддержки</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Тема *'
                        value={topic}
                        className={classNames(styles.input, { [styles.red]: topicError })}
                        onChange={handleTopicChange}
                    />
                    <textarea
                        placeholder='Опишите проблему *'
                        value={issue}
                        className={classNames(styles.large, { [styles.red]: issueError })}
                        onChange={handleIssueChange}
                    />
                    <Button
                        type='submit'
                        variant='standardNextContained'
                        className={styles.button}
                        disabled={isLoading}
                    >
                        Отправить
                    </Button>
                </form>
                {isLoading && <p>Идёт отправка...</p>}
                {isSubmitted && <p>Отправлено!</p>}
            </div>
        </ProtectPage>
    )
}