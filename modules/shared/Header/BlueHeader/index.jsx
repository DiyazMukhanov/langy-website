import styles from '../Header.module.scss'
import ButtonClose from '../../../../public/images/Button-close.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function BlueHeader({
    goToMainHandler,
    logOutHandler,
}) {
    const router = useRouter()

    return (
        <>
            <div className={styles.blueContainer}>
                <p onClick={() => router.push('/')}>На главную</p>
                <div className={styles.headerRight}>
                    <p onClick={() => router.push('/profile')}>Личный кабинет</p>
                    <p onClick={logOutHandler}>Выйти</p>
                </div>
            </div>

            <div className={styles.blueContainerMobile}>
                <div className={styles.logo}>
                    <p onClick={() => router.push('/')}>На главную</p>
                </div>
                <div className={styles.mobileHeaderRight}>
                    <p onClick={() => router.push('/profile')}>Личный кабинет</p>
                    <Image
                        priority
                        src={ButtonClose}
                        width={20}
                        onClick={goToMainHandler}
                    />
                </div>
            </div>
        </>
    )
}