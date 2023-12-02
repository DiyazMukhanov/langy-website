import EverydayEnglishContainer from '../shared/EverydayEnglishContainer'
import Card from './Card'
import styles from './CardsLessonLayout.module.scss'
import { Phrase } from '../PhrasesLessonLayout/types/phrase'
import { useState } from 'react'
import UpdateButton from '@/modules/shared/UpdateButton'
import { useIterate } from '../../shared/hooks/useIterate'

type Props = {
    data: Phrase[]
}

export default function CardsLessonLayout({ data }: Props) {
    const { iteration, updateIteration } = useIterate(data)

    const cards = data.filter(item => item.iteration === iteration)

    return (
        <EverydayEnglishContainer className={styles.internalLayout}>
            <div className={styles.cards}>
                {cards.map(phrase => <Card phrase={phrase} key={phrase.id} />)}
            </div>

            <UpdateButton onClick={updateIteration} />
        </EverydayEnglishContainer>
    )
}