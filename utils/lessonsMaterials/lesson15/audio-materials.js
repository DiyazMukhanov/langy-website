const en = `Everyone wants to be healthy. Good health affects the way people behave, work, and interact with each other. As the proverb goes, “Health is wealth.” Health is the key benefit provided by sports activities. People who exercise tend to be well-disciplined and stress-resistant. These qualities are essential for the effectiveness of personal and professional development. Currently, there are many opportunities offered to those people who want to be fit. Fitness clubs and athletic centers are available for people of different ages. Also, there are public places for physical activities. Students are engaged in special school and university programs that guarantee their successful physical development. They can participate in different sports to find the most appealing athletic activity. Among them are running, swimming, fitness, cycling, football, and yoga, to name a few. Regular physical exercises help stimulate muscles and get better results in any sport. As for me, my favorite sport is volleyball. This is a traditional team game that is very popular across the world. Playing volleyball teaches me how to become a leader, set goals, organize teamwork, and develop self-confidence and self-discipline. My participation in sports competitions allows me to improve my physical fitness and mental abilities. Further success in my career depends on these aspects. The rules of this game are easy to understand. Two teams, consisting of six players each, play a match. This indoor game is played with a ball. The winner of the volleyball set is the team that gains 25 points. It’s important for every player to bat the ball over the net using their hands effectively. The key goal is to bat the ball in such a way that it touches the opponent team’s court. It is very important to remember that before the game, you need to warm up so that your body is ready for physical exercise. Without a good warm-up, you might get an injury. Although the goal of any game is to win, safety comes first.`
const ru = `Каждый хочет быть здоровым. Хорошее здоровье влияет на то, как люди ведут себя, работают и взаимодействуют друг с другом. Как гласит пословица, “Здоровье - это богатство”. Здоровье - это ключевая польза, которую приносят занятия спортом. Люди, которые занимаются спортом, как правило, хорошо дисциплинированы и устойчивы к стрессам. Эти качества необходимы для эффективного личностного и профессионального развития. В настоящее время существует множество возможностей, предлагаемых тем людям, которые хотят быть в форме. Фитнес-клубы и спортивные центры доступны для людей разных возрастов. Также здесь есть общественные места для занятий физическими упражнениями. Учащиеся занимаются по специальным школьным и университетским программам, которые гарантируют их успешное физическое развитие. Они могут заниматься различными видами спорта, чтобы найти наиболее привлекательное спортивное занятие. Среди них бег, плавание, фитнес, езда на велосипеде, футбол и йога - вот лишь некоторые из них. Регулярные физические упражнения помогают стимулировать мышцы и добиваться лучших результатов в любом виде спорта. Что касается меня, то мой любимый вид спорта - волейбол. Это традиционная командная игра, которая очень популярна во всем мире. Игра в волейбол учит меня, как стать лидером, ставить цели, организовывать командную работу, а также развивать уверенность в себе и самодисциплину. Мое участие в спортивных соревнованиях позволяет мне улучшить свою физическую форму и умственные способности. Дальнейший успех в моей карьере зависит от этих аспектов. Правила этой игры просты для понимания. Две команды, состоящие из шести игроков в каждой, проводят матч. В эту игру в помещении играют с мячом. Победителем волейбольного сета становится команда, набравшая 25 очков. Для каждого игрока важно эффективно перебрасывать мяч через сетку, используя свои руки. Ключевая цель состоит в том, чтобы отбить мяч таким образом, чтобы он коснулся площадки команды соперника. Очень важно помнить, что перед игрой вам нужно размяться, чтобы ваше тело было готово к физическим упражнениям. Без хорошей разминки вы можете получить травму. Хотя целью любой игры является победа, безопасность стоит на первом месте.`

export const text = {
    en,
    ru
}

