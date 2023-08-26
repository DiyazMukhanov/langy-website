const en = `In my free time, I enjoy a variety of activities. On the weekends, I often spend time with my friends, either by going to the mall or out to eat. I also enjoy playing sports, such as soccer or basketball, and participating in outdoor activities, such as hiking or going to the beach. In addition to spending time with friends and being active, I also enjoy reading and watching movies or TV shows. I usually reserve this activity for when I have a little more free time, such as on a rainy day or after finishing all of my homework. Another activity that I enjoy doing in my free time is volunteering. I find it fulfilling to give back to my community and help those in need. I have participated in various volunteering events, such as cleaning up a local park or helping out at a food bank. Overall, I try to balance my free time with a mix of social activities, physical activity, and personal interests. By doing this, I can relax and enjoy my free time, while also staying active and engaged in my community.`
const ru = `В свободное время я с удовольствием занимаюсь различными видами деятельности. По выходным я часто провожу время со своими друзьями, либо отправляясь в торговый центр, либо куда-нибудь поесть. Мне также нравится заниматься спортом, таким как футбол или баскетбол, и участвовать в мероприятиях на свежем воздухе, таких как пешие прогулки или походы на пляж. Помимо того, что я провожу время с друзьями и веду активный образ жизни, мне также нравится читать и смотреть фильмы или телешоу. Обычно я приберегаю это занятие на тот случай, когда у меня будет немного больше свободного времени, например, в дождливый день или после выполнения всей домашней работы. Еще одно занятие, которым мне нравится заниматься в свободное время, - это волонтерство. Я нахожу удовольствие в том, чтобы отдавать что-то своему сообществу и помогать тем, кто в этом нуждается. Я участвовала в различных волонтерских мероприятиях, таких как уборка местного парка или помощь в продовольственном банке. В целом, я стараюсь сочетать свое свободное время с общественной деятельностью, физической активностью и личными интересами. Делая это, я могу расслабиться и наслаждаться своим свободным временем, оставаясь при этом активным и вовлеченным в свое сообщество.`

export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. What do I like to do on my free time?',
        answers: [
            {
                id: 1,
                answer: 'going to the beach',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'running around',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'looking to the sky at night',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: "2. What do we do with friends?",
        answers: [
            {
                id: 1,
                answer: 'painting',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'playing video games',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'playing football',
                isCorrect: true
            }
        ]
    },
    {
        number: 3,
        title: '3. My volunteer events are:  ',
        answers: [
            {
                id: 1,
                answer: 'cleaning the pool',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'cleaning the park',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'eating in the food bank',
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'In', ru: 'В' },
    { en: 'my', ru: 'моём' },
    { en: 'free', ru: 'свободное' },
    { en: 'time', ru: 'время' },
    { en: 'I', ru: 'я' },
    { en: 'enjoy', ru: 'наслаждаюсь' },
    { en: 'a', ru: 'разнообразием' },
    { en: 'variety', ru: 'активностей' },
    { en: 'of', ru: 'из' },
    { en: 'activities', ru: 'деятельности' },
    { en: 'On', ru: 'В' },
    { en: 'the', ru: 'в' },
    { en: 'weekends', ru: 'выходные' },
    { en: 'often', ru: 'часто' },
    { en: 'spend', ru: 'провожу' },
    { en: 'with', ru: 'с' },
    { en: 'friends', ru: 'друзьями' },
    { en: 'either', ru: 'либо' },
    { en: 'by', ru: 'путём' },
    { en: 'going', ru: 'похода' },
    { en: 'to', ru: 'в' },
    { en: 'mall', ru: 'торговый центр' },
    { en: 'or', ru: 'или' },
    { en: 'out', ru: 'на улицу' },
    { en: 'eat', ru: 'поедание' },
    { en: 'also', ru: 'также' },
    { en: 'playing', ru: 'играя' },
    { en: 'sports', ru: 'спорт' },
    { en: 'such', ru: 'как' },
    { en: 'as', ru: 'такие как' },
    { en: 'soccer', ru: 'футбол' },
    { en: 'basketball', ru: 'баскетбол' },
    { en: 'and', ru: 'и' },
    { en: 'participating', ru: 'участвуя' },
    { en: 'in', ru: 'в' },
    { en: 'outdoor', ru: 'открытом' },
    { en: 'hiking', ru: 'пеший туризм' },
    { en: 'beach', ru: 'пляж' },
    { en: 'addition', ru: 'дополнение' },
    { en: 'spending', ru: 'проведение' },
    { en: 'being', ru: 'будучи' },
    { en: 'active', ru: 'активным' },
    { en: 'reading', ru: 'чтение' },
    { en: 'watching', ru: 'просмотр' },
    { en: 'movies', ru: 'фильмов' },
    { en: 'TV', ru: 'телевизор' },
    { en: 'shows', ru: 'шоу' },
    { en: 'usually', ru: 'обычно' },
    { en: 'reserve', ru: 'отводим' },
    { en: 'this', ru: 'эту' },
    { en: 'activity', ru: 'активность' },
    { en: 'for', ru: 'для' },
  { en: 'when', ru: 'когда' },
  { en: 'have', ru: 'имеем' },
  { en: 'little', ru: 'немного' },
  { en: 'more', ru: 'больше' },
  { en: 'on', ru: 'в' },
  { en: 'rainy', ru: 'дождливый' },
  { en: 'day', ru: 'день' },
  { en: 'after', ru: 'после' },
  { en: 'finishing', ru: 'завершения' },
  { en: 'all', ru: 'всю' },
  { en: 'homework', ru: 'домашнюю работу' },
  { en: 'Another', ru: 'Ещё одна' },
  { en: 'that', ru: 'которое' },
  { en: 'doing', ru: 'делание' },
  { en: 'is', ru: 'есть' },
  { en: 'volunteering', ru: 'волонтерство' },
  { en: 'find', ru: 'находим' },
  { en: 'it', ru: 'это' },
  { en: 'fulfilling', ru: 'осуществление' },
  { en: 'give', ru: 'давать' },
  { en: 'back', ru: 'назад' },
  { en: 'community', ru: 'сообществу' },
  { en: 'help', ru: 'помощь' },
  { en: 'those', ru: 'тех' },
  { en: 'need', ru: 'нуждаются' },
  { en: 'participated', ru: 'участвовали' },
  { en: 'various', ru: 'разные' },
  { en: 'events', ru: 'мероприятия' },
  { en: 'cleaning', ru: 'уборка' },
  { en: 'up', ru: 'приборка' },
  { en: 'local', ru: 'местном' },
  { en: 'park', ru: 'парке' },
  { en: 'helping', ru: 'помогая' },
  { en: 'at', ru: 'в' },
  { en: 'food', ru: 'пищевом' },
  { en: 'bank', ru: 'банке' },
  { en: 'Overall', ru: 'В целом' },
  { en: 'try', ru: 'пытаемся' },
  { en: 'balance', ru: 'сбалансировать' },
  { en: 'mix', ru: 'смешать' },
  { en: 'social', ru: 'социальное' },
  { en: 'physical', ru: 'физическое' },
  { en: 'personal', ru: 'личное' },
  { en: 'interests', ru: 'интересы' },
  { en: 'By', ru: 'Путём' },
  { en: 'can', ru: 'можно' },
  { en: 'relax', ru: 'расслабиться' },
  { en: 'while', ru: 'в то время как' },
  { en: 'staying', ru: 'оставаясь' },
  { en: 'engaged', ru: 'занятым' }
  ];
  