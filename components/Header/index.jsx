import LogoBlue from '../../public/images/Logo-blue.svg'
import LogoBlueBottom from '../../public/images/Logo-blue-bottom.svg'
import Logo from '../../public/images/Logo.svg'
import styles from './Header.module.scss'
import Image from 'next/image'
import ButtonClose from '../../public/images/Button-close.svg'
import SandwichBlack from '../../public/images/Sandwich-black.svg'
import Modal from '../../layouts/landing/Modal'
import { useState, useContext } from 'react'
import Sidebar from '../Sidebar'
import { useRouter } from 'next/router'
import { UserContext } from '@/store/userContext'

export default function Header({ variant }) {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const router = useRouter()
    const userCtx = useContext(UserContext)
    const lessonsSummary = userCtx.getUpdatedLessonsSummary()

    const modalCloseHandler = () => {
        setIsModalOpened(false)
      }

      const modalOpenHandler = () => {
        setIsModalOpened(true)
      }

      const goToMainHandler = () => {
        router.push('/')
      }

      const logOutHandler = () => {
        userCtx.logOut()
      }

    if(variant === 'blue') {
        return (
            <>
            <div className={styles.blueContainer}>
            <Image
            priority
            src={Logo}
            width={60}
            className={styles.pointer}
            onClick={goToMainHandler}
            />
            <p onClick={logOutHandler}>Выйти</p>
            </div>

            <div className={styles.blueContainerMobile}>
              <div className={styles.logo}>
                <Image
                    priority
                    src={LogoBlue}
                    width={60}
                    onClick={goToMainHandler}
                />
                <Image
                    priority
                    src={LogoBlueBottom}
                    width={20}
                />
                </div>
                <Image
                    priority
                    src={ButtonClose}
                    width={20}
                    onClick={goToMainHandler}
                />
           
            </div>
            </>
            )
    }

    if(variant === 'white') {
        return (
            <>
              <div className={styles.whiteContainer}>
              <div className={styles.logo} onClick={goToMainHandler}>
                <Image
                    priority
                    src={LogoBlue}
                    width={60}
                />
                <Image
                    priority
                    src={LogoBlueBottom}
                    width={20}
                />
                </div>
                <div className={styles.profile}>
                   <p className={styles.exit} onClick={logOutHandler}>Выйти</p>
                   <div className={styles.circle}>
                      D
                   </div>
                </div>
                </div>

                <div className={styles.whiteContainerMobile}>
                <Modal isOpen={isModalOpened} onClose={modalCloseHandler}>
                <div className={styles.modalContainer}>
                  <div className={styles.modalLogos} onClick={() => router.push('/')}>
                    <Image
                    priority
                    src={LogoBlue}
                    height={38}
                    width={80}
                    />
                    <Image
                    priority
                    src={LogoBlueBottom}
                    />
                    </div>
                    <Image
                    priority
                    src={ButtonClose}
                    onClick={modalCloseHandler}
                    />
                  </div>
                  <div className={styles.sidebarContainer}>
                    <Sidebar lessonsSummary={lessonsSummary}/>
                  </div>
                </Modal>

                <Image
                    priority
                    src={SandwichBlack}
                    width={35}
                    onClick={modalOpenHandler}
                />
                 <div className={styles.modalLogos} onClick={() => router.push('/')}>
                    <Image
                    priority
                    src={LogoBlue}
                    height={38}
                    width={80}
                    />
                    <Image
                    priority
                    src={LogoBlueBottom}
                    />
                    </div>

                </div>
              
            </>
        )
    }
   
}