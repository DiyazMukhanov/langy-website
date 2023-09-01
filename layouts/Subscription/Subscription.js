import Header from "@/components/Header";
import ProtectPage from "@/components/ProtectPage";
import styles from './Subscription.module.scss'
import OptionCard from "./OptionCard";
import { subscribeMe } from "@/api/user";
import { useContext, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { UserContext } from "@/store/userContext";
import { useRouter } from "next/router";


export default function Subscription() {
    const [isLoading, setIsLoading] = useState(true)
    const userCtx = useContext(UserContext)
    const router = useRouter()
    console.log('thats it')

    const monthBody = {
        days: 90,
        amount: 4830,
        subscriptionType: 'month' // now 3 months
    }

    const yearBody = {
        days: 180,
        amount: 6970,
        subscriptionType: 'year' // now 6 months
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

    const subscribeHandler = async (plan) => {
        setIsLoading(true)
       try{
         const response = await subscribeMe(plan)
         if(response) {
            if(response?.data?.message === 'Already subscribed') {
                alert('У вас уже есть подписка!')
            }
            console.log(response?.data)
            localStorage.setItem('paymentId', response?.data?.paymentId)
            localStorage.setItem('days', plan?.days)
            // console.log('sign from server', response?.data?.paymentSign)
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