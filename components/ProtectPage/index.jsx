import { UserContext } from "@/store/userContext"
import { useContext, useEffect, useState } from "react"
import Loader from "../Loader"
import {getMe} from "../../api/user"
import { setCurrentLessonData } from "../../api/user"
import { useRouter } from "next/router"


export default function ProtectPage({children, currentLesson, currentChapter, subscriptionIsNeeded, adminNeeded}) {
   const userCtx = useContext(UserContext)
   const [isLoading, setIsLoading] = useState(true)
   const router = useRouter()
    
   useEffect(() => {
    const fetchUserData = async () => {       
                  if(currentLesson && currentChapter) {
                    const bodyData = {
                      currentLesson: currentLesson,
                      currentChapter: currentChapter
                    }
        
                  try {
                      const userData = await setCurrentLessonData(bodyData)
                      
                      if(userData?.data?.data?.role === 'admin' || userData?.data?.data?.role === 'manager') {
                          router.push('/admin/main')
                      }
                      if(userData) {
                          userCtx.setUserData(userData.data.data)

                          if(subscriptionIsNeeded) {
                            if(userData?.data?.data?.isSubscribed === false) {
                              router.push('/subscription')
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
                      if(userData?.data?.data?.role === 'admin' || userData?.data?.data?.role === 'manager') {
                        router.push('/admin/main')
                    }
                      userCtx.setUserData(userData?.data?.data)
                      
                      if(adminNeeded) {
                        console.log(userData?.data?.data?.role)
                        if(userData?.data?.data?.role === 'admin' || userData?.data?.data?.role === 'manager') {
                          
                          // setIsLoading(false)
                          setIsLoading(false)
                        } else {
                          router.push('/')
                        }
                      }

                      if(!adminNeeded) {
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