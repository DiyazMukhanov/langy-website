import BeginnerLessonLayout from "@/layouts/Lessons/BeginnerLessonLayout";
import wordSrc_1 from '../../public/audio/lesson3/lesson_3_1.mp3'
import wordSrc_2 from '../../public/audio/lesson3/lesson_3_2.mp3'
import wordSrc_3 from '../../public/audio/lesson3/lesson_3_3.mp3'
import wordSrc_4 from '../../public/audio/lesson3/lesson_3_4.mp3'
import wordSrc_5 from '../../public/audio/lesson3/lesson_3_5.mp3'
import wordSrc_6 from '../../public/audio/lesson3/lesson_3_6.mp3'
import wordSrc_7 from '../../public/audio/lesson3/lesson_3_7.mp3'
import wordSrc_8 from '../../public/audio/lesson3/lesson_3_8.mp3'
import wordSrc_9 from '../../public/audio/lesson3/lesson_3_9.mp3'

export default function BeginnerLesson1() {
    const words_1 = [
        {
            enWord: 'Hello',
            ruWord: 'Привет'
        },
        {
            enWord: 'Name',
            ruWord: 'Имя'
        },
        {
            enWord: 'Goodbye',
            ruWord: 'Пока'
        },
    ]

    const wordsToAsk_1 = [{
        enWord: 'Name',
        ruWord: 'Имя'
    },
    {
        enWord: 'Hello',
        ruWord: 'Привет'
    },
    {
        enWord: 'Goodbye',
        ruWord: 'Пока'
    },]

    const words_2 = [
        {
            enWord: 'Nice',
            ruWord: 'Приятный'
        },
        {
            enWord: 'Day',
            ruWord: 'День'
        },
        {
            enWord: 'She',
            ruWord: 'Она'
        },
    ]

    const wordsToAsk_2 = [{
        enWord: 'Day',
        ruWord: 'День'
    },
    {
        enWord: 'She',
        ruWord: 'Она'
    },
    {
        enWord: 'Nice',
        ruWord: 'Приятный'
    },]

    const words_3 = [
        {
            enWord: 'Friend',
            ruWord: 'Друг'
        },
        {
            enWord: 'He',
            ruWord: 'Он'
        },
        {
            enWord: 'Dog',
            ruWord: 'Собака'
        },
    ]

    const wordsToAsk_3 = [{
        enWord: 'Dog',
        ruWord: 'Собака'
    },
    {
        enWord: 'He',
        ruWord: 'Он'
    },
    {
        enWord: 'Friend',
        ruWord: 'Друг'
    },]

    return (
        <>
            <BeginnerLessonLayout
                lessonNumber={1}
                isVocabulary={true}
                words_1={words_1}
                words_2={words_2}
                words_3={words_3}
                wordsToAsk_1={wordsToAsk_1}
                wordsToAsk_2={wordsToAsk_2}
                wordsToAsk_3={wordsToAsk_3}
                nextUrl='/lessons/beginner/lesson2'
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