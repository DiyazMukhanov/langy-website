import { useEffect, useState } from 'react'
import styles from './/ServiceProfile.module.scss'
import { useRouter } from 'next/router'
import { getServiceById } from '@/api/user'

export default function ServiceProfile() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [service, setService] = useState(null)
    
    useEffect(() => {
      const getService = async () => {
         
            try {
                const response = await getServiceById(router.query.id)
                setIsLoading(false)
                console.log(response?.data?.data)
                setService(response?.data?.data)
                
            } catch (err) {
                console.log(err)
                setIsLoading(false)
            }
        
      }

      getService()
    }, [router.query?.id])
    
    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <>
              <div className={styles.container}>
                <p>User ID: {service?.userId}</p>
                <p>UserEmail: {service?.userEmail}</p>
                <p>Message: {service?.message}</p>
              </div>
            </>
            )
    }
    
}