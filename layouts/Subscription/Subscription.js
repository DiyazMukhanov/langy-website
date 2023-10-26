import Header from "@/components/Header";
import ProtectPage from "@/components/ProtectPage";
import styles from './Subscription.module.scss'
import OptionCard from "./OptionCard";
import { subscribeMe } from "@/api/user";
import { useContext, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { UserContext } from "@/store/userContext";
import { useRouter } from "next/router";
import { Button } from "@/components/Button";
import { resetProgress } from "@/api/user";


export default function Subscription() {
    const [isLoading, setIsLoading] = useState(true)
    const userCtx = useContext(UserContext)
    const router = useRouter()

    const monthBody = {
        days: 30,
        amount: 980,
        subscriptionType: 'month' // now 1 months
    }

    const yearBody = {
        days: 90,
        amount: 1980,
        subscriptionType: 'year' // now 3 months
    }

    const continueHandler = () => {
        if(!userCtx.userData) {
          router.push('authorization/registration')
        } else {
          if(userCtx?.userData?.currentLesson !== 0 && userCtx?.userData?.currentChapter !== 'no') {
            router.push(`/lessons/lesson${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
          } else {
            router.push('/test/level')
          }
        }
      };

      const goToFreeLessonsHandler = async () => {
        setIsLoading(true)
        try {
          const response = await resetProgress()
          userCtx.setProgressData(null)
          router.push('/menu')   
      } catch (err) {       
          alert('Что-то пошло не так. Повторите попытку')
          setIsLoading(false)
      }
      }

    const subscribeHandler = async (plan) => {
        setIsLoading(true)
       try{
         const response = await subscribeMe(plan)
         if(response) {
            if(response?.data?.message === 'Already subscribed') {
                alert('У вас уже есть подписка!')
            }
            localStorage.setItem('paymentId', response?.data?.paymentId)
            localStorage.setItem('days', plan?.days)
            
            router.push(response?.data?.redirectUrl)
            // setIsLoading(false)
            // continueHandler()
         }

       } catch (error) {
        console.log(error)
         setIsLoading(false)
         alert('Произошла ошибка!')
       }
    }

    useEffect(() => {
       if(userCtx?.userData?.isSubscribed) {
        continueHandler()
        // setIsLoading(false)
       } else {
        setIsLoading(false)
       }
    }, [userCtx?.userData])

    if(isLoading) {
        return <Loader />
    } else {
        return (
            <ProtectPage>
                <Header variant='blue'/>
                <div className={styles.backButtonContainer}>
                  <Button variant="standardLargeContained" className={styles.backButton} onClick={goToFreeLessonsHandler}>Вернуться на пробные уроки</Button>
                </div>
                
                <div className={styles.container}>
                  <h2>Выберите подписку</h2>
                  <div className={styles.options}>
                     <OptionCard type='month' onClick={() => subscribeHandler(monthBody)}/>
                     <OptionCard type='year' onClick={() => subscribeHandler(yearBody)}/>
                  </div>
                </div>
            </ProtectPage>
            )
    }
}