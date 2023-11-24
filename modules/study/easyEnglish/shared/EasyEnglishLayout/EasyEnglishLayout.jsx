import Header from "@/modules/shared/Header/index.jsx"
import EasyEnglishNav from "../EasyEnglishNav/index.jsx"
import ProtectPage from "@/modules/shared/ProtectPage/index.jsx"
import styles from './EasyEnglishLayout.module.scss'
import EasyEnglishNextButtonSection from "../EasyEnglishNextButtonSection/index.jsx"

export default function EasyEnglishLayout({ lessonNumber, children, chapter }) {

    return <>
        <ProtectPage>
            <Header variant='white' isEasyEnglish={true} />
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <EasyEnglishNav lessonNumber={lessonNumber} />
                </div>
                <div className={styles.mainSectionContainer}>
                    {children}
                    <EasyEnglishNextButtonSection lessonNumber={lessonNumber} chapter={chapter} />
                </div>
            </div>
        </ProtectPage>
    </>
}