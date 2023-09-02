const en = `I recently had the opportunity to visit a theater for the first time. It was an incredible experience that I will never forget. The theater was located in the heart of the city, and as I approached it, I couldn’t help but feel a sense of excitement and anticipation. The outside of the building was grand and impressive, with tall columns and beautiful architectural details. As I entered the theater, I was struck by the ornate decorations and the grandeur of the interior. The floors were polished to a shine, and the walls were adorned with intricate frescoes and paintings. The seats were comfortable and plush, and the stage was vast and impressive. As I waited for the show to begin, I couldn’t help but feel a sense of nervous excitement. I had heard so much about this particular performance, and I was eager to see it for myself. When the curtain finally rose, I was completely captivated by the performance. The actors were talented and skilled, and the sets and costumes were stunning. I was completely absorbed in the story, and it was a truly unforgettable experience. Overall, my visit to the theater was an absolute delight. It was a chance to experience live performance in a way that I had never done before, and it left a lasting impression on me. I can’t wait to visit the theater again in the future and see more performances.`
const ru = `Недавно у меня была возможность впервые посетить театр. Это был невероятный опыт, который я никогда не забуду. Театр располагался в самом центре города, и, приближаясь к нему, я не мог не испытывать чувства волнения и предвкушения. Снаружи здание было величественным и впечатляющим, с высокими колоннами и красивыми архитектурными деталями. Когда я вошел в театр, меня поразили богато украшенные декорации и великолепие интерьера. Полы были отполированы до блеска, а стены украшены замысловатыми фресками и картинами. Сиденья были удобными и плюшевыми, а сцена - огромной и впечатляющей. Ожидая начала шоу, я не мог избавиться от чувства нервного возбуждения. Я так много слышал об этом конкретном спектакле, и мне не терпелось увидеть его своими глазами. Когда занавес наконец поднялся, я был полностью очарован представлением. Актеры были талантливыми и умелыми, а декорации и костюмы - потрясающими. Я был полностью поглощен этой историей, и это был поистине незабываемый опыт. В целом, мой визит в театр был абсолютным наслаждением. Это был шанс испытать живое выступление так, как я никогда раньше не делал, и это произвело на меня неизгладимое впечатление. Я не могу дождаться, когда снова посещу театр в будущем и увижу больше спектаклей.`

