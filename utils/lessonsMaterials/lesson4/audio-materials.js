const en = `Hobby is an activity that we do for fun, just because we like it. Most people have at least one hobby even if their schedule is tight. I have a few hobbies but my favorite one is drawing comics. Let me tell you about this interesting activity. Drawing comics is not the same as just drawing. When you draw a person, an animal or an object, normally there is no story in it. Comics are all about storytelling. Even web comics that consist of only one picture tell a story. The story is told through pictures and text. So, if you make comics, you should be and artist and a writer at the same time. My stories are usually funny, they include talking animals and fantastic creatures. Some of my stories are sad and they are based on my personal experience. I took up drawing comics just a year ago. My friend sent me a picture with two turtles arguing over an apple. I just imitated it and drew a picture with the same characters but with a different story. My friend found it funny, although my picture was not drawn well. I spent a lot of time coming up with my drawing style, and now I think I have one. Drawing never felt like work to me, it is something that I enjoy doing. As for my other hobbies, I like reading and I am a big fan of historical books. I used to spend a lot of time reading, but now I spend most of my free time drawing. In conclusion, I would like to say that it is great to have a hobby. If you do not have one, it probably means that you just have not found it yet.`
const ru = `Хобби - это занятие, которым мы занимаемся ради удовольствия, просто потому, что нам это нравится. У большинства людей есть по крайней мере одно хобби, даже если у них плотный график. У меня есть несколько увлечений, но мое любимое - рисование комиксов. Позвольте мне рассказать вам об этом интересном занятии. Рисовать комиксы - это не то же самое, что просто рисовать. Когда вы рисуете человека, животное или какой-либо предмет, обычно в этом нет никакой истории. Комиксы - это прежде всего рассказывание историй. Даже веб-комиксы, состоящие всего из одной картинки, рассказывают историю. История рассказывается с помощью картинок и текста. Итак, если вы создаете комиксы, вы должны быть и художником, и писателем одновременно. Мои истории обычно забавные, в них есть говорящие животные и фантастические существа. Некоторые из моих историй печальны, и они основаны на моем личном опыте. Я начал рисовать комиксы всего год назад. Мой друг прислал мне фотографию, на которой две черепахи спорят из-за яблока. Я просто подражал этому и нарисовал картинку с теми же персонажами, но с другой историей. Моему другу это показалось забавным, хотя моя картинка была нарисована не очень хорошо. Я потратил много времени, придумывая свой стиль рисования, и теперь, думаю, он у меня есть. Рисование никогда не казалось мне работой, это то, чем мне нравится заниматься. Что касается других моих увлечений, то я люблю читать и являюсь большим поклонником исторических книг. Раньше я проводил много времени за чтением, но теперь большую часть своего свободного времени провожу за рисованием. В заключение я хотел бы сказать, что это здорово - иметь хобби. Если у вас его нет, это, вероятно, означает, что вы просто еще не нашли его.`
export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. What is my favorite hobby?',
        answers: [
            {
                id: 1,
                answer: 'reading comics',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'drawing comics',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'writing stories',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: '2. When I started drawing comics?',
        answers: [
            {
                id: 1,
                answer: 'one year ago',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'some years ago',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'several years ago',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. What picture I received from my friend?',
        answers: [
            {
                id: 1,
                answer: 'fighting of people',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'arguing turtles',
                isCorrect: true
            },
            {
                id: 3,
                answer: 'smiling kids',
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