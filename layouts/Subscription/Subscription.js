import Header from "@/components/Header";
import ProtectPage from "@/components/ProtectPage";
import styles from './Subscription.module.scss'
import OptionCard from "./OptionCard";
import { subscribeMe } from "@/api/user";
import { useContext, useState } from "react";
import Loader from "@/components/Loader";
import { UserContext } from "@/store/userContext";
import { useRouter } from "next/router";


export default function Subscription() {
    const [isLoading, setIsLoading] = useState(false)
    const userCtx = useContext(UserContext)
    const router = useRouter()

    const monthBody = {
        days: 30,
        subscriptionType: 'month'
    }

    const yearBody = {
        days: 365,
        subscriptionType: 'year'
    }

    const continueHandler = () => {
        if(!userCtx.userData) {
          router.push('authorization/registration')
        } else {
          if(userCtx?.userData?.currentLesson !== 0 && userCtx?.userData?.currentChapter !== 'no') {
            router.push(`/lessons/${userCtx.userData.level}/lesson${userCtx?.userData?.currentLesson}/${userCtx?.userData?.currentChapter}`)
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
            setIsLoading(false)
            continueHandler()
         }

       } catch (error) {
         setIsLoading(false)
         console.log(error)
         alert('Произошла ошибка!')
       }
    }

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