const topics = ['Acquaintance', 'Coffee and tickets']

const buildChildren = (lessonNumber) => {
    return [
        {
            title: 'Словарь',
            route: `/lessons/easyEnglish/${lessonNumber}/vocabulary`
        },
        {
            title: 'Карточки',
            route: `/lessons/easyEnglish/${lessonNumber}/card`
        },
        {
            title: 'Диалог',
            route: `/lessons/easyEnglish/${lessonNumber}/dialogue`
        },
        {
            title: 'Кирпичики',
            route: `/lessons/easyEnglish/${lessonNumber}/blocks`
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

