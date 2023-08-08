import { UserContext } from "@/store/userContext"
import { useContext, useEffect, useState } from "react"
import Loader from "../Loader"
import {getMe} from "../../api/user"


export default function ProtectPage({children}) {
   const userCtx = useContext(UserContext)
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
    const fetchUserData = async () => {
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