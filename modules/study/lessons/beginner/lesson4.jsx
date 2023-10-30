import BeginnerLessonLayout from "../../beginner/BeginnerLessonLayout";
import wordSrc_1 from '../../../../public/audio/lesson6/lesson_6_1.mp3'
import wordSrc_2 from '../../../../public/audio/lesson6/lesson_6_2.mp3'
import wordSrc_3 from '../../../../public/audio/lesson6/lesson_6_3.mp3'
import wordSrc_4 from '../../../../public/audio/lesson6/lesson_6_4.mp3'
import wordSrc_5 from '../../../../public/audio/lesson6/lesson_6_5.mp3'
import wordSrc_6 from '../../../../public/audio/lesson6/lesson_6_6.mp3'
import wordSrc_7 from '../../../../public/audio/lesson6/lesson_6_7.mp3'
import wordSrc_8 from '../../../../public/audio/lesson6/lesson_6_8.mp3'
import wordSrc_9 from '../../../../public/audio/lesson6/lesson_6_9.mp3'

export default function BeginnerLesson4() {
    const words_1 = [
        {
            enWord: 'Red',
            ruWord: 'Красный'
        },
        {
            enWord: 'Blue',
            ruWord: 'Синий'
        },
        {
            enWord: 'Green',
            ruWord: 'Зеленый'
        },
    ]

    const wordsToAsk_1 = [{
        enWord: 'Blue',
        ruWord: 'Синий'
    },
    {
        enWord: 'Green',
        ruWord: 'Зеленый'
    },
    {
        enWord: 'Red',
        ruWord: 'Красный'
    },]

    const words_2 = [
        {
            enWord: 'Apple',
            ruWord: 'Яблоко'
        },
        {
            enWord: 'Dog',
            ruWord: 'Собака'
        },
        {
            enWord: 'Sky',
            ruWord: 'Небо'
        },
    ]

    const wordsToAsk_2 = [{
        enWord: 'Apple',
        ruWord: 'Яблоко'
    },
    {
        enWord: 'Sky',
        ruWord: 'Небо'
    },
    {
        enWord: 'Dog',
        ruWord: 'Собака'
    },
    ]

    const words_3 = [
        {
            enWord: 'Big',
            ruWord: 'Большой'
        },
        {
            enWord: 'Car',
            ruWord: 'Машина'
        },
        {
            enWord: 'Small',
            ruWord: 'Маленький'
        },
    ]

    const wordsToAsk_3 = [{
        enWord: 'Small',
        ruWord: 'Маленький'
    },
    {
        enWord: 'Car',
        ruWord: 'Машина'
    },
    {
        enWord: 'Big',
        ruWord: 'Большой'
    },]

    return (
        <>
            <BeginnerLessonLayout
                lessonNumber={4}
                isVocabulary={true}
                words_1={words_1}
                words_2={words_2}
                words_3={words_3}
                wordsToAsk_1={wordsToAsk_1}
                wordsToAsk_2={wordsToAsk_2}
                wordsToAsk_3={wordsToAsk_3}
                nextUrl='/lessons/beginner/lesson5'
                wordSrc_1={wordSrc_1}
                wordSrc_2={wordSrc_2}
                wordSrc_3={wordSrc_3}
                wordSrc_4={wordSrc_4}
                wordSrc_5={wordSrc_5}
                wordSrc_6={wordSrc_6}
                wordSrc_7={wordSrc_7}
                wordSrc_8={wordSrc_8}
                wordSrc_9={wordSrc_9}
            />
        </>
    )
}
