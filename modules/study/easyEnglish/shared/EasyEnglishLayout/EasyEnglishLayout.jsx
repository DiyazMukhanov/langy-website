import Header from "@/modules/shared/Header/index.jsx"
import EasyEnglishNav from "../EasyEnglishNav/index.jsx"
import ProtectPage from "@/modules/shared/ProtectPage/index.jsx"
import styles from './EasyEnglishLayout.module.scss'

export default function EasyEnglishLayout({ lessonNumber, children }) {

    return <>
        <ProtectPage>
            <Header variant='white' isEasyEnglish={true} />
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <EasyEnglishNav lessonNumber={lessonNumber} />
                </div>
                {children}
            </div>
        </ProtectPage>
    </>
}