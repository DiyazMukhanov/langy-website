import Header from "@/components/Header"
import styles from './/Profile.module.scss'
import SubscriptionCard from "./SubscriptionCard"
import ProtectPage from "@/components/ProtectPage"
import { UserContext } from "@/store/userContext"
import { useContext, useState } from "react"
import { useRouter } from "next/router"
import { resetProgress } from "@/api/user"
import Loader from "@/components/Loader"

export default function Profile() {
    const userCtx = useContext(UserContext)
    console.log(userCtx.userData)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const capitalizeFirst = (str) => {
        if(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }

    const handleResetProgress = async () => {
       const userChoice = confirm('Вы уверены, что хотите сбросить весь ваш прогресс?')
       if(!userChoice) {
          return
       } else {
        setIsLoading(true)
        try {
            const response = await resetProgress()
            if(response) {
                setIsLoading(false)
                alert('Ваш прогресс сброшен!')
            }
        } catch (err) {
            console.log(err)
            alert('Что-то пошло не так. Повторите попытку')
            setIsLoading(false)
        }
       }
    }

    if(isLoading) {
        return <Loader />
    } else {
        return (
            <ProtectPage>
              <Header variant='blue'/>
              <div className={styles.profileContainer}>
                  <div className={styles.leftSide}>
                      <p className={styles.name}>{userCtx?.userData?.name}</p>
                      <h2>Мой уровень</h2>
                      <div className={styles.level}>{capitalizeFirst(userCtx?.userData?.level)}</div>
                      <p className={styles.service} onClick={() => router.push('/service')}>Написать в службу поддержки</p>
                      <p className={styles.service} onClick={handleResetProgress}>Сбросить мой прогресс</p>
                  </div>
                  <SubscriptionCard userData={userCtx?.userData}/>
              </div>
            </ProtectPage>
          )
    }
    
}