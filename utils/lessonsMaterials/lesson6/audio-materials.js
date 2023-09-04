const en = `Choosing a higher education path is always hard. You need to make sure that you study something you like and you really want to make a career in this field. I am going to tell you about my university, and why I chose it. Right now, I am studying Business Administration and Management program at the faculty of Economics. It lasts for 3 years, and when I finish it I will get a bachelor’s degree. After that, I am planning to apply for a master’s degree which is 2 more years. I study for this degree at the University of Pecs. It is a huge University with many campuses and dormitories. I am not a freshman; I am a sophomore. That is why I already know a lot of things about higher education. At the beginning of each semester, you have to enroll in your course. After that you register for the compulsory and optional subjects. You can choose from a great number of elective courses. You can do absolutely anything from yoga to programming If you choose to. After you finish your studies, you can calculate your GPA, it is the average of your marks during the semester. If you have it above 4, you can apply for different scholarships and grants. Studying at the university is so much fun because you meet a lot of unique people. But do not think it is easy. Only the best graduates receive jobs at international companies, so take your time and study hard. During your education, it is a good idea to apply for different internships to get some valuable experience. Overall, university is a nice place to be in, and I hope you will get to your dream university, and after that you will get your dream job.`
const ru = `Выбирать высшее образование всегда трудно. Вам нужно убедиться в том, что вы изучаете что-то, что вам нравится, и вы действительно хотите делать карьеру в этой области. Я расскажу вам о моем университете и о том, почему я его выбрал. Прямо сейчас я изучаю бизнес-администрирование и менеджмент на факультете экономики. Курс длится три года, и когда я закончу его, я получу степень бакалавра. После этого я планирую подать заявление на получение степени магистра — это еще два года. Я учусь для получения этой степени в Печском университете (прим.: в Венгрии). Это огромный университет с множеством кампусов и общежитий. Я не первокурсник, я учусь на втором курсе. Вот почему я уже знаю многое о высшем образовании. В начале каждого семестра вам нужно поступить на ваш курс (начать обучение). После этого вы регистрируйтесь на обязательных и выборочных предметах. Вы можете выбрать из большого числа факультативных курсов. Вы можете заниматься совершенно чем угодно, от йоги до программирования, если таким будет ваш выбор. После завершения учебы, вы можете подсчитать свой GPA — это средняя оценка в течение семестра. Если она выше 4, вы можете подать заявление на получение различных стипендий и грантов. Учиться в университете — очень весело, потому что знакомишься с множеством уникальных людей. Но не думайте, что это просто. Только лучшие выпускники получают работу в международных компаниях, так что не спешите и учитесь хорошо. Во время учебы, было бы  неплохой идеей поучаствовать в различных стажировках, чтобы получить ценный опыт. В целом, университет — это хорошее место, и я надеюсь, что вы поступите в ваш университет мечты, а после этого найдете работу мечты.`
export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. Where do I study?',
        answers: [
            {
                id: 1,
                answer: 'Politechnic faculty',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Economics faculty',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'Management faculty',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: '2. How to get a scholarships?',
        answers: [
            {
                id: 1,
                answer: 'choose good programm',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'enrol in you course',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'have average marks above 4',
                isCorrect: true
            }
        ]
    },
    {
        number: 3,
        title: '3. Who can get jobs at international companies?',
        answers: [
            {
                id: 1,
                answer: 'the best graduates',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'students who study hard',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'unique people',
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: "Choosing", ru: "Выбор" },
    { en: "a", ru: "a" },  // "a" is the same in both languages
    { en: "higher", ru: "высшее" },
    { en: "education", ru: "образование" },
    { en: "path", ru: "путь" },
    { en: "is", ru: "есть" },  // "is" is the same in both languages
    { en: "always", ru: "всегда" },
    { en: "hard", ru: "трудно" },
    { en: "You", ru: "Вы" },
    { en: "need", ru: "нужно" },
    { en: "to", ru: "чтобы" },
    { en: "make", ru: "сделать" },
    { en: "sure", ru: "уверенность" },
    { en: "that", ru: "что" },
    { en: "you", ru: "вы" },
    { en: "study", ru: "изучать" },
    { en: "something", ru: "что-то" },
    { en: "like", ru: "подобное" },
    { en: "and", ru: "и" },
    { en: "really", ru: "действительно" },
    { en: "want", ru: "хотеть" },
    { en: "career", ru: "карьера" },
    { en: "in", ru: "в" },
    { en: "this", ru: "этом" },
    { en: "field", ru: "область" },
    { en: "I", ru: "Я" },
    { en: "am", ru: "есть" },
    { en: "going", ru: "собираюсь" },
    { en: "tell", ru: "рассказать" },
    { en: "about", ru: "о" },
    { en: "my", ru: "моём" },
    { en: "university", ru: "университет" },
    { en: "why", ru: "почему" },
    { en: "chose", ru: "выбрал" },
    { en: "it", ru: "его" },
    { en: "Right", ru: "Правильно" },
    { en: "now", ru: "сейчас" },
    { en: "studying", ru: "учиться" },
    { en: "Business", ru: "Бизнес" },
    { en: "Administration", ru: "Администрирование" },
    { en: "Management", ru: "Управление" },
    { en: "program", ru: "программа" },
    { en: "at", ru: "в" },
    { en: "the", ru: "определенный артикль" },
    { en: "faculty", ru: "факультет" },
    { en: "of", ru: "из" },
    { en: "Economics", ru: "Экономика" },
    { en: "It", ru: "Это" },
    { en: "lasts", ru: "продолжается" },
    { en: "for", ru: "на" },
    { en: "3", ru: "3" },
    { en: "years", ru: "года" },
    { en: "when", ru: "когда" },
    { en: "finish", ru: "закончите" },
    { en: "will", ru: ",будет" },
    { en: "get", ru: "получите" },
    { en: "bachelor", ru: "бакалавр" },
    { en: "s", ru: "s" },  // Possibly the same in both languages
    { en: "degree", ru: "степень" },
    { en: "After", ru: "После" },
    { en: "planning", ru: "планирования" },
    { en: "apply", ru: "подать заявку" },
    { en: "master", ru: "магистратура" },
    { en: "which", ru: "который" },
    { en: "2", ru: "2" },
    { en: "more", ru: "ещё" },
    { en: "University", ru: "Университет" },
    { en: "Pecs", ru: "Печский" },
    { en: "huge", ru: "огромный" },
    { en: "with", ru: "с" },
    { en: "many", ru: "множеством" },
    { en: "campuses", ru: "кампусами" },
    { en: "dormitories", ru: "общежитиями" },
    { en: "not", ru: "не" },
    { en: "freshman", ru: "первокурсник" },
    { en: "sophomore", ru: "второкурсник" },
    { en: "That", ru: "Это" },
    { en: "already", ru: "уже" },
    { en: "know", ru: "знаете" },
    { en: "lot", ru: "много" },
    { en: "things", ru: "вещей" },
    { en: "At", ru: "В" },
    { en: "beginning", ru: "начале" },
    { en: "each", ru: "каждого" },
    { en: "semester", ru: "семестра" },
    { en: "have", ru: "иметь" },
    { en: "enroll", ru: "записаться" },
    { en: "your", ru: "ваш" },
    { en: "course", ru: "курс" },
    { en: "register", ru: "зарегистрироваться" },
    { en: "compulsory", ru: "обязательные" },
    { en: "optional", ru: "дополнительные" },
    { en: "subjects", ru: "предметы" },
    { en: "can", ru: "можете" },
    { en: "choose", ru: "выбрать" },
    { en: "from", ru: "от" },
    { en: "great", ru: "великое" },
    { en: "number", ru: "количество" },
    { en: "elective", ru: "по выбору" },
    { en: "courses", ru: "курсы" },
    { en: "do", ru: "делать" },
    { en: "absolutely", ru: "абсолютно" },
    { en: "anything", ru: "что угодно" },
    { en: "yoga", ru: "йога" },
    { en: "programming", ru: "программирование" },
    { en: "If", ru: "Если" },
    { en: "studies", ru: "изучение" },
    { en: "calculate", ru: "рассчитывать" },
    { en: "GPA", ru: "средний балл" },
    { en: "average", ru: "средний" },
    { en: "marks", ru: "оценки" },
    { en: "during", ru: "в течение" },
    { en: "above", ru: "выше" },
    { en: "4", ru: "4" },
    { en: "different", ru: "разные" },
    { en: "scholarships", ru: "стипендии" },
    { en: "grants", ru: "гранты" },
    { en: "Studying", ru: "Учиться" },
    { en: "so", ru: "так" },
    { en: "much", ru: "много" },
    { en: "fun", ru: "весело" },
    { en: "because", ru: "потому что" },
    { en: "meet", ru: "встречать" },
    { en: "unique", ru: "уникальные" },
    { en: "people", ru: "люди" },
    { en: "But", ru: "Но" },
    { en: "think", ru: "думать" },
    { en: "easy", ru: "легко" },
    { en: "Only", ru: "Только" },
    { en: "best", ru: "лучшие" },
    { en: "graduates", ru: "выпускники" },
    { en: "receive", ru: "получают" },
    { en: "jobs", ru: "работы" },
    { en: "international", ru: "международные" },
    { en: "companies", ru: "компании" },
    { en: "take", ru: "занимают" },
    { en: "time", ru: "время" },
    { en: "During", ru: "Во время" },
    { en: "good", ru: "хорошая" },
    { en: "idea", ru: "идея" },
    { en: "internships", ru: "стажировки" },
    { en: "some", ru: "некоторое" },
    { en: "valuable", ru: "ценный" },
    { en: "experience", ru: "опыт" },
    { en: "Overall", ru: "В целом" },
    { en: "nice", ru: "приятное" },
    { en: "place", ru: "место" },
    { en: "be", ru: "быть" },
    { en: "hope", ru: "надежда" },
    { en: "dream", ru: "мечта" },
    { en: "after", ru: "после" },
    { en: "job", ru: "работы" },
    { en: "master’s", ru: "магистратура" },
    { en: "bachelor’s", ru: "бакалавр" },
    

];
