import { useRouter } from "next/router"
import { useState } from "react"

// 1) click susbcribe on the suscribtion page
// 2) if no active subscription (add in express server and remove in previous) and will go to the testPAyment method in server
// 3) After getting payment data, save the signature to localstorage, and router.push to the url
// 4) After redirection back in case of success compare signatures in req.params and localstorage
// 5) If equal go to subscribe method. 

export default function PaymentSuccess() {
  const router = useRouter()
  const [paymentSign, setPaymentSign] = useState()
  const {pg_sig} = router.query
//   if(pg_sig) {
//     setPaymentSign(pg_sig)
//   }
    return <div>Payment Success</div>
}