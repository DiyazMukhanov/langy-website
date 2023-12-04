import Header from "@/modules/shared/Header/index"
import ProtectPage from "@/modules/shared/ProtectPage/index"
import styles from './EverydayEnglishLayout.module.scss'
import { PropsWithChildren, useEffect } from "react"
import EverydayEnglishNav from "../EverydayEnglishNav/index"
import EverydayEnglishNextButtonSection from "../EverydayEnglishNextButtonSection/index"
import { setCurrentLearningField } from "../../../shared/api/setCurrentLearningField"

type Props = {
    lessonNumber: number
    chapter: string
}

export default function EveryDayEnglishLayout({ lessonNumber, children, chapter }: PropsWithChildren<Props>) {
    useEffect(() => {
        const updateCurrentLearningField = async () => {
            const currentLearningField = await setCurrentLearningField({ currentLearningField: "everyday" })
        }
        updateCurrentLearningField()
    }, [])

    return <>
        <ProtectPage
            subscriptionIsNeeded={false}
            adminNeeded={false}
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