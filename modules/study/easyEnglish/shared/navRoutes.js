const topics = ['Acquaintance', 'Coffee and tickets', 'In the hotel', 'Relatives', 'Breakfast', 'Time', 'Vacation', 'Shopping', 'Food shopping']

const ROUTE = '/lessons/easyEnglish'

const buildChildren = (lessonNumber) => {
    return [
        {
            title: 'Словарь',
            route: `${ROUTE}/${lessonNumber}/vocabulary`
        },
        {
            title: 'Карточки',
            route: `${ROUTE}/${lessonNumber}/card`
        },
        {
            title: 'Диалог',
            route: `${ROUTE}/${lessonNumber}/dialogue`
        },
        {
            title: 'Кирпичики',
            route: `${ROUTE}/${lessonNumber}/blocks`
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

