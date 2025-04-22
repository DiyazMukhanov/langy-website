import Header from "@/modules/shared/Header";
import ProtectPage from "@/modules/shared/ProtectPage";
import styles from './Subscription.module.scss'
import OptionCard from "./OptionCard";
import { subscribeMe } from "./shared/api/subscribeMe";
import { useContext, useEffect, useState } from "react";
import Loader from "@/modules/shared/Loader";
import { UserContext } from "@/store/userContext";
import { useRouter } from "next/router";
import { Button } from "@/ui-kit/Button";
import { resetProgress } from "../shared/api/resetProgress";


export default function Subscription() {
  const [isLoading, setIsLoading] = useState(true)
  const userCtx = useContext(UserContext)
  const router = useRouter()

  const monthBody = {
    days: 30,
    amount: 100,
    subscriptionType: 'month' // now 1 months
  }

  const yearBody = {
    days: 90,
    amount: 200,
    subscriptionType: 'year' // now 3 months
  }

  const continueHandler = () => {
    if (!userCtx.userData) {
      router.push('authorization/registration')
    } else {
      router.push('/menu')
    }
  };

  const handleResetProgress = async () => {

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
    try {
      const response = await subscribeMe(plan)
      if (response) {
        if (response?.data?.message === 'Already subscribed') {
          alert('У вас уже есть подписка!')
        }
        localStorage.setItem('paymentId', response?.data?.paymentId)
        localStorage.setItem('days', plan?.days)

        router.push(response?.data?.redirectUrl)
      }

    } catch (error) {
      console.log(error)
      setIsLoading(false)
      alert('Произошла ошибка!')
    }
  }

  useEffect(() => {
    if (userCtx?.userData?.isSubscribed) {
      continueHandler()
    } else {
      setIsLoading(false)
    }
  }, [userCtx?.userData])

  if (isLoading) {
    return <Loader />
  } else {
    return (
      <ProtectPage>
        <Header variant='blue' />
        <div className={styles.backButtonContainer}>
          <Button variant="standardLargeContained" className={styles.backButton} onClick={handleResetProgress}>Вернуться на пробные уроки</Button>
        </div>

        <div className={styles.container}>
          <h2>Выберите подписку</h2>
          <div className={styles.options}>
            <OptionCard type='month' onClick={() => subscribeHandler(monthBody)} />
            <OptionCard type='year' onClick={() => subscribeHandler(yearBody)} />
          </div>
        </div>
      </ProtectPage>
    )
  }
}