export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. How many times I was in the theater?',
        answers: [
            {
                id: 1,
                answer: 'once',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'I go every week',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'never',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: "2. How does the Theater look like?",
        answers: [
            {
                id: 1,
                answer: 'old building',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'attractive',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'impressive',
                isCorrect: true
            }
        ]
    },
    {
        number: 3,
        title: '3. The actors are ___',
        answers: [
            {
                id: 1,
                answer: 'stunning',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'tallented',
                isCorrect: false
            },
            {
                id: 3,
                answer: "experienced",
                isCorrect: true
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'I', ru: 'Я' },
    { en: 'recently', ru: 'недавно' },
    { en: 'had', ru: 'имел' },
    { en: 'the', ru: 'артикль' },
    { en: 'opportunity', ru: 'возможность' },
    { en: 'to', ru: 'посетить' },
    { en: 'visit', ru: 'посещение' },
    { en: 'a', ru: 'артикль' },
    { en: 'for', ru: 'для' },
    { en: 'first', ru: 'первый' },
    { en: 'time', ru: 'раз' },
    { en: 'It', ru: 'Это' },
    { en: 'was', ru: 'было' },
    { en: 'an', ru: 'артикль' },
    { en: 'incredible', ru: 'невероятный' },
    { en: 'experience', ru: 'опыт' },
    { en: 'that', ru: 'который' },
    { en: 'will', ru: 'будет' },
    { en: 'never', ru: 'никогда' },
    { en: 'forget', ru: 'забыть' },
    { en: 'The', ru: 'артикль' },
    { en: 'located', ru: 'расположен' },
    { en: 'in', ru: 'в' },
    { en: 'heart', ru: 'сердце' },
    { en: 'of', ru: 'город' },
    { en: 'city', ru: 'город' },
    { en: 'and', ru: 'и' },
    { en: 'as', ru: 'когда' },
    { en: 'approached', ru: 'подошел' },
    { en: 'it', ru: 'это' },
    { en: 'couldn', ru: 'не мог' },
    { en: 't', ru: 'не' },
    { en: 'help', ru: 'удержаться' },
    { en: 'but', ru: 'но' },
    { en: 'feel', ru: 'чувствовать' },
    { en: 'sense', ru: 'чувство' },
    { en: 'excitement', ru: 'возбуждение' },
    { en: 'anticipation', ru: 'ожидание' },
    { en: 'outside', ru: 'снаружи' },
    { en: 'building', ru: 'здание' },
    { en: 'grand', ru: 'величественный' },
    { en: 'impressive', ru: 'впечатляющий' },
    { en: 'with', ru: 'с' },
    { en: 'tall', ru: 'высокий' },
    { en: 'columns', ru: 'колонны' },
    { en: 'beautiful', ru: 'красивый' },
    { en: 'architectural', ru: 'архитектурный' },
    { en: 'details', ru: 'детали' },
    { en: 'As', ru: 'Когда' },
    { en: 'entered', ru: 'вошел' },
    { en: 'struck', ru: 'поразил' },
    { en: 'by', ru: 'в' },
    { en: 'ornate', ru: 'украшенный' },
    { en: 'decorations', ru: 'украшения' },
    { en: 'grandeur', ru: 'великолепие' },
    { en: 'interior', ru: 'интерьер' },
    { en: 'floors', ru: 'полы' },
    { en: 'were', ru: 'были' },
    { en: 'polished', ru: 'полированные' },
    { en: 'shine', ru: 'блеск' },
    { en: 'walls', ru: 'стены' },
    { en: 'adorned', ru: 'украшены' },
    { en: 'intricate', ru: 'сложные' },
    { en: 'frescoes', ru: 'фрески' },
    { en: 'paintings', ru: 'картины' },
    { en: 'seats', ru: 'места' },
    { en: 'comfortable', ru: 'удобные' },
    { en: 'plush', ru: 'плюшевые' },
    { en: 'stage', ru: 'сцена' },
    { en: 'vast', ru: 'огромная' },
    { en: 'waited', ru: 'ждал' },
    { en: 'show', ru: 'представление' },
    { en: 'begin', ru: 'начать' },
    { en: 'nervous', ru: 'нервный' },
    { en: 'heard', ru: 'слышал' },
    { en: 'so', ru: 'так' },
    { en: 'much', ru: 'много' },
    { en: 'about', ru: 'о' },
    { en: 'this', ru: 'этом' },
    { en: 'particular', ru: 'особенное' },
    { en: 'performance', ru: 'представление' },
    { en: 'eager', ru: 'готов' },
    { en: 'see', ru: 'увидеть' },
    { en: 'myself', ru: 'себя' },
    { en: 'When', ru: 'Когда' },
    { en: 'curtain', ru: 'занавес' },
    { en: 'finally', ru: 'наконец' },
    { en: 'rose', ru: 'поднялся' },
    { en: 'completely', ru: 'полностью' },
    { en: 'captivated', ru: 'пленен' },
    { en: 'actors', ru: 'актеры' },
    { en: 'talented', ru: 'талантливые' },
    { en: 'skilled', ru: 'опытные' },
    { en: 'sets', ru: 'декорации' },
    { en: 'costumes', ru: 'костюмы' },
    { en: 'stunning', ru: 'потрясающие' },
    { en: 'absorbed', ru: 'поглощен' },
    { en: 'story', ru: 'история' },
    { en: 'truly', ru: 'действительно' },
    { en: 'unforgettable', ru: 'незабываемое' },
    { en: 'Overall', ru: 'В целом' },
    { en: 'my', ru: 'моё' },
    { en: 'absolute', ru: 'абсолютное' },
    { en: 'delight', ru: 'восхищение' },
    { en: 'chance', ru: 'шанс' },
    { en: 'live', ru: 'живое' },
    { en: 'way', ru: 'способ' },
    { en: 'done', ru: 'сделано' },
    { en: 'before', ru: 'ранее' },
    { en: 'left', ru: 'оставило' },
    { en: 'lasting', ru: 'долговременное' },
    { en: 'impression', ru: 'впечатление' },
    { en: 'on', ru: 'на' },
    { en: 'me', ru: 'меня' },
    { en: 'can', ru: 'могу' },
    { en: 'wait', ru: 'ждать' },
    { en: 'again', ru: 'снова' },
    { en: 'future', ru: 'будущее' },
    { en: 'more', ru: 'больше' },
    { en: 'performances', ru: 'представления' },
    { en: 'couldn’t', ru: 'не мог' },
    { en: 'can’t', ru: 'не могу' },
    ];
  