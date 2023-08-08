import { UserContext } from "@/store/userContext"
import { useContext, useEffect, useState } from "react"
import Loader from "../Loader"
import {getMe} from "../../api/user"
import { setCurrentLessonData } from "../../api/user"


export default function ProtectPage({children, currentLesson, currentChapter}) {
   const userCtx = useContext(UserContext)
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
    const fetchUserData = async () => {
      //If current lesson and chapter was passed to the component, it will be added to db 
        if(currentLesson && currentChapter) {
            try {
                const userData = await setCurrentLessonData(currentLesson, currentChapter)
                if(userData) {
                    console.log(userData)
                    userCtx.setUserData(userData.data.data)
                    setIsLoading(false)
                  }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setIsLoading(false)
              }      
        }

        try {
            const userData = await getMe()
            if(userData) {
                console.log(userData)
                userCtx.setUserData(userData.data.data)
                setIsLoading(false)
              }
        } catch (error) {
            console.error("Error fetching user data:", error);
            setIsLoading(false)
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