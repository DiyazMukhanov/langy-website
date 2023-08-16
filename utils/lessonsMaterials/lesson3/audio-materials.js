const en = `Today was a typical school day for me. I woke up at 6:30am and got ready for the day. I had breakfast and packed my bag with all the things I needed for class, including my laptop, textbook, and notes. I left for school at 7:30am and arrived at 8:00am, just in time for my first class of the day. My schedule was pretty packed today, with classes from 8:00am to 3:00pm, with a break for lunch at noon. I had a mix of lectures, discussions, and group work, and I tried my best to stay focused and engaged in each class. After school, I headed home and took a break for a little while before starting on my homework. I had a lot to do, so I sat down at my desk and started to work. I finished around 8:00pm and took some time to relax before going to bed. It was a busy but productive day. I’m looking forward to getting  some rest tonight and starting fresh tomorrow.`
const ru = `Сегодня был обычный школьный день для меня. Я проснулся в 6:30 утра и приготовился к новому дню. Я позавтракала и собрала в сумку все необходимое для занятий, включая ноутбук, учебник и конспекты. Я ушел в школу в 7:30 утра и пришел в 8:00 утра, как раз к своему первому занятию за день. Сегодня мое расписание было довольно плотным: занятия с 8:00 утра до 15:00 вечера, с перерывом на обед в полдень. У меня было сочетание лекций, дискуссий и групповой работы, и я изо всех сил старался оставаться сосредоточенным и вовлеченным на каждом занятии. После школы я направился домой и немного передохнул, прежде чем приступить к домашнему заданию. У меня было много дел, поэтому я сел за свой стол и приступил к работе. Я закончил около 8:00 вечера и потратил некоторое время на то, чтобы расслабиться, прежде чем лечь спать. Это был напряженный, но продуктивный день. Я с нетерпением жду возможности немного отдохнуть сегодня вечером и начать все заново завтра.`

export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. What time he starts his day?',
        answers: [
            {
                id: 1,
                answer: '6.30',
                isCorrect: true
            },
            {
                id: 2,
                answer: '7.30',
                isCorrect: false
            },
            {
                id: 3,
                answer: '8.00',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: '2. Where does he go after school?',
        answers: [
            {
                id: 1,
                answer: 'class',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'home',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'work',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. Why he has a break?',
        answers: [
            {
                id: 1,
                answer: 'for lunch',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'for noon',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'for discussion',
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: "Today", ru: "Сегодня" },
    { en: "was", ru: "был" },
    { en: "a", ru: "обычный" },
    { en: "typical", ru: "типичный" },
    { en: "school", ru: "школьный" },
    { en: "day", ru: "день" },
    { en: "for", ru: "для" },
    { en: "me", ru: "меня" },
    { en: "I", ru: "Я" },
    { en: "woke", ru: "проснулся" },
    { en: "up", ru: "поднялся" },
    { en: "at", ru: "в" },
    { en: "6", ru: "6" },
    { en: "30am", ru: "30 утра" },
    { en: "and", ru: "и" },
    { en: "got", ru: "подготовился" },
    { en: "ready", ru: "готов" },
    { en: "the", ru: "затем" },
    { en: "had", ru: "поел" },
    { en: "breakfast", ru: "завтрак" },
    { en: "packed", ru: "упаковал" },
    { en: "my", ru: "свою" },
    { en: "bag", ru: "сумку" },
    { en: "with", ru: "со всеми" },
    { en: "all", ru: "всеми" },
    { en: "things", ru: "вещами" },
    { en: "needed", ru: "необходимыми" },
    { en: "class", ru: "уроком" },
    { en: "including", ru: "включая" },
    { en: "laptop", ru: "ноутбук" },
    { en: "textbook", ru: "учебник" },
    { en: "notes", ru: "заметками" },
    { en: "left", ru: "ушел" },
    { en: "7", ru: "7" },
    { en: "arrived", ru: "прибыл" },
    { en: "8", ru: "8" },
    { en: "00am", ru: "00 утра" },
    { en: "just", ru: "точно" },
    { en: "in", ru: "в" },
    { en: "time", ru: "вовремя" },
    { en: "first", ru: "первый" },
    { en: "of", ru: "из" },
    { en: "My", ru: "Мои" },
    { en: "schedule", ru: "расписание" },
    { en: "pretty", ru: "довольно" },
    { en: "today", ru: "сегодня" },
    { en: "classes", ru: "уроки" },
    { en: "from", ru: "с" },
    { en: "to", ru: "до" },
    { en: "3", ru: "3" },
    { en: "00pm", ru: "00 дня" },
    { en: "break", ru: "перерыв" },
    { en: "lunch", ru: "ланч" },
    { en: "noon", ru: "полдень" },
    { en: "mix", ru: "смешивать" },
    { en: "lectures", ru: "лекции" },
    { en: "discussions", ru: "обсуждения" },
    { en: "group", ru: "групповая" },
    { en: "work", ru: "работа" },
    { en: "tried", ru: "попытался" },
    { en: "best", ru: "лучший" },
    { en: "stay", ru: "остаться" },
    { en: "focused", ru: "сосредоточенным" },
    { en: "engaged", ru: "вовлеченным" },
    { en: "each", ru: "каждый" },
    { en: "After", ru: "После" },
    { en: "headed", ru: "направился" },
    { en: "home", ru: "домой" },
    { en: "took", ru: "взял" },
    { en: "little", ru: "немного" },
    { en: "while", ru: "пока" },
    { en: "before", ru: "перед" },
    { en: "starting", ru: "началом" },
    { en: "on", ru: "на" },
    { en: "homework", ru: "домашнее задание" },
    { en: "lot", ru: "много" },
    { en: "do", ru: "делать" },
    { en: "so", ru: "так" },
    { en: "sat", ru: "сел" },
    { en: "down", ru: "вниз" },
    { en: "desk", ru: "стол" },
    { en: "started", ru: "начал" },
    { en: "finished", ru: "закончил" },
    { en: "around", ru: "вокруг" },
    { en: "some", ru: "немного" },
    { en: "relax", ru: "расслабление" },
    { en: "going", ru: "иду" },
    { en: "bed", ru: "кровать" },
    { en: "It", ru: "Это" },
    { en: "busy", ru: "занято" },
    { en: "but", ru: "но" },
    { en: "productive", ru: "продуктивное" },
    { en: "m", ru: "я" },
    { en: "looking", ru: "смотря" },
    { en: "forward", ru: "ожидание" },
    { en: "getting", ru: "получение" },
    { en: "rest", ru: "отдых" },
    { en: "tonight", ru: "сегодня вечером" },
    { en: "fresh", ru: "свежий" },
    { en: "tomorrow", ru: "завтра" }
];