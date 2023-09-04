const en = `There are four seasons in a year: spring, summer, fall (also known as autumn), and winter. Spring is characterized by warmer temperatures, melting snow, and the return of colorful flowers and plants. It is a time of renewal and growth, as the earth emerges from the cold of winter. Summer is the hottest season of the year, with long, sunny days and high temperatures. It is a time of outdoor activities and vacations, as people take advantage of the warm weather. Fall, or autumn, is a time of change, as the leaves on the trees turn vibrant shades of red, orange, and yellow before falling to the ground. The temperatures begin to cool, and people start to prepare for the colder months ahead. Winter is the coldest season of the year, with shorter days and lower temperatures. It is a time of snow and ice. Each season brings its own unique beauty and characteristics, and they all play an important role in the natural cycle of the earth. Whether you enjoy the warmth of summer or the snowy landscapes of winter, there is something special about each season of the year.`
const ru = `В году четыре времени года: весна, лето, осень (также известная как осенний период) и зима. Весна характеризуется повышением температуры, таянием снега и возвращением ярких цветов и растений. Это время обновления и роста, когда земля пробуждается от зимнего холода. Лето - самое жаркое время года, с долгими солнечными днями и высокими температурами. Это время активного отдыха и каникул, так как люди пользуются теплой погодой. Осень - это время перемен, когда листья на деревьях приобретают яркие оттенки красного, оранжевого и желтого, прежде чем упасть на землю. Температура начинает понижаться, и люди начинают готовиться к предстоящим холодным месяцам. Зима - самое холодное время года, с более короткими днями и более низкими температурами. Это время снега и льда, а также праздничных торжеств, таких как Рождество. Каждое время года привносит свою неповторимую красоту и особенности, и все они играют важную роль в естественном круговороте земли. Наслаждаетесь ли вы теплом лета или снежными пейзажами зимы, в каждом времени года есть что-то особенное.`

export const text = {
    en,
    ru
}
// complete
export const audioTasks = [
    {
        number: 1,
        title: "1. Which season is known for its warmer temperatures, melting snow, and the return of colorful flowers and plants?",
        answers: [
            {
                id: 1,
                answer: 'Summer',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Fall (autumn)',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'Spring',
                isCorrect: true
            }
        ]
    },
    {
        number: 2,
        title: "2. What happens to the leaves on trees during the fall (autumn) season?",
        answers: [
            {
                id: 1,
                answer: 'They turn vibrant shades of red, orange, and yellow',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'They bloom with colorful flowers and plants. ',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'They become covered in snow and ice.',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. What is a common activity during the summer season?',
        answers: [
            {
                id: 1,
                answer: 'Raking leaves and preparing for colder months',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Planting colorful flowers and plants',
                isCorrect: false
            },
            {
                id: 3,
                answer: "Engaging in outdoor activities and vacations",
                isCorrect: true
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'There', ru: 'Там' },
    { en: 'are', ru: 'есть' },
    { en: 'four', ru: 'четыре' },
    { en: 'seasons', ru: 'времени года' },
    { en: 'in', ru: 'в' },
    { en: 'a', ru: 'году' },
    { en: 'spring', ru: 'весна' },
    { en: 'summer', ru: 'лето' },
    { en: 'fall', ru: 'осень' },
    { en: 'also', ru: 'также' },
    { en: 'known', ru: 'известное' },
    { en: 'as', ru: 'как' },
    { en: 'autumn', ru: 'осень' },
    { en: 'and', ru: 'и' },
    { en: 'winter', ru: 'зима' },
    { en: 'Spring', ru: 'Весна' },
    { en: 'is', ru: 'является' },
    { en: 'characterized', ru: 'характеризуется' },
    { en: 'by', ru: 'предлог' },
    { en: 'warmer', ru: 'теплее' },
    { en: 'temperatures', ru: 'температурами' },
    { en: 'melting', ru: 'таянием' },
    { en: 'snow', ru: 'снега' },
    { en: 'the', ru: 'арткиль' },
    { en: 'return', ru: 'ярких' },
    { en: 'of', ru: 'цветов' },
    { en: 'colorful', ru: 'растений' },
    { en: 'flowers', ru: 'растений' },
    { en: 'plants', ru: 'растений' },
    { en: 'It', ru: 'Это' },
    { en: 'time', ru: 'время' },
    { en: 'renewal', ru: 'обновления' },
    { en: 'growth', ru: 'роста' },
    { en: 'earth', ru: 'земли' },
    { en: 'emerges', ru: 'появляется' },
    { en: 'from', ru: 'из' },
    { en: 'cold', ru: 'холодного' },
    { en: 'Summer', ru: 'Лето' },
    { en: 'hottest', ru: 'самым жарким' },
    { en: 'season', ru: 'временем года' },
    { en: 'with', ru: 'с' },
    { en: 'long', ru: 'долгими' },
    { en: 'sunny', ru: 'солнечными' },
    { en: 'days', ru: 'днями' },
    { en: 'high', ru: 'высокими' },
    { en: 'outdoor', ru: 'открытыми' },
    { en: 'activities', ru: 'активностями' },
    { en: 'vacations', ru: 'отпусками' },
    { en: 'people', ru: 'люди' },
    { en: 'take', ru: 'проводят' },
    { en: 'advantage', ru: 'преимущество' },
    { en: 'warm', ru: 'теплая' },
    { en: 'weather', ru: 'погода' },
    { en: 'Fall', ru: 'Осень' },
    { en: 'or', ru: 'или' },
    { en: 'change', ru: 'изменение' },
    { en: 'leaves', ru: 'листья' },
    { en: 'on', ru: 'на' },
    { en: 'trees', ru: 'деревьях' },
    { en: 'turn', ru: 'превращаются' },
    { en: 'vibrant', ru: 'яркие' },
    { en: 'shades', ru: 'оттенки' },
    { en: 'red', ru: 'красный' },
    { en: 'orange', ru: 'оранжевый' },
    { en: 'yellow', ru: 'желтый' },
    { en: 'before', ru: 'перед' },
    { en: 'falling', ru: 'падением' },
    { en: 'to', ru: 'на' },
    { en: 'ground', ru: 'землю' },
    { en: 'The', ru: 'Эти' },
    { en: 'begin', ru: 'начинаются' },
    { en: 'cool', ru: 'прохладными' },
    { en: 'start', ru: 'началом' },
    { en: 'prepare', ru: 'готовиться' },
    { en: 'for', ru: 'к' },
    { en: 'colder', ru: 'холодным' },
    { en: 'months', ru: 'месяцам' },
    { en: 'ahead', ru: 'впереди' },
    { en: 'Winter', ru: 'Зима' },
    { en: 'coldest', ru: 'самой холодной' },
    { en: 'shorter', ru: 'короткими' },
    { en: 'lower', ru: 'низкими' },
    { en: 'ice', ru: 'льдом' },
    { en: 'well', ru: 'а также' },
    { en: 'holiday', ru: 'праздничные' },
    { en: 'celebrations', ru: 'празднования' },
    { en: 'like', ru: 'как' },
    { en: 'Christmas', ru: 'Рождество' },
    { en: 'Each', ru: 'Каждая' },
    { en: 'brings', ru: 'приносит' },
    { en: 'its', ru: 'свои' },
    { en: 'own', ru: 'собственные' },
    { en: 'unique', ru: 'уникальные' },
    { en: 'beauty', ru: 'красоту' },
    { en: 'characteristics', ru: 'особенности' },
    { en: 'they', ru: 'они' },
    { en: 'all', ru: 'все' },
    { en: 'play', ru: 'играют' },
    { en: 'an', ru: 'важную' },
    { en: 'important', ru: 'важную' },
    { en: 'role', ru: 'роль' },
    { en: 'natural', ru: 'естественного' },
    { en: 'cycle', ru: 'цикла' },
    { en: 'Whether', ru: 'Будь то' },
    { en: 'you', ru: 'вы' },
    { en: 'enjoy', ru: 'наслаждаетесь' },
    { en: 'warmth', ru: 'теплом' },
    { en: 'snowy', ru: 'заснеженными' },
    { en: 'landscapes', ru: 'пейзажами' },
    { en: 'there', ru: 'есть' },
    { en: 'something', ru: 'что-то' },
    { en: 'special', ru: 'особенное' },
    { en: 'about', ru: 'в' },
    { en: 'each', ru: 'каждом' },
    { en: 'year', ru: 'год' },
     
];