export const audioTasks = [
    {
        number: 1,
        title: '1. Which is true?',
        answers: [
            {
                id: 1,
                answer: 'only young people can do sports',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'you can do only one type of sports',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'you can do sports at any age',
                isCorrect: true
            }
        ]
    },
    {
        number: 2,
        title: "2. People who exercise are",
        answers: [
            {
                id: 1,
                answer: 'disciplined',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'lazy',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'weak',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. How volleyball affects me?',
        answers: [
            {
                id: 1,
                answer: 'helps me jump higher',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'achieve set goals',
                isCorrect: true
            },
            {
                id: 3,
                answer: "destroy self-confidence",
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
  { en: 'Everyone', ru: 'Каждый' },
  { en: 'wants', ru: 'хочет' },
  { en: 'to', ru: 'чтобы' },
  { en: 'be', ru: 'быть' },
  { en: 'healthy', ru: 'здоровым' },
  { en: 'Good', ru: 'Хорошее' },
  { en: 'health', ru: 'здоровье' },
  { en: 'affects', ru: 'влияет' },
  { en: 'the', ru: 'артикль' },
  { en: 'way', ru: 'способ' },
  { en: 'people', ru: 'люди' },
  { en: 'behave', ru: 'вести себя' },
  { en: 'work', ru: 'работа' },
  { en: 'and', ru: 'и' },
  { en: 'interact', ru: 'взаимодействовать' },
  { en: 'with', ru: 'с' },
  { en: 'each', ru: 'каждым' },
  { en: 'other', ru: 'другом' },
  { en: 'As', ru: 'Как' },
  { en: 'proverb', ru: 'пословица' },
  { en: 'goes', ru: 'гласит' },
  { en: 'Health', ru: 'Здоровье' },
  { en: 'is', ru: 'является' },
  { en: 'wealth', ru: 'богатство' },
  { en: 'key', ru: 'ключевое' },
  { en: 'benefit', ru: 'преимущество' },
  { en: 'provided', ru: 'предоставляемое' },
  { en: 'by', ru: 'через' },
  { en: 'sports', ru: 'спорт' },
  { en: 'activities', ru: 'активности' },
  { en: 'People', ru: 'Люди' },
  { en: 'who', ru: 'которые' },
  { en: 'exercise', ru: 'занимаются спортом' },
  { en: 'tend', ru: 'имеют тенденцию' },
  { en: 'well', ru: 'хорошо' },
  { en: 'disciplined', ru: 'дисциплинированным' },
  { en: 'stress', ru: 'стресс' },
  { en: 'resistant', ru: 'стойким к стрессу' },
  { en: 'These', ru: 'Эти' },
  { en: 'qualities', ru: 'качества' },
  { en: 'are', ru: 'являются' },
  { en: 'essential', ru: 'необходимыми' },
  { en: 'for', ru: 'для' },
  { en: 'effectiveness', ru: 'эффективности' },
  { en: 'of', ru: 'в' },
  { en: 'personal', ru: 'личного' },
  { en: 'professional', ru: 'профессионального' },
  { en: 'development', ru: 'развития' },
  { en: 'Currently', ru: 'В настоящее время' },
  { en: 'there', ru: 'есть' },
  { en: 'many', ru: 'множество' },
  { en: 'opportunities', ru: 'возможности' },
  { en: 'offered', ru: 'предоставляемые' },
  { en: 'those', ru: 'те, кто' },
  { en: 'want', ru: 'хочет' },
  { en: 'fit', ru: 'подходящим' },
  { en: 'Fitness', ru: 'Фитнес' },
  { en: 'clubs', ru: 'клубы' },
  { en: 'athletic', ru: 'спортивные' },
  { en: 'centers', ru: 'центры' },
  { en: 'available', ru: 'доступные' },
  { en: 'different', ru: 'разные' },
  { en: 'ages', ru: 'возрасты' },
  { en: 'Also', ru: 'Также' },
  { en: 'public', ru: 'общественные' },
  { en: 'places', ru: 'места' },
  { en: 'physical', ru: 'физические' },
  { en: 'Students', ru: 'Студенты' },
  { en: 'engaged', ru: 'занимаются' },
  { en: 'in', ru: 'в' },
  { en: 'special', ru: 'особых' },
  { en: 'school', ru: 'школьных' },
  { en: 'university', ru: 'университетских' },
  { en: 'programs', ru: 'программах' },
  { en: 'that', ru: 'которые' },
  { en: 'guarantee', ru: 'гарантируют' },
  { en: 'their', ru: 'их' },
  { en: 'successful', ru: 'успешное' },
  { en: 'They', ru: 'Они' },
  { en: 'can', ru: 'могут' },
  { en: 'participate', ru: 'участвовать' },
  { en: 'find', ru: 'найти' },
  { en: 'most', ru: 'наиболее' },
  { en: 'appealing', ru: 'привлекательные' },
  { en: 'activity', ru: 'активность' },
  { en: 'Among', ru: 'Среди' },
  { en: 'them', ru: 'них' },
  { en: 'running', ru: 'бег' },
  { en: 'swimming', ru: 'плавание' },
  { en: 'fitness', ru: 'фитнес' },
  { en: 'cycling', ru: 'велосипедная езда' },
  { en: 'football', ru: 'футбол' },
  { en: 'yoga', ru: 'йога' },
  { en: 'name', ru: 'называть' },
  { en: 'a', ru: 'несколько' },
  { en: 'few', ru: 'несколько' },
  { en: 'Regular', ru: 'Регулярные' },
  { en: 'exercises', ru: 'упражнения' },
  { en: 'help', ru: 'помогать' },
  { en: 'stimulate', ru: 'стимулировать' },
  { en: 'muscles', ru: 'мышцы' },
  { en: 'get', ru: 'получать' },
  { en: 'better', ru: 'лучше' },
  { en: 'results', ru: 'результаты' },
  { en: 'any', ru: 'любой' },
  { en: 'sport', ru: 'вид спорта' },
  { en: 'me', ru: 'мне' },
  { en: 'my', ru: 'моему' },
  { en: 'favorite', ru: 'любимый' },
  { en: 'volleyball', ru: 'волейбол' },
  { en: 'This', ru: 'Это' },
  { en: 'traditional', ru: 'традиционная' },
  { en: 'team', ru: 'командная' },
  { en: 'game', ru: 'игра' },
  { en: 'very', ru: 'очень' },
  { en: 'popular', ru: 'популярна' },
  { en: 'across', ru: 'по всему' },
  { en: 'world', ru: 'миру' },
  { en: 'Playing', ru: 'Играя' },
  { en: 'teaches', ru: 'учит' },
  { en: 'how', ru: 'как' },
  { en: 'become', ru: 'стать' },
  { en: 'leader', ru: 'лидером' },
  { en: 'set', ru: 'устанавливать' },
  { en: 'goals', ru: 'цели' },
  { en: 'organize', ru: 'организовывать' },
  { en: 'teamwork', ru: 'командной работе' },
  { en: 'develop', ru: 'развивать' },
  { en: 'self', ru: 'само' },
  { en: 'confidence', ru: 'уверенность' },
  { en: 'discipline', ru: 'дисциплину' },
  { en: 'My', ru: 'Мое' },
  { en: 'participation', ru: 'участие' },
  { en: 'competitions', ru: 'соревнованиях' },
  { en: 'allows', ru: 'позволяет' },
  { en: 'improve', ru: 'улучшать' },
  { en: 'mental', ru: 'психические' },
  { en: 'abilities', ru: 'способности' },
  { en: 'Further', ru: 'Дальнейший' },
  { en: 'success', ru: 'успех' },
  { en: 'career', ru: 'карьера' },
  { en: 'depends', ru: 'зависит' },
  { en: 'on', ru: 'от' },
  { en: 'these', ru: 'этих' },
  { en: 'aspects', ru: 'аспектов' },
  { en: 'The', ru: 'артикль' },
  { en: 'rules', ru: 'правила' },
  { en: 'this', ru: 'этой' },
  { en: 'easy', ru: 'просты' },
  { en: 'understand', ru: 'понимание' },
  { en: 'Two', ru: 'Два' },
  { en: 'teams', ru: 'команды' },
  { en: 'consisting', ru: 'состоящие' },
  { en: 'six', ru: 'шесть' },
  { en: 'players', ru: 'игроков' },
  { en: 'play', ru: 'играют' },
  { en: 'match', ru: 'матч' },
  { en: 'indoor', ru: 'закрытый' },
  { en: 'played', ru: 'играется' },
  { en: 'ball', ru: 'мяч' },
  { en: 'winner', ru: 'победитель' },
  { en: 'gains', ru: 'получает' },
  { en: '25', ru: '25' },
  { en: 'points', ru: 'очков' },
  { en: 'It', ru: 'Это' },
  { en: 's', ru: 'это' },
  { en: 'important', ru: 'важно' },
  { en: 'every', ru: 'каждому' },
  { en: 'player', ru: 'игроку' },
  { en: 'bat', ru: 'ударять' },
  { en: 'over', ru: 'через' },
  { en: 'net', ru: 'сетку' },
  { en: 'using', ru: 'используя' },
  { en: 'hands', ru: 'руками' },
  { en: 'effectively', ru: 'эффективно' },
  { en: 'goal', ru: 'гол' },
  { en: 'such', ru: 'такой' },
  { en: 'it', ru: 'это' },
  { en: 'touches', ru: 'касается' },
  { en: 'opponent', ru: 'соперника' },
  { en: 'court', ru: 'площадку' },
  { en: 'remember', ru: 'помните' },
  { en: 'before', ru: 'перед' },
  { en: 'you', ru: 'вы' },
  { en: 'need', ru: 'нужно' },
  { en: 'warm', ru: 'разогреться' },
  { en: 'up', ru: 'перед' },
  { en: 'so', ru: 'чтобы' },
  { en: 'your', ru: 'ваше' },
  { en: 'body', ru: 'тело' },
  { en: 'ready', ru: 'готово' },
  { en: 'Without', ru: 'Без' },
  { en: 'good', ru: 'хорошей' },
  { en: 'might', ru: 'возможно' },
  { en: 'an', ru: 'повреждение' },
  { en: 'injury', ru: 'травма' },
  { en: 'Although', ru: 'Хотя' },
  { en: 'win', ru: 'победить' },
  { en: 'safety', ru: 'безопасность' },
  { en: 'comes', ru: 'идет впереди' },
  { en: 'first', ru: 'первой' },
  { en: `team’s`, ru: 'команды'},
  { en: `“Health`, ru: 'здоровье'},
  { en: `wealth”`, ru: 'здоровье'},
  { en: `It’s`, ru: 'его'},
  { en: `warmup`, ru: 'разминка'},
    ];
  