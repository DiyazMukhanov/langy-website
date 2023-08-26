const en = `We all know how hard it is to study at school. However, some subjects make our time at school more enjoyable. I am going to tell you about one of them. I adore this subject. This subject is called history. This is the class I never skip. In this class, we learn about notable events of the past and great people such as the rulers of the kingdoms and countries. Some people call history boring but for me it is like a breath of fresh air. It is a shame that we have this subject only twice per week. Right now we are learning about the Middle Ages and it is exciting. Sometimes I imagine that I am a knight fighting in a Middle Ages battle. Our teacher is also the reason why I love history. He is a very interesting speaker. It is a pleasure to listen to him. He also answers all our questions and helps with homework. I think when I grow up, I want to be a history teacher, too. I am trying to get only excellent grades for history. Usually, I am very disappointed when I get a four, but my mom says that it is okay, you can’t get excellent grades all the time. In conclusion, I would like to say that history is a really important subject and I want to know it better than others.`
const ru = `Мы все знаем, как тяжело учиться в школе. Однако некоторые предметы делают наше пребывание в школе более приятным. Я собираюсь рассказать вам об одном из них. Я обожаю этот предмет. Этот предмет называется историей. Это занятие, которое я никогда не пропускаю. На этом занятии мы узнаем о выдающихся событиях прошлого и великих людях, таких как правители королевств и стран. Некоторые люди называют историю скучной, но для меня это как глоток свежего воздуха. Жаль, что мы обсуждаем эту тему только два раза в неделю. Прямо сейчас мы узнаем о Средневековье, и это захватывающе. Иногда я представляю себя рыцарем, сражающимся в битве Средневековья. Наш учитель - это еще и причина, по которой я люблю историю. Он очень интересный оратор. Слушать его - одно удовольствие. Он также отвечает на все наши вопросы и помогает с домашним заданием. Я думаю, что когда я вырасту, я тоже хочу стать учителем истории. Я стараюсь получать только отличные оценки по истории. Обычно я очень разочаровываюсь, когда получаю четверку, но моя мама говорит, что это нормально, нельзя все время получать отличные оценки. В заключение я хотел бы сказать, что история - действительно важный предмет, и я хочу знать ее лучше других.`
export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. Why I love history?',
        answers: [
            {
                id: 1,
                answer: 'teacher is a good speaker',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'it is twice a week',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'short lessons',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: "2. Who I want to be in the future?",
        answers: [
            {
                id: 1,
                answer: 'school director',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'history teacher',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'speaker',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. Who do I imagine when I read a hitory?',
        answers: [
            {
                id: 1,
                answer: 'a knight',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'king',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'prince',
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'We', ru: 'Мы' },
    { en: 'all', ru: 'все' },
    { en: 'know', ru: 'знаем' },
    { en: 'how', ru: 'как' },
    { en: 'hard', ru: 'трудно' },
    { en: 'it', ru: 'это' },
    { en: 'is', ru: 'есть' },
    { en: 'to', ru: 'чтобы' },
    { en: 'study', ru: 'учиться' },
    { en: 'at', ru: 'в' },
    { en: 'school', ru: 'школе' },
    { en: 'However', ru: 'Однако' },
    { en: 'some', ru: 'некоторые' },
    { en: 'subjects', ru: 'предметы' },
    { en: 'make', ru: 'делают' },
    { en: 'our', ru: 'наше' },
    { en: 'time', ru: 'время' },
    { en: 'more', ru: 'больше' },
    { en: 'enjoyable', ru: 'приятным' },
    { en: 'I', ru: 'Я' },
    { en: 'am', ru: 'я' },
    { en: 'going', ru: 'собираюсь' },
    { en: 'tell', ru: 'рассказать' },
    { en: 'you', ru: 'тебе' },
    { en: 'about', ru: 'о' },
    { en: 'one', ru: 'одном' },
    { en: 'of', ru: 'из' },
    { en: 'them', ru: 'них' },
    { en: 'adore', ru: 'обожаю' },
    { en: 'this', ru: 'этот' },
    { en: 'subject', ru: 'предмет' },
    { en: 'This', ru: 'Этот' },
    { en: 'called', ru: 'называется' },
    { en: 'history', ru: 'история' },
    { en: 'the', ru: 'в' },
    { en: 'class', ru: 'классе' },
    { en: 'never', ru: 'никогда' },
    { en: 'skip', ru: 'пропускаю' },
    { en: 'In', ru: 'В' },
    { en: 'we', ru: 'мы' },
    { en: 'learn', ru: 'учимся' },
    { en: 'notable', ru: 'значимым' },
    { en: 'events', ru: 'событиям' },
    { en: 'past', ru: 'прошлого' },
    { en: 'and', ru: 'и' },
    { en: 'great', ru: 'великих' },
    { en: 'people', ru: 'людях' },
    { en: 'such', ru: 'как' },
    { en: 'as', ru: 'таких' },
    { en: 'rulers', ru: 'правителях' },
    { en: 'kingdoms', ru: 'королевствах' },
    { en: 'countries', ru: 'страны' },
    { en: 'Some', ru: 'Некоторые' },
    { en: 'call', ru: 'называют' },
    { en: 'boring', ru: 'скучной' },
    { en: 'but', ru: 'но' },
    { en: 'for', ru: 'для' },
    { en: 'me', ru: 'меня' },
    { en: 'like', ru: 'как' },
    { en: 'a', ru: 'как' },
    { en: 'breath', ru: 'вдохновение' },
    { en: 'fresh', ru: 'свежий' },
    { en: 'air', ru: 'воздух' },
    { en: 'It', ru: 'Это' },
    { en: 'shame', ru: 'стыдно' },
    { en: 'that', ru: 'что' },
    { en: 'have', ru: 'иметь' },
    { en: 'only', ru: 'только' },
    { en: 'twice', ru: 'два раза' },
    { en: 'per', ru: 'в' },
    { en: 'week', ru: 'неделю' },
    { en: 'Right', ru: 'Прямо' },
    { en: 'now', ru: 'сейчас' },
    { en: 'are', ru: 'находитесь' },
    { en: 'learning', ru: 'изучаем' },
    { en: 'Middle', ru: 'Средние' },
    { en: 'Ages', ru: 'Века' },
    { en: 'exciting', ru: 'захватывающими' },
    { en: 'Sometimes', ru: 'Иногда' },
    { en: 'imagine', ru: 'представляю' },
    { en: 'knight', ru: 'рыцаря' },
    { en: 'fighting', ru: 'сражающегося' },
    { en: 'in', ru: 'в' },
    { en: 'battle', ru: 'битве' },
    { en: 'Our', ru: 'Наш' },
    { en: 'teacher', ru: 'учитель' },
    { en: 'also', ru: 'также' },
    { en: 'reason', ru: 'причина' },
    { en: 'why', ru: 'почему' },
    { en: 'love', ru: 'люблю' },
    { en: 'He', ru: 'Он' },
    { en: 'very', ru: 'очень' },
    { en: 'interesting', ru: 'интересный' },
    { en: 'speaker', ru: 'говорящий' },
    { en: 'pleasure', ru: 'удовольствие' },
    { en: 'listen', ru: 'слушать' },
    { en: 'him', ru: 'его' },
    { en: 'answers', ru: 'ответы' },
    { en: 'questions', ru: 'вопросы' },
    { en: 'helps', ru: 'помогает' },
    { en: 'with', ru: 'с' },
    { en: 'homework', ru: 'домашнее задание' },
    { en: 'think', ru: 'думать' },
    { en: 'when', ru: 'когда' },
    { en: 'grow', ru: 'вырасти' },
    { en: 'up', ru: 'вверх' },
    { en: 'want', ru: 'хотеть' },
    { en: 'be', ru: 'быть' },
    { en: 'too', ru: 'слишком' },
    { en: 'trying', ru: 'попытка' },
    { en: 'get', ru: 'получать' },
    { en: 'excellent', ru: 'отлично' },
    { en: 'grades', ru: 'оценки' },
    { en: 'Usually', ru: 'Обычно' },
    { en: 'disappointed', ru: 'разочарованный' },
    { en: 'four', ru: 'четыре' },
    { en: 'my', ru: 'мои' },
    { en: 'mom', ru: 'мама' },
    { en: 'says', ru: 'говорит' },
    { en: 'okay', ru: 'хорошо' },
    { en: 'can', ru: 'можно' },
    { en: 't', ru: 'не' },
    { en: 'conclusion', ru: 'вывод' },
    { en: 'would', ru: 'бы' },
    { en: 'say', ru: 'сказать' },
    { en: 'really', ru: 'действительно' },
    { en: 'important', ru: 'важно' },
    { en: 'better', ru: 'лучше' },
    { en: 'than', ru: 'чем' },
    { en: 'others', ru: 'другие' }
    ];
  