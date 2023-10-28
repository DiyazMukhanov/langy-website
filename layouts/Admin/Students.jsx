import { useRef, useState } from 'react'
import styles from './Students.module.scss'
import { getUserByEmail, subscribeUser } from '@/api/user'

export default function Students() {
    const emailRef = useRef(null)
    const [email, setEmail] = useState('')
    const [user, setUser] = useState(null)
    const [notFound, setNotFound] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const inputChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const searchByEmailHandler = async () => {
        setUser(null)
        setNotFound(false)
        setIsLoading(true)
        try {
            const response = await getUserByEmail(email)
            setUser(response?.data?.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setNotFound(true)
            setIsLoading(false)
        }
    }

    const subscribeHandler = async (days) => {
        setIsLoading(true)
        try {
            const response = await subscribeUser({ days }, user?._id)
            setUser(response?.data?.data)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <div className={styles.container}>
                    <div className={styles.searchBlock}>
                        <div className={styles.searchCard}>
                            <p>Email</p>
                            <input type='text' ref={emailRef} onChange={inputChangeHandler}>

                            </input>
                            <button onClick={searchByEmailHandler}>Search</button>
                        </div>
                    </div>
                    <div className={styles.studentProfileBlock}>
                        {notFound && (
                            <p>User not found</p>
                        )}
                        {user && (
                            <>
                                <p>Name: {user?.name}</p>
                                <p>Email: {user?.email}</p>
                                <p>ID: {user?._id}</p>
                                <p>Subscription Expiration date: {user?.subscriptionExpirationDate}</p>
                                <div className={styles.btns}>
                                    <button onClick={() => subscribeHandler(90)}>Подписать на 3 месяца</button>
                                    <button onClick={() => subscribeHandler(180)}>Подписать на 6 месяцев</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </>
        )
    }

}