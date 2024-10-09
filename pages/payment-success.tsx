import Loader from "@/modules/shared/Loader";
import { updateLessonsPackage } from "@/modules/study/shared/api/updateLessonsPackage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 1) click susbcribe on the suscribtion page
// 2) if no active subscription (add in express server and remove in previous) and will go to the testPAyment method in server
// 3) After getting payment data, save the signature to localstorage, and router.push to the url
// 4) After redirection back in case of success compare signatures in req.params and localstorage
// 5) If equal go to subscribe method.

export default function PaymentSuccess() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPaymentId = localStorage.getItem("paymentId");
      const lessons = localStorage.getItem("lessons");
      const previusUrl = localStorage.getItem("previousUrl");

      const saveSubscribedToDbHandler = async () => {
        const bodyData = {
          lessonsQuantity: lessons,
        };

        try {
          localStorage.setItem("paymentId", "");
          const data = await updateLessonsPackage(bodyData);
          if (data) {
            !previusUrl
              ? router.push("/with-teachers/main")
              : router.push(previusUrl);
          }
        } catch (err) {
          setError(true);
        }
      };

      if (savedPaymentId === router.query?.pg_payment_id) {
        saveSubscribedToDbHandler();
      } else {
        setError(true);
      }
    }
  }, [router.query?.pg_payment_id]);

  if (isLoading) {
    return <Loader small={true}></Loader>;
  }

  if (error) {
    return <div>Ошибка...</div>;
  }

  {
    return <div>Payment Success</div>;
  }
}
