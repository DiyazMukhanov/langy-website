import Header from "@/modules/shared/Header/index"
import ProtectPage from "@/modules/shared/ProtectPage/index"
import styles from './EverydayEnglishLayout.module.scss'
import EasyEnglishNextButtonSection from "../EverydayEnglishNextButtonSection/index"
import { PropsWithChildren } from "react"
import EverydayEnglishNav from "../EverydayEnglishNav/index"

type Props = {
    lessonNumber: number
    chapter: string
}

export default function EveryDayEnglishLayout({ lessonNumber, children, chapter }: PropsWithChildren<Props>) {

    return <>
        <ProtectPage>
            <Header variant='white' isEasyEnglish={true} />
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <EverydayEnglishNav lessonNumber={lessonNumber} />
                </div>
                <div className={styles.mainSectionContainer}>
                    {children}
                    <EasyEnglishNextButtonSection lessonNumber={lessonNumber} chapter={chapter} />
                </div>
            </div>
        </ProtectPage>
    </>
}