import Header from "@/modules/shared/Header/index"
import EasyEnglishNav from "../EasyEnglishNav/index"
import ProtectPage from "@/modules/shared/ProtectPage/index"
import styles from './EasyEnglishLayout.module.scss'
import EasyEnglishNextButtonSection from "../EasyEnglishNextButtonSection/index"
import { PropsWithChildren } from "react"

type Props = {
    lessonNumber: number
    chapter: string
}

export default function EasyEnglishLayout({ lessonNumber, children, chapter }: PropsWithChildren<Props>) {

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