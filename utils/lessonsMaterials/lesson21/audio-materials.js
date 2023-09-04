const en = `New York City is a metropolis that has long been a center of culture, commerce, and innovation. Located in the northeastern United States, it is the largest city in the country and home to more than 8 million people. There are many things that make New York City unique. Its iconic skyline, with towering skyscrapers like the Empire State Building and the One World Trade Center, is recognized around the world. The city is also home to some of the most famous landmarks and cultural institutions in the world, such as Central Park, the Metropolitan Museum of Art, and Broadway theater district. New York City is known for its exciting nightlife and diverse cuisine, with restaurants and cafes serving cuisine from every corner of the globe. The city is also home to a thriving arts community, with galleries and performance spaces scattered throughout the five boroughs. Although the city has many charms, living in New York City can be challenging. The cost of living is high, and housing is often in short supply. The city is also known for its fast pace and crowded streets, which can be overwhelming for some people. Despite these challenges, many people are drawn to New York City for its energy and opportunities. Whether you are interested in pursuing a career in the arts, finance, or any other field, there are endless possibilities in the city that never sleeps.`
const ru = `Нью-Йорк - мегаполис, который долгое время был центром культуры, торговли и инноваций. Расположенный на северо-востоке Соединенных Штатов, это крупнейший город страны, в котором проживает более 8 миллионов человек. Есть много вещей, которые делают Нью-Йорк уникальным. Его культовый силуэт с высокими небоскребами, такими как Эмпайр Стейт Билдинг и Единый всемирный торговый центр, известен во всем мире. Город также является домом для некоторых из самых известных достопримечательностей и культурных учреждений в мире, таких как Центральный парк, Музей искусств Метрополитен и театральный район Бродвея. Нью-Йорк известен своей захватывающей ночной жизнью и разнообразной кухней, в ресторанах и кафе подают блюда со всех уголков земного шара. Город также является домом для процветающего художественного сообщества, с галереями и концертными площадками, разбросанными по всем пяти районам. Несмотря на то, что в этом городе много очарования, жить в Нью-Йорке может быть непросто. Стоимость жизни высока, а жилья часто не хватает. Город также известен своим быстрым темпом и многолюдными улицами, которые могут быть непосильными для некоторых людей. Несмотря на эти трудности, многих людей привлекает Нью-Йорк своей энергией и возможностями. Независимо от того, заинтересованы ли вы в продолжении карьеры в искусстве, финансах или любой другой области, в городе, который никогда не спит, есть бесконечные возможности.`

export const text = {
    en,
    ru
}
// complete
export const audioTasks = [
    {
        number: 1,
        title: "1. What is one of the famous skyscrapers in New York City's skyline?",
        answers: [
            {
                id: 1,
                answer: 'Big Ben',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Eiffel Tower',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'Empire State Building',
                isCorrect: true
            }
        ]
    },
    {
        number: 2,
        title: "2. Which famous park is mentioned as one of New York City's landmarks?",
        answers: [
            {
                id: 1,
                answer: 'Hyde Park',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Central Park',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'Griffith Park',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. What is a challenge of living in New York City mentioned in the text?',
        answers: [
            {
                id: 1,
                answer: 'Low energy and opportunities',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Affordable housing',
                isCorrect: false
            },
            {
                id: 3,
                answer: "High cost of living",
                isCorrect: true
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'New', ru: 'Нью' },
    { en: 'York', ru: 'Йорк' },
    { en: 'City', ru: 'Город' },
    { en: 'is', ru: 'является' },
    { en: 'a', ru: 'это' },
    { en: 'metropolis', ru: 'метрополия' },
    { en: 'that', ru: 'который' },
    { en: 'has', ru: 'имеет' },
    { en: 'long', ru: 'долгую' },
    { en: 'been', ru: 'был' },
    { en: 'center', ru: 'центр' },
    { en: 'of', ru: 'культуры' },
    { en: 'culture', ru: 'и' },
    { en: 'commerce', ru: 'торговли' },
    { en: 'and', ru: 'и' },
    { en: 'innovation', ru: 'инноваций' },
    { en: 'Located', ru: 'Расположенный' },
    { en: 'in', ru: 'в' },
    { en: 'the', ru: 'северо-восточный' },
    { en: 'northeastern', ru: 'Соединенные' },
    { en: 'United', ru: 'Штаты' },
    { en: 'States', ru: 'Америки' },
    { en: 'it', ru: 'это' },
    { en: 'largest', ru: 'крупнейший' },
    { en: 'city', ru: 'город' },
    { en: 'country', ru: 'страны' },
    { en: 'home', ru: 'дом' },
    { en: 'to', ru: 'для' },
    { en: 'more', ru: 'более' },
    { en: 'than', ru: 'чем' },
    { en: '8', ru: '8' },
    { en: 'million', ru: 'миллионов' },
    { en: 'people', ru: 'людей' },
    { en: 'There', ru: 'Там' },
    { en: 'are', ru: 'есть' },
    { en: 'many', ru: 'много' },
    { en: 'things', ru: 'вещей' },
    { en: 'make', ru: 'делают' },
    { en: 'unique', ru: 'уникальным' },
    { en: 'Its', ru: 'Его' },
    { en: 'iconic', ru: 'знаковый' },
    { en: 'skyline', ru: 'горизонт' },
    { en: 'with', ru: 'с' },
    { en: 'towering', ru: 'высокими' },
    { en: 'skyscrapers', ru: 'небоскребами' },
    { en: 'like', ru: 'подобно' },
    { en: 'Empire', ru: 'Империя' },
    { en: 'State', ru: 'Государство' },
    { en: 'Building', ru: 'Здание' },
    { en: 'One', ru: 'Один' },
    { en: 'World', ru: 'Мир' },
    { en: 'Trade', ru: 'Торговый' },
    { en: 'Center', ru: 'Центр' },
    { en: 'recognized', ru: 'признанный' },
    { en: 'around', ru: 'вокруг' },
    { en: 'world', ru: 'мире' },
    { en: 'The', ru: 'Этот' },
    { en: 'also', ru: 'также' },
    { en: 'some', ru: 'некоторые' },
    { en: 'most', ru: 'самые' },
    { en: 'famous', ru: 'известные' },
    { en: 'landmarks', ru: 'ориентиры' },
    { en: 'cultural', ru: 'культурные' },
    { en: 'institutions', ru: 'учреждения' },
    { en: 'such', ru: 'как' },
    { en: 'as', ru: 'как' },
    { en: 'Central', ru: 'Центральный' },
    { en: 'Park', ru: 'Парк' },
    { en: 'Metropolitan', ru: 'Метрополитен' },
    { en: 'Museum', ru: 'Музей' },
    { en: 'Art', ru: 'Искусства' },
    { en: 'Broadway', ru: 'Бродвей' },
    { en: 'theater', ru: 'театр' },
    { en: 'district', ru: 'район' },
    { en: 'known', ru: 'известный' },
    { en: 'for', ru: 'за' },
    { en: 'its', ru: 'его' },
    { en: 'exciting', ru: 'захватывающая' },
    { en: 'nightlife', ru: 'ночная жизнь' },
    { en: 'diverse', ru: 'разнообразная' },
    { en: 'cuisine', ru: 'кухня' },
    { en: 'restaurants', ru: 'рестораны' },
    { en: 'cafes', ru: 'кафе' },
    { en: 'serving', ru: 'подающие' },
    { en: 'from', ru: 'из' },
    { en: 'every', ru: 'каждого' },
    { en: 'corner', ru: 'уголка' },
    { en: 'globe', ru: 'земного шара' },
    { en: 'thriving', ru: 'процветающее' },
    { en: 'arts', ru: 'искусств' },
    { en: 'community', ru: 'сообщество' },
    { en: 'galleries', ru: 'галереи' },
    { en: 'performance', ru: 'представления' },
    { en: 'spaces', ru: 'пространства' },
    { en: 'scattered', ru: 'разбросанные' },
    { en: 'throughout', ru: 'по всему' },
    { en: 'five', ru: 'пять' },
    { en: 'boroughs', ru: 'округов' },
    { en: 'Although', ru: 'Хотя' },
    { en: 'charms', ru: 'очарование' },
    { en: 'living', ru: 'жизни' },
    { en: 'can', ru: 'может' },
    { en: 'be', ru: 'быть' },
    { en: 'challenging', ru: 'трудным' },
    { en: 'cost', ru: 'стоимость' },
    { en: 'high', ru: 'высокой' },
    { en: 'housing', ru: 'жилье' },
    { en: 'often', ru: 'часто' },
    { en: 'short', ru: 'краткий' },
    { en: 'supply', ru: 'поставка' },
    { en: 'fast', ru: 'быстрый' },
    { en: 'pace', ru: 'темп' },
    { en: 'crowded', ru: 'переполненные' },
    { en: 'streets', ru: 'улицы' },
    { en: 'which', ru: 'которые' },
    { en: 'overwhelming', ru: 'подавляющим' },
    { en: 'Despite', ru: 'Несмотря' },
    { en: 'these', ru: 'эти' },
    { en: 'challenges', ru: 'трудности' },
    { en: 'drawn', ru: 'привлекает' },
    { en: 'energy', ru: 'энергия' },
    { en: 'opportunities', ru: 'возможности' },
    { en: 'Whether', ru: 'Будь то' },
    { en: 'you', ru: 'вы' },
    { en: 'interested', ru: 'интересуетесь' },
    { en: 'pursuing', ru: 'преследование' },
    { en: 'career', ru: 'карьера' },
    { en: 'finance', ru: 'финансы' },
    { en: 'or', ru: 'или' },
    { en: 'any', ru: 'любая' },
    { en: 'other', ru: 'другая' },
    { en: 'field', ru: 'область' },
    { en: 'there', ru: 'там' },
    { en: 'endless', ru: 'бесконечные' },
    { en: 'possibilities', ru: 'возможности' },
    { en: 'never', ru: 'никогда' },
    { en: 'sleeps', ru: 'не спит' },
];
