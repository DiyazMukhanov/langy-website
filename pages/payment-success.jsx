import { saveSubscriptionInBd } from "@/modules/shared/api/saveSubscriptionInBd"
import Loader from "@/modules/shared/Loader"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// 1) click susbcribe on the suscribtion page
// 2) if no active subscription (add in express server and remove in previous) and will go to the testPAyment method in server
// 3) After getting payment data, save the signature to localstorage, and router.push to the url
// 4) After redirection back in case of success compare signatures in req.params and localstorage
// 5) If equal go to subscribe method. 

export default function PaymentSuccess() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPaymentId = localStorage.getItem('paymentId')
      const savedDays = localStorage.getItem('days')

      const saveSubscribedToDbHandler = async () => {
        const bodyData = {
          days: savedDays
        }

        try {
          localStorage.setItem('paymentId', '')
          const data = await saveSubscriptionInBd(bodyData)
          if (data) {
            router.push('/menu')
          }
        } catch (err) {
          setError(true)
        }
      }

      if (savedPaymentId === router.query?.pg_payment_id) {
        saveSubscribedToDbHandler()
      } else {
        setError(true)
      }
    }
  }, [router.query?.pg_payment_id])

  if (isLoading) {
    return <Loader></Loader>
  }

  if (error) {
    return <div>Ошибка...</div>
  }

  {
    return <div>Payment Success</div>
  }

}