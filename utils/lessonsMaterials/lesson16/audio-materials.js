const en = `Art has always been a significant part of human life and culture. It has the ability to express emotions, capture a moment in time, and stimulate the imagination. Art can take many forms, including painting, sculpture, and film. It can be found in museums and galleries, as well as in public spaces and private homes.Art has the power to bring people together and inspire dialogue and understanding. It can also serve as a means of self-expression, allowing individuals to communicate their thoughts and feelings through creative means. In addition to its cultural value, art has also been shown to have numerous benefits for mental and physical health. Studies have shown that engaging in artistic activities can reduce stress, improve cognitive function, and boost self-esteem. Art is an integral part of our lives and has the ability to enrich and enhance our experiences. Whether we are creating it, viewing it, or simply enjoying it, art has the power to bring beauty and meaning into our world.`
const ru = `Искусство всегда было важной частью человеческой жизни и культуры. Оно способно выразить эмоции, запечатлеть момент времени и стимулировать воображение. Искусство может выражаться в различных формах, включая живопись, скульптуру, литературу и кино. Его можно увидеть в музеях и галереях, а также в общественных местах и частных жилищах. Искусство способно объединять людей, вдохновлять на диалог и понимание. Оно также может служить средством самовыражения, позволяя людям выражать свои мысли и чувства с помощью творческих средств. Помимо культурной ценности, искусство также имеет многочисленные преимущества для психического и физического здоровья. Исследования показали, что участие в художественной деятельности может уменьшить стресс, улучшить когнитивные функции и повысить самооценку. Искусство является неотъемлемой частью нашей жизни и способно обогатить и усилить наш опыт. Создаем ли мы его, смотрим или просто наслаждаемся им, искусство способно привнести в наш мир красоту и смысл.`

export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. Art can take many forms, including ____',
        answers: [
            {
                id: 1,
                answer: 'painting',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'eating',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'running',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: "2. Choose the right ",
        answers: [
            {
                id: 1,
                answer: 'Art is useless',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Art can inspire dialogue and understanding',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'Art is a waste of time',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. The text is about ___',
        answers: [
            {
                id: 1,
                answer: 'sports',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'art',
                isCorrect: true
            },
            {
                id: 3,
                answer: "business",
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'Art', ru: 'Искусство' },
    { en: 'has', ru: 'имеет' },
    { en: 'always', ru: 'всегда' },
    { en: 'been', ru: 'была' },
    { en: 'a', ru: 'одной' },
    { en: 'significant', ru: 'значимой' },
    { en: 'part', ru: 'частью' },
    { en: 'of', ru: 'человеческой' },
    { en: 'human', ru: 'жизни' },
    { en: 'life', ru: 'и культуры' },
    { en: 'and', ru: 'Искусство' },
    { en: 'culture', ru: 'и культуры' },
    { en: 'It', ru: 'Оно' },
    { en: 'the', ru: 'имеет' },
    { en: 'ability', ru: 'способность' },
    { en: 'to', ru: 'выражать' },
    { en: 'express', ru: 'выражать' },
    { en: 'emotions', ru: 'эмоции' },
    { en: 'capture', ru: 'захватывать' },
    { en: 'moment', ru: 'момент' },
    { en: 'in', ru: 'в' },
    { en: 'time', ru: 'время' },
    { en: 'stimulate', ru: 'стимулировать' },
    { en: 'imagination', ru: 'воображение' },
    { en: 'can', ru: 'может' },
    { en: 'take', ru: 'принимать' },
    { en: 'many', ru: 'множество' },
    { en: 'forms', ru: 'форм' },
    { en: 'including', ru: 'включая' },
    { en: 'painting', ru: 'живопись' },
    { en: 'sculpture', ru: 'скульптура' },
    { en: 'film', ru: 'кино' },
    { en: 'be', ru: 'может быть' },
    { en: 'found', ru: 'найдено' },
    { en: 'museums', ru: 'в музеях' },
    { en: 'galleries', ru: 'галереях' },
    { en: 'as', ru: 'а также' },
    { en: 'well', ru: 'а также' },
    { en: 'public', ru: 'общественных' },
    { en: 'spaces', ru: 'пространствах' },
    { en: 'private', ru: 'частных' },
    { en: 'homes', ru: 'домах' },
    { en: 'power', ru: 'сила' },
    { en: 'bring', ru: 'собирать' },
    { en: 'people', ru: 'людей' },
    { en: 'together', ru: 'вместе' },
    { en: 'inspire', ru: 'вдохновлять' },
    { en: 'dialogue', ru: 'диалог' },
    { en: 'understanding', ru: 'понимание' },
    { en: 'also', ru: 'также' },
    { en: 'serve', ru: 'служить' },
    { en: 'means', ru: 'означает' },
    { en: 'self', ru: 'самовыражение' },
    { en: 'expression', ru: 'выражение' },
    { en: 'allowing', ru: 'позволяя' },
    { en: 'individuals', ru: 'людям' },
    { en: 'communicate', ru: 'общаться' },
    { en: 'their', ru: 'их' },
    { en: 'thoughts', ru: 'мысли' },
    { en: 'feelings', ru: 'чувства' },
    { en: 'through', ru: 'через' },
    { en: 'creative', ru: 'творческий' },
    { en: 'In', ru: 'Кроме того' },
    { en: 'addition', ru: 'дополнение' },
    { en: 'its', ru: 'его' },
    { en: 'cultural', ru: 'культурная' },
    { en: 'value', ru: 'ценность' },
    { en: 'art', ru: 'искусство' },
    { en: 'shown', ru: 'показано' },
    { en: 'have', ru: 'иметь' },
    { en: 'numerous', ru: 'многочисленные' },
    { en: 'benefits', ru: 'преимущества' },
    { en: 'for', ru: 'для' },
    { en: 'mental', ru: 'психического' },
    { en: 'physical', ru: 'физического' },
    { en: 'health', ru: 'здоровья' },
    { en: 'Studies', ru: 'Исследования' },
    { en: 'that', ru: 'которые' },
    { en: 'engaging', ru: 'занимаясь' },
    { en: 'artistic', ru: 'творческими' },
    { en: 'activities', ru: 'деятельностьми' },
    { en: 'reduce', ru: 'уменьшать' },
    { en: 'stress', ru: 'стресс' },
    { en: 'improve', ru: 'улучшать' },
    { en: 'cognitive', ru: 'познавательные' },
    { en: 'function', ru: 'функции' },
    { en: 'boost', ru: 'повышать' },
    { en: 'esteem', ru: 'уважение' },
    { en: 'is', ru: 'является' },
    { en: 'an', ru: 'неотъемлемой' },
    { en: 'integral', ru: 'интегральной' },
    { en: 'our', ru: 'нашей' },
    { en: 'lives', ru: 'жизни' },
    { en: 'enrich', ru: 'обогащать' },
    { en: 'enhance', ru: 'усиливать' },
    { en: 'experiences', ru: 'опыт' },
    { en: 'Whether', ru: 'Будь то' },
    { en: 'we', ru: 'мы' },
    { en: 'are', ru: 'занимаемся' },
    { en: 'creating', ru: 'созданием' },
    { en: 'it', ru: 'этого' },
    { en: 'viewing', ru: 'просмотром' },
    { en: 'or', ru: 'или' },
    { en: 'simply', ru: 'просто' },
    { en: 'enjoying', ru: 'наслаждаясь' },
    { en: 'beauty', ru: 'красота' },
    { en: 'meaning', ru: 'смысл' },
    { en: 'into', ru: 'в' },
    { en: 'world', ru: 'мир' },
    ];
    