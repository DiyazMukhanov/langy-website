import { useEffect, useState } from 'react'
import styles from './Services.module.scss'
import { useRouter } from 'next/router'
import { getAllServices } from '@/api/user'
import classNames from 'classnames'

export default function Services() {
    const router = useRouter()
    const [data, setData] = useState(null)
    const [page, setPage] = useState(1)
    const [noData, setNoData] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    console.log(page)
    useEffect(() => {
       const getInitalServices = async () => {
        try{
            const response = await getAllServices(page)
            console.log(response?.data?.data)
            setData(response?.data?.data)
            setIsLoading(false)
          } catch(err) {
             console.log(err)
             setIsLoading(false)
          }
       }

       getInitalServices()
    }, [page])

    useEffect(() => {
        if(data?.length === 0) {
            setNoData(true)
        }
    }, [data])

    const nextPageHandler = async () => {
        if(data?.length === 0) {
            setNoData(true)
            return
        } else {
            setPage(page + 1)
        }
    } 

    const previosPageHandler = async () => {
        if(page === 1) {
            return
        } else {
            setPage(page - 1)
        }
    } 
    
    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className={styles.container}>
             <div className={styles.paginationButtons}> 
                <button onClick={previosPageHandler}>previous</button>
                <button onClick={nextPageHandler}>next</button>
             </div>
        
             {noData ? <p>No data</p> : (
                <div className={styles.dataContainer}>
                  {data.map(item => (
                    <p key={item._id} className={classNames(
                        styles.serviceItem,
                        {[styles.notResolved]: item.isResolved === false}
                        )}
                        onClick={() => router.push(`/admin/service-profile/${item._id}`)}
                        >
                            {item.createdAt} {item.userEmail}
                            </p>
                  ))}
                </div>
             )}
             
              
            </div>
            )
    }
  
}