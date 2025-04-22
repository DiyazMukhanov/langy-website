import { UserContext } from "@/store/userContext"
import { useContext, useEffect, useState } from "react"
import Loader from "../Loader"
import { getMe } from "../api/getMe"
import { useRouter } from "next/router"


export default function ProtectPage({ children, subscriptionIsNeeded, adminNeeded }) {
  const userCtx = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    setIsLoading(true)
    const fetchUserData = async () => {
      try {
        const userData = await getMe()
        userCtx.setUserData(userData.data.data)

        // 1) Проверяем наличие прав админа, если для данного роута нужен админ
        if (adminNeeded) {
          if (userData?.data?.data?.role === 'admin' || userData?.data?.data?.role === 'manager') {
            setIsLoading(false)
          } else {
            router.push('/')
          }
        }

        // 2) Проверяем наличие подписки
        if (subscriptionIsNeeded) {
          if (userData?.data?.data?.isSubscribed === false) {
            router.push('/subscription')
          } else {
            setIsLoading(false)
          }
        }

        if (!adminNeeded && !subscriptionIsNeeded) {
          setIsLoading(false)
        }

      } catch (err) {
        console.log(err)
        router.push('/')
      }
    }

    fetchUserData()
  }, [])

  return (
    <>
      {isLoading ? (<Loader />) : children}
    </>
  )
}