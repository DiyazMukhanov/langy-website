import Header from "@/modules/shared/Header/index"
import ProtectPage from "@/modules/shared/ProtectPage/index"
import styles from './EverydayEnglishLayout.module.scss'
import { PropsWithChildren } from "react"
import EverydayEnglishNav from "../EverydayEnglishNav/index"
import EverydayEnglishNextButtonSection from "../EverydayEnglishNextButtonSection/index"

type Props = {
    lessonNumber: number
    chapter: string
}

export default function EveryDayEnglishLayout({ lessonNumber, children, chapter }: PropsWithChildren<Props>) {

    return <>
        <ProtectPage
            currentLesson={lessonNumber}
            currentChapter={chapter}
            subscriptionIsNeeded={false}
            adminNeeded={false}
            levelChecked={true}
        >
            <Header variant='white' isEasyEnglish={true} />
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.navContainer}>
                        <EverydayEnglishNav lessonNumber={lessonNumber} />
                    </div>
                    <div className={styles.mainSectionContainer}>
                        {children}
                    </div>
                </div>
                <EverydayEnglishNextButtonSection lessonNumber={lessonNumber} chapter={chapter} />
            </div>
        </ProtectPage>
    </>
}