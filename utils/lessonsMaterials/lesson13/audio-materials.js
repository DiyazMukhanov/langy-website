const en = `My dream is to become a successful doctor. Growing up, I always had a fascination with the human body and how it works. I loved learning about different diseases and how they can be treated, and I always knew that I wanted to work in the medical field. As I grew up, I realized that becoming a doctor was not going to be easy. It requires a lot of hard work and dedication, but I am more than willing to put in the effort to achieve my dream. I know that becoming a doctor will require a lot of schooling and training, but I am ready for the challenge. My dream is to use my medical skills to help people. I want to be able to make a difference in the lives of others. I believe that being a doctor is not just a profession, but a calling, and I am eager to answer that call. I am grateful to have the opportunity to pursue my dream, and I am determined to work hard and do whatever it takes to make it a reality. I know that the path to becoming a doctor will be challenging, but I am up for the challenge. I am confident that with hard work and determination, I can achieve my dream of becoming a successful doctor.`
const ru = `Моя мечта - стать успешным врачом. Когда я рос, меня всегда восхищало человеческое тело и то, как оно работает. Мне нравилось узнавать о различных заболеваниях и о том, как их можно лечить, и я всегда знала, что хочу работать в области медицины. Повзрослев, я понял, что стать врачом будет нелегко. Это требует много тяжелой работы и самоотдачи, но я более чем готов приложить усилия для достижения своей мечты. Я знаю, что для того, чтобы стать врачом, потребуется много учебы и тренингов, но я готов к этому испытанию. Моя мечта - использовать свои медицинские навыки, чтобы помогать людям. Я хочу иметь возможность изменить жизнь других людей к лучшему. Я верю, что быть врачом - это не просто профессия, а призвание, и я горю желанием откликнуться на этот призыв. Я благодарен за возможность осуществить свою мечту, и я полон решимости упорно трудиться и делать все возможное, чтобы воплотить ее в реальность. Я знаю, что путь к тому, чтобы стать врачом, будет непростым, но я готов принять этот вызов. Я уверен, что благодаря упорному труду и целеустремленности я смогу осуществить свою мечту - стать успешным врачом.`

export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. What is my dream?',
        answers: [
            {
                id: 1,
                answer: 'become a driver',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'help people',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'become a wrighter',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: "2. To be a doctor ___",
        answers: [
            {
                id: 1,
                answer: 'is very  easy',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'not much hard work',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'requires dedication',
                isCorrect: true
            }
        ]
    },
    {
        number: 3,
        title: '3. Becoming a doctor ____',
        answers: [
            {
                id: 1,
                answer: 'is challenging',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'is easy',
                isCorrect: false
            },
            {
                id: 3,
                answer: "isn't my choice",
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'My', ru: 'Моя' },
    { en: 'dream', ru: 'мечта' },
    { en: 'is', ru: 'является' },
    { en: 'to', ru: 'чтобы' },
    { en: 'become', ru: 'стать' },
    { en: 'a', ru: 'успешным' },
    { en: 'successful', ru: 'врачом' },
    { en: 'doctor', ru: 'доктором' },
    { en: 'Growing', ru: 'Взрослея' },
    { en: 'up', ru: 'вверх' },
    { en: 'I', ru: 'Я' },
    { en: 'always', ru: 'всегда' },
    { en: 'had', ru: 'имел' },
    { en: 'fascination', ru: 'очарование' },
    { en: 'with', ru: 'с' },
    { en: 'the', ru: 'человеческим' },
    { en: 'human', ru: 'телом' },
    { en: 'body', ru: 'и тем, как оно' },
    { en: 'and', ru: 'и' },
    { en: 'how', ru: 'как' },
    { en: 'it', ru: 'оно' },
    { en: 'works', ru: 'работает' },
    { en: 'loved', ru: 'любил' },
    { en: 'learning', ru: 'изучение' },
    { en: 'about', ru: 'о' },
    { en: 'different', ru: 'разных' },
    { en: 'diseases', ru: 'заболеваниях' },
    { en: 'they', ru: 'они' },
    { en: 'can', ru: 'могут' },
    { en: 'be', ru: 'быть' },
    { en: 'treated', ru: 'лечены' },
    { en: 'knew', ru: 'знал' },
    { en: 'that', ru: 'что' },
    { en: 'wanted', ru: 'хотел' },
    { en: 'work', ru: 'работать' },
    { en: 'in', ru: 'в' },
    { en: 'medical', ru: 'медицинской' },
    { en: 'field', ru: 'сфере' },
    { en: 'As', ru: 'Как' },
    { en: 'grew', ru: 'рос' },
    { en: 'realized', ru: 'понял' },
    { en: 'becoming', ru: 'стать' },
    { en: 'was', ru: 'было' },
    { en: 'not', ru: 'не' },
    { en: 'going', ru: 'проходить' },
    { en: 'easy', ru: 'легко' },
    { en: 'It', ru: 'Это' },
    { en: 'requires', ru: 'требует' },
    { en: 'lot', ru: 'много' },
    { en: 'of', ru: 'из' },
    { en: 'hard', ru: 'тяжелой' },
    { en: 'dedication', ru: 'преданность' },
    { en: 'but', ru: 'но' },
    { en: 'am', ru: 'я' },
    { en: 'more', ru: 'более' },
    { en: 'than', ru: 'чем' },
    { en: 'willing', ru: 'готов' },
    { en: 'put', ru: 'вложить' },
    { en: 'effort', ru: 'усилие' },
    { en: 'achieve', ru: 'достичь' },
    { en: 'my', ru: 'моей' },
    { en: 'know', ru: 'знаю' },
    { en: 'will', ru: 'будет' },
    { en: 'require', ru: 'требовать' },
    { en: 'schooling', ru: 'образование' },
    { en: 'training', ru: 'обучение' },
    { en: 'ready', ru: 'готов' },
    { en: 'for', ru: 'для' },
    { en: 'challenge', ru: 'вызова' },
    { en: 'use', ru: 'использовать' },
    { en: 'skills', ru: 'навыки' },
    { en: 'help', ru: 'помощи' },
    { en: 'people', ru: 'людям' },
    { en: 'want', ru: 'хочу' },
    { en: 'able', ru: 'способным' },
    { en: 'make', ru: 'делать' },
    { en: 'difference', ru: 'разницу' },
    { en: 'lives', ru: 'жизни' },
    { en: 'others', ru: 'других' },
    { en: 'believe', ru: 'верю' },
    { en: 'being', ru: 'быть' },
    { en: 'just', ru: 'просто' },
    { en: 'profession', ru: 'профессия' },
    { en: 'calling', ru: 'призвание' },
    { en: 'eager', ru: 'стремящимся' },
    { en: 'answer', ru: 'ответить' },
    { en: 'call', ru: 'зову' },
    { en: 'grateful', ru: 'благодарен' },
    { en: 'have', ru: 'иметь' },
    { en: 'opportunity', ru: 'возможность' },
    { en: 'pursue', ru: 'преследовать' },
    { en: 'determined', ru: 'решен' },
    { en: 'do', ru: 'делать' },
    { en: 'whatever', ru: 'что бы ни' },
    { en: 'takes', ru: 'займет' },
    { en: 'reality', ru: 'реальность' },
    { en: 'path', ru: 'путь' },
    { en: 'challenging', ru: 'трудной' },
    { en: 'confident', ru: 'уверенный' },
    { en: 'determination', ru: 'решимость' }
];