import { UserContext } from "@/store/userContext"
import { useContext, useEffect, useState } from "react"
import Loader from "../Loader"
import { getMe } from "../api/getMe"
import { setCurrentLessonData } from "../api/setCurrentLessonData"
import { useRouter } from "next/router"


export default function ProtectPage({ children, currentLesson, currentChapter, subscriptionIsNeeded, adminNeeded, levelChecked }) {
  const userCtx = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUserData = async () => {

      if (currentLesson && currentChapter) {
        const bodyData = {
          currentLesson: currentLesson,
          currentChapter: currentChapter
        }

        try {
          const userData = await setCurrentLessonData(bodyData)

          if (userData) {
            userCtx.setUserData(userData.data.data)

            if (subscriptionIsNeeded) {
              if (userData?.data?.data?.isSubscribed === false) {
                if (userData?.data?.data?.role === 'admin' || userData?.data?.data?.role === 'manager') {
                  setIsLoading(false)
                } else {
                  router.push('/subscription')
                }

              } else {
                setIsLoading(false)
              }
            } else {
              setIsLoading(false)
            }
          }
        } catch (error) {
          setIsLoading(false)
          router.push('/')
        }
      } else {
        try {
          const userData = await getMe()

          userCtx.setUserData(userData?.data?.data)

          if (adminNeeded) {

            if (userData?.data?.data?.role === 'admin' || userData?.data?.data?.role === 'manager') {

              setIsLoading(false)
            } else {
              router.push('/')
            }
          }

          if (levelChecked) {
            console.log(userData?.data?.data?.levelChecked)
            if (userData?.data?.data?.levelChecked === true) {
              if (userData?.data?.data?.currentLesson !== 0 && userData?.data?.data?.currentChapter !== 'no') {
                router.push(`/lessons/lesson${userData?.data?.data?.currentLesson}/${userData?.data?.data?.currentChapter}`)
                setIsLoading(false)
              } else {
                router.push('/lessons/lesson1/video')
                setIsLoading(false)
              }
            }
          }

          if (!adminNeeded) {
            setIsLoading(false)
          }

          // if(userData) {
          //     userCtx.setUserData(userData?.data?.data)
          //     setIsLoading(false)
          // }
        } catch (error) {
          console.error("Error fetching user data:", error);
          router.push('/authorization/login')
          setIsLoading(false)
        }
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