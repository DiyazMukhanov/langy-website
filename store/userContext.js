import React, { useState } from "react"
import { useRouter } from "next/router"

export const UserContext = React.createContext({
    userData: {},
    setUserData: () => {},
    logOut: () => {}
})

const UserProvider = (props) => {
    const [userData, setUserData] = useState(null)
    const router = useRouter()

    const logOut = () => {
        localStorage.setItem('token', null)
        if(router.asPath === '/') {
            router.reload()
        }
        router.push('/')
    }
    
    const userContext = {
        userData,
        setUserData,
        logOut
    }

    return (
        <UserContext.Provider value={userContext}>
           {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider