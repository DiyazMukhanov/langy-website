const en = `I spend my weekends in a variety of ways. On some weekends, I like to relax at home and catch up on some rest. I might watch a movie or TV show, read a book, or just take a nap. On other weekends, I like to be more active and go out and do something. This might include going for a hike or bike ride in the park, playing a sport with friends, or going to the gym. I also like to spend time with my family and friends on the weekends. We might have a barbecue in the backyard, go out to eat at a restaurant, or just hang out and chat. On weekends when I have a lot of homework or projects due, I might spend more time studying and working on school assignments. I try to balance my responsibilities with my desire to have some leisure time, so I make sure to set aside time for both. In most cases, my weekends are a mix of relaxation, fun, and productivity, and I enjoy being able to have a break from the busy week and spend time doing the things that I enjoy.`
const ru = `Я провожу свои выходные по-разному. Иногда по выходным я люблю расслабиться дома и немного отдохнуть. Я мог бы посмотреть фильм или телешоу, почитать книгу или просто вздремнуть. В другие выходные мне нравится быть более активным, выходить на улицу и что-то делать. Это может включать в себя поход в парк или велосипедную прогулку, занятия спортом с друзьями или посещение тренажерного зала. Мне также нравится проводить время со своей семьей и друзьями по выходным. Мы могли бы устроить барбекю на заднем дворе, сходить поесть в ресторан или просто потусоваться и поболтать. По выходным, когда у меня много домашних заданий или проектов, я мог бы уделять больше времени учебе и работе над школьными заданиями. Я стараюсь сбалансировать свои обязанности с желанием иметь немного свободного времени, поэтому обязательно выделяю время и для того, и для другого. В большинстве случаев мои выходные - это сочетание расслабления, веселья и продуктивности, и мне нравится иметь возможность отдохнуть от напряженной рабочей недели и провести время, занимаясь тем, что мне нравится.`
export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. How do I like to spend my weekends?',
        answers: [
            {
                id: 1,
                answer: 'reading a book',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'playing video games  ',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swimming',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: "2. Whom do I like to spend time with?",
        answers: [
            {
                id: 1,
                answer: 'neighbors',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'family',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'dog',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. What kind of activities do I like?',
        answers: [
            {
                id: 1,
                answer: 'hiking',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'jogging',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'rafting',
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'I', ru: 'Я' },
    { en: 'spend', ru: 'провожу' },
    { en: 'my', ru: 'мои' },
    { en: 'weekends', ru: 'выходные' },
    { en: 'in', ru: 'в' },
    { en: 'a', ru: 'в' },
    { en: 'variety', ru: 'разнообразие' },
    { en: 'of', ru: 'из' },
    { en: 'ways', ru: 'способов' },
    { en: 'On', ru: 'На' },
    { en: 'some', ru: 'некоторых' },
    { en: 'like', ru: 'нравится' },
    { en: 'to', ru: 'чтобы' },
    { en: 'relax', ru: 'расслабиться' },
    { en: 'at', ru: 'дома' },
    { en: 'home', ru: 'или' },
    { en: 'and', ru: 'и' },
    { en: 'catch', ru: 'поймать' },
    { en: 'up', ru: 'догонять' },
    { en: 'on', ru: 'по' },
    { en: 'rest', ru: 'отдых' },
    { en: 'might', ru: 'возможно' },
    { en: 'watch', ru: 'посмотреть' },
    { en: 'movie', ru: 'фильм' },
    { en: 'or', ru: 'или' },
    { en: 'TV', ru: 'телевизор' },
    { en: 'show', ru: 'программу' },
    { en: 'read', ru: 'читать' },
    { en: 'book', ru: 'книгу' },
    { en: 'just', ru: 'просто' },
    { en: 'take', ru: 'взять' },
    { en: 'nap', ru: 'дремать' },
    { en: 'other', ru: 'другой' },
    { en: 'be', ru: 'быть' },
    { en: 'more', ru: 'более' },
    { en: 'active', ru: 'активным' },
    { en: 'go', ru: 'идти' },
    { en: 'out', ru: 'наружу' },
    { en: 'do', ru: 'делать' },
    { en: 'something', ru: 'что-то' },
    { en: 'This', ru: 'Это' },
    { en: 'include', ru: 'включает' },
    { en: 'going', ru: 'пойти' },
    { en: 'for', ru: 'на' },
    { en: 'hike', ru: 'поход' },
    { en: 'bike', ru: 'велосипед' },
    { en: 'ride', ru: 'поездка' },
    { en: 'the', ru: 'в' },
    { en: 'park', ru: 'парк' },
    { en: 'playing', ru: 'играть' },
    { en: 'sport', ru: 'спорт' },
    { en: 'with', ru: 'с' },
    { en: 'friends', ru: 'друзьями' },
    { en: 'gym', ru: 'спортзал' },
    { en: 'also', ru: 'также' },
    { en: 'time', ru: 'время' },
    { en: 'family', ru: 'семьей' },
    { en: 'We', ru: 'Мы' },
    { en: 'have', ru: 'имеем' },
    { en: 'barbecue', ru: 'барбекю' },
    { en: 'backyard', ru: 'на заднем дворе' },
    { en: 'eat', ru: 'едим' },
    { en: 'restaurant', ru: 'ресторане' },
    { en: 'hang', ru: 'проводим' },
    { en: 'chat', ru: 'беседуем' },
    { en: 'when', ru: 'когда' },
    { en: 'lot', ru: 'много' },
    { en: 'homework', ru: 'домашней работы' },
    { en: 'projects', ru: 'проектов' },
    { en: 'due', ru: 'должно быть сдано' },
    { en: 'studying', ru: 'учимся' },
    { en: 'working', ru: 'работаем' },
    { en: 'school', ru: 'школе' },
    { en: 'assignments', ru: 'задания' },
    { en: 'try', ru: 'пытаемся' },
    { en: 'balance', ru: 'сбалансировать' },
    { en: 'responsibilities', ru: 'обязанности' },
    { en: 'desire', ru: 'желание' },
    { en: 'leisure', ru: 'досуг' },
    { en: 'so', ru: 'так' },
    { en: 'make', ru: 'делаем' },
    { en: 'sure', ru: 'уверены' },
    { en: 'set', ru: 'намечаем' },
    { en: 'aside', ru: 'в сторону' },
    { en: 'both', ru: 'оба' },
    { en: 'In', ru: 'В' },
    { en: 'most', ru: 'большинстве' },
    { en: 'cases', ru: 'случаях' },
    { en: 'are', ru: 'есть' },
    { en: 'mix', ru: 'смесь' },
    { en: 'relaxation', ru: 'релаксации' },
    { en: 'fun', ru: 'весело' },
    { en: 'productivity', ru: 'продуктивности' },
    { en: 'enjoy', ru: 'наслаждаемся' },
    { en: 'being', ru: 'быть' },
    { en: 'able', ru: 'способны' },
    { en: 'break', ru: 'перерыв' },
    { en: 'from', ru: 'от' },
    { en: 'busy', ru: 'занятыми' },
    { en: 'week', ru: 'недели' },
    { en: 'doing', ru: 'делая' },
    { en: 'things', ru: 'вещи' },
    { en: 'that', ru: 'которые' }
  ];
  