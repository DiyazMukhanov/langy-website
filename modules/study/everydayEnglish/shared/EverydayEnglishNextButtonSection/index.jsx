import { Button } from '@/ui-kit/Button'
import styles from './EverydayEnglishNextButtonSection.module.scss'
import { nextUrlGenerator } from '../navRoutes'
import { useRouter } from 'next/router'
import { updateEverydayProgress } from '../api/updateEverydayProgress'

export default function EverydayEnglishNextButtonSection({ lessonNumber, chapter }) {
    const router = useRouter()
    const nextUrl = nextUrlGenerator(lessonNumber, chapter)

    const goNextHandler = async () => {
        try {
            if (chapter === 'speaking') {
                const data = await updateEverydayProgress({
                    completedLesson: lessonNumber
                })

                router.push(nextUrl)
            }

            router.push(nextUrl)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <Button
                variant='newStandardNextContained'
                onClick={goNextHandler}
            >
                Далее
            </Button>
        </div>
    )
}