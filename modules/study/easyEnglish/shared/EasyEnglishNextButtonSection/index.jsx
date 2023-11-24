import { Button } from '@/ui-kit/Button'
import styles from './EasyEnglishNextButtonSection.module.scss'
import { nextUrlGenerator } from '../navRoutes'
import { useRouter } from 'next/router'

export default function EasyEnglishNextButtonSection({ lessonNumber, chapter }) {
    const router = useRouter()
    const nextUrl = nextUrlGenerator(lessonNumber, chapter)

    return (
        <div className={styles.container}>
            <Button
                variant='newStandardNextContained'
                onClick={() => router.push(nextUrl)}
            >
                Далее
            </Button>
        </div>
    )
}