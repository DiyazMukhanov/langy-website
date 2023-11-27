import EverydayEnglishContainer from '../shared/EverydayEnglishContainer'
import Card from './Card'
import styles from './CardsLessonLayout.module.scss'
import { Phrase } from '../PhrasesLessonLayout/types/phrase'
import { useState } from 'react'
import UpdateButton from '@/modules/shared/UpdateButton'

type Props = {
    data: Phrase[]
}

export default function CardsLessonLayout({ data }: Props) {

    return (
        <EverydayEnglishContainer className={styles.internalLayout}>
            <div className={styles.cards}>
                {data.map(phrase => <Card />)}
            </div>

            <UpdateButton />
        </EverydayEnglishContainer>
    )
}