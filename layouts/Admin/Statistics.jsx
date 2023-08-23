import { useEffect, useState } from 'react'
import styles from './Statistics.module.scss'
import { useRouter } from 'next/router'
import { getStatistics } from '@/api/user'

export default function Statisctics() {
    const router = useRouter()
    const [stats, setStats] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    console.log(isLoading)

    useEffect(() => {
    const getStats = async () => {
        try {
            const response = await getStatistics()
            console.log(response?.data?.stats)
            setStats(response?.data?.stats)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            alert('Произошла ошибка')
            setIsLoading(false)
        }
    }

    getStats()
    }, [])

    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className={styles.container}>
              <p>Всего студентов зарегистрировалось: {stats?.allStudentsQuantity}</p>
              <p>Всего с активной подпиской: {stats?.subscibedNow}</p>
              <p>Всего с активной подпиской Elementary: {stats?.subscibedNowElementary}</p>
              <p>Всего с активной подпиской Pre-Intermediate: {stats?.subscibedNowPreIntermediate}</p>
              <p>Всего с активной подпиской Intermediate: {stats?.subscibedNowIntermediate}</p>
              <p>Всего когда-либо купивших подписку: {stats?.subscribedEverStudents}</p>
            </div>
          )
    }
    
}