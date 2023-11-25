const topics = ['Acquaintance', 'Coffee and tickets', 'In the hotel', 'Relatives', 'Breakfast', 'Time', 'Vacation', 'Shopping', 'Food shopping', 'Acquaintance', 'Coffee and tickets', 'In the hotel', 'Relatives', 'Breakfast', 'Time', 'Vacation', 'Shopping', 'Food shopping']

const ROUTE = '/lessons/easyEnglish'

export const CHAPTER_1 = 'phrases'
export const CHAPTER_2 = 'cards'
export const CHAPTER_3 = 'dialogue'
export const CHAPTER_4 = 'blocks'


const buildChildren = (lessonNumber: number) => {
    return [
        {
            title: 'Словарь',
            route: `${ROUTE}/${lessonNumber}/${CHAPTER_1}`
        },
        {
            title: 'Карточки',
            route: `${ROUTE}/${lessonNumber}/${CHAPTER_2}`
        },
        {
            title: 'Диалог',
            route: `${ROUTE}/${lessonNumber}/${CHAPTER_3}`
        },
        {
            title: 'Кирпичики',
            route: `${ROUTE}/${lessonNumber}/${CHAPTER_4}`
        },
    ]
}

export const setNavRoutes = () => {
    return topics.map((topic, index) => {
        return {
            title: topic,
            id: index + 1,
            children: buildChildren(index + 1)
        }
    })
}

export const nextUrlGenerator = (lessonNumber: number, chapter: string) => {
    const nextChapters = {
        phrases: CHAPTER_2,
        cards: CHAPTER_3,
        dialogue: CHAPTER_4,
        blocks: CHAPTER_1
    }

    const nextLessonNumberForLastChapter = lessonNumber + 1

    let nextUrl

    if (chapter === CHAPTER_4) {
        lessonNumber = nextLessonNumberForLastChapter

        if (lessonNumber === topics.length) {
            lessonNumber = 1
        }
    }

    nextUrl = `${ROUTE}/${lessonNumber}/${nextChapters[chapter]}`

    return nextUrl
}



