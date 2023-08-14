import Header from "@/components/Header"
import styles from './/Profile.module.scss'
import SubscriptionCard from "./SubscriptionCard"
import ProtectPage from "@/components/ProtectPage"
import { UserContext } from "@/store/userContext"
import { useContext } from "react"
import { useRouter } from "next/router"

export default function Profile() {
    const userCtx = useContext(UserContext)
    const router = useRouter()

    const capitalizeFirst = (str) => {
        if(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }

    return (
      <ProtectPage>
        <Header variant='blue'/>
        <div className={styles.profileContainer}>
            <div className={styles.leftSide}>
                <p className={styles.name}>{userCtx?.userData?.name}</p>
                <h2>Мой уровень</h2>
                <div className={styles.level}>{capitalizeFirst(userCtx?.userData?.level)}</div>
                <p className={styles.service} onClick={() => router.push('/service')}>Написать в службу поддержки</p>
            </div>
            <SubscriptionCard userData={userCtx?.userData}/>
        </div>
      </ProtectPage>
    )
}