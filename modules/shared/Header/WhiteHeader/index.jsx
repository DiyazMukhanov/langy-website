import styles from '../Header.module.scss'
import LogoBlue from '../../../../public/images/Logo-blue.svg'
import LogoBlueBottom from '../../../../public/images/Logo-blue-bottom.svg'
import Image from 'next/image'
import SandwichBlack from '../../../../public/images/Sandwich-black.svg'
import Modal from '../../Modal/Modal'
import Sidebar from '../../Sidebar'
import ButtonClose from '../../../../public/images/Button-close.svg'
import { useRouter } from 'next/router'
import EasyEnglishSidebar from '@/modules/study/easyEnglish/EasyEnglishSidebar'

export default function WhiteHeader({
    modalCloseHandler,
    modalOpenHandler,
    goToMainHandler,
    logOutHandler,
    lessonsSummary,
    firstLetterOfName,
    isModalOpened,
    isEasyEnglish
}) {
    const router = useRouter()

    return (
        <>
            <div className={styles.whiteContainer}>
                <div className={styles.leftMenuContainer}>
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
                    <div className={styles.modalLogos} onClick={() => router.push('/menu')}>
                        <p className={styles.goToProfile}>Меню</p>
                    </div>
                </div>
                <div className={styles.profile}>
                    <p className={styles.exit} onClick={logOutHandler}>Выйти</p>
                    <div className={styles.circle} onClick={() => router.push('/profile')}>
                        {firstLetterOfName}
                    </div>
                </div>
            </div>

            <div className={styles.whiteContainerMobile}>
                <Modal isOpen={isModalOpened} onClose={modalCloseHandler}>
                    <div className={styles.modalContainer}>
                        <div className={styles.menuContainer}>
                            <div className={styles.modalLogos} onClick={() => router.push('/profile')}>
                                <p className={styles.goToProfile}>Личный кабинет</p>
                            </div>
                            <div className={styles.modalLogos} onClick={() => router.push('/menu')}>
                                <p className={styles.goToProfile}>Меню</p>
                            </div>
                        </div>
                        <Image
                            priority
                            src={ButtonClose}
                            onClick={modalCloseHandler}
                        />
                    </div>
                    <div className={styles.sidebarContainer}>
                        {!isEasyEnglish ? <Sidebar lessonsSummary={lessonsSummary} /> : <EasyEnglishSidebar />}
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