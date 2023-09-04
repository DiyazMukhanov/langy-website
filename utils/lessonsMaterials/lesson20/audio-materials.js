const en = `The system of education in the United States is rather complicated. It is exposed to the constant changes of federal policies, adaptation to various social needs, and the emergence of new pedagogical methods. In most schools, it is divided into three levels: elementary school – grades 1 to 5, middle school — grades 6 to 8, high school — grades 9 to 12. This 12-year system is called “K-12”. K-12 stands for the grades for students of various age groups from the kindergarten age (5 years old) to the 12th grade age (18 years old). There are three types of schools in the United States: public, private, and home schools. Public schooling is financed by federal, state, and local authorities. Parents do not pay for their children’s education. Private schools have a right to choose their curriculum and establish their policies. This kind of education is not free of charge. Homeschooling addresses the needs of parents who do not want their children to attend regular schools for certain reasons. Among home school students are children with special needs and children whose parents support non-traditional methods of learning. There are also young athletes and celebrities whose tight schedule do not leave them enough time for going to school. About 3% of children are homeschooled in the USA. The necessary standards of education in the United States are set by state governments. As a rule, the key requirement for American students is to pass obligatory standardized tests developed for the K-12 schooling system. After high school, children have several options. First, they can choose a 4-year college or university program and get the education for the selected professional career. Second, children can choose a 2-year program in college and get prepared for their future career choice. Third, high school graduates can enter a vocational school and learn a trade to have an opportunity to be employed in a specific field of occupation such as design, baking or carpentry. Fourth, graduates of high schools can choose to serve in the US armed forces. Fifth, if children are not ready to continue their education, they can have a gap year. Most kids prefer to spend this time exploring their life preferences and individual interests through active involvement in various jobs, internships, volunteering work, or traveling.`
const ru = `Образование в США Система образования в Соединенных Штатах довольно сложная. Она подвержена постоянным изменениям федеральной политики, адаптации к различным социальным потребностям и появлению новых педагогических методов. В большинстве школ он разделен на три уровня: начальная школа – с 1 по 5 классы, средняя школа — с 6 по 8 классы, старшая школа — с 9 по 12 классы. Эта 12-летняя система называется “К-12”. К-12 означает оценки для учащихся различных возрастных групп, начиная с детского сада (5 лет) и заканчивая 12-м классом (18 лет). В Соединенных Штатах существует три типа школ: государственные, частные и домашние школы. Государственное школьное образование финансируется федеральными властями, властями штата и местными органами власти. Родители не платят за образование своих детей. Частные школы имеют право выбирать свою учебную программу и устанавливать свою политику. Этот вид образования не является бесплатным. Домашнее обучение удовлетворяет потребности родителей, которые по определенным причинам не хотят, чтобы их дети посещали обычные школы. Среди учащихся домашней школы есть дети с особыми потребностями и дети, чьи родители поддерживают нетрадиционные методы обучения. Есть также юные спортсмены и знаменитости, чей плотный график не оставляет им достаточно времени для посещения школы. Около 3% детей в США обучаются на дому. Необходимые стандарты образования в Соединенных Штатах устанавливаются правительствами штатов. Как правило, ключевым требованием к американским учащимся является сдача обязательных стандартизированных тестов, разработанных для школьной системы K-12. После окончания средней школы у детей есть несколько вариантов. Во-первых, они могут выбрать 4-летнюю программу колледжа или университета и получить образование для выбранной профессиональной карьеры. Во-вторых, дети могут выбрать 2-летнюю программу обучения в колледже и подготовиться к выбору будущей профессии. В-третьих, выпускники средней школы могут поступить в профессиональное училище и освоить профессию, чтобы иметь возможность работать в определенной сфере деятельности, такой как дизайн, выпечка или столярное дело. В-четвертых, выпускники средних школ могут выбрать службу в вооруженных силах США. В-пятых, если дети не готовы продолжать свое образование, у них может быть год перерыва. Большинство детей предпочитают потратить это время на изучение своих жизненных предпочтений и индивидуальных интересов путем активного участия в различных работах, стажировках, волонтерской работе или путешествиях.`

export const text = {
    en,
    ru
}
// complete
export const audioTasks = [
    {
        number: 1,
        title: '1. What does "K-12" stand for in the American education system?',
        answers: [
            {
                id: 1,
                answer: 'Grades kindergarten to 5th',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Grades 6 to 12',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'Grades kindergarten to 12th ',
                isCorrect: true
            }
        ]
    },
    {
        number: 2,
        title: "2. Who finances public schooling in the United States?",
        answers: [
            {
                id: 1,
                answer: 'Federal, state, and local authorities',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'Private organizations',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'Students themselves',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. What is one reason some parents choose homeschooling for their children?',
        answers: [
            {
                id: 1,
                answer: 'Homeschooling is free of charge',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'Homeschooling provides better sports opportunities',
                isCorrect: false
            },
            {
                id: 3,
                answer: "Homeschooling supports non-traditional learning methods and special needs",
                isCorrect: true
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'The', ru: 'Артикль' },
  { en: 'system', ru: 'система' },
  { en: 'of', ru: 'из' },
  { en: 'education', ru: 'образования' },
  { en: 'in', ru: 'в' },
  { en: 'the', ru: 'артикль' },
  { en: 'United', ru: 'United' },
  { en: 'States', ru: 'States' },
  { en: 'is', ru: 'является' },
  { en: 'rather', ru: 'довольно' },
  { en: 'complicated', ru: 'сложной' },
  { en: 'It', ru: 'Это' },
  { en: 'exposed', ru: 'подвергается' },
  { en: 'to', ru: 'к' },
  { en: 'constant', ru: 'постоянным' },
  { en: 'changes', ru: 'изменениям' },
  { en: 'in', ru: 'в' },
  { en: 'federal', ru: 'федеральной' },
  { en: 'policies', ru: 'политике' },
  { en: 'adaptation', ru: 'адаптации' },
  { en: 'various', ru: 'различным' },
  { en: 'social', ru: 'социальным' },
  { en: 'needs', ru: 'потребностям' },
  { en: 'and', ru: 'и' },
  { en: 'emergence', ru: 'появлению' },
  { en: 'new', ru: 'новых' },
  { en: 'pedagogical', ru: 'педагогических' },
  { en: 'methods', ru: 'методов' },
  { en: 'In', ru: 'В' },
  { en: 'most', ru: 'большинстве' },
  { en: 'schools', ru: 'школ' },
  { en: 'it', ru: 'оно' },
  { en: 'divided', ru: 'разделено' },
  { en: 'into', ru: 'на' },
  { en: 'three', ru: 'три' },
  { en: 'levels', ru: 'уровня' },
  { en: 'elementary', ru: 'начальная' },
  { en: 'school', ru: 'школа' },
  { en: 'grades', ru: 'классами' },
  { en: '1', ru: '1' },
  { en: '5', ru: '5' },
  { en: 'middle', ru: 'средняя' },
  { en: '6', ru: '6' },
  { en: '8', ru: '8' },
  { en: 'high', ru: 'старшая' },
  { en: '9', ru: '9' },
  { en: '12', ru: '12' },
  { en: 'This', ru: 'Этот' },
  { en: 'year', ru: 'год' },
  { en: 'called', ru: 'называется' },
  { en: 'K', ru: 'K' },
  { en: 'stands', ru: 'означает' },
  { en: 'for', ru: 'для' },
  { en: 'students', ru: 'студентов' },
  { en: 'age', ru: 'возрастов' },
  { en: 'groups', ru: 'групп' },
  { en: 'from', ru: 'от' },
  { en: 'kindergarten', ru: 'детский сад' },
  { en: 'years', ru: 'лет' },
  { en: 'old', ru: 'старый' },
  { en: '12th', ru: '12-й' },
  { en: 'grade', ru: 'класс' },
  { en: '18', ru: '18' },
  { en: 'There', ru: 'Есть' },
  { en: 'are', ru: 'существуют' },
  { en: 'types', ru: 'типы' },
  { en: 'public', ru: 'государственные' },
  { en: 'private', ru: 'частные' },
  { en: 'home', ru: 'домашнее' },
  { en: 'Public', ru: 'Государственное' },
  { en: 'schooling', ru: 'образование' },
  { en: 'financed', ru: 'финансируется' },
  { en: 'by', ru: 'государством' },
  { en: 'state', ru: 'штатов' },
  { en: 'local', ru: 'местными' },
  { en: 'authorities', ru: 'органами' },
  { en: 'Parents', ru: 'Родители' },
  { en: 'do', ru: 'не' },
  { en: 'not', ru: 'платят' },
  { en: 'pay', ru: 'за' },
  { en: 'their', ru: 'своих' },
  { en: 'children', ru: 'детей' },
  { en: 's', ru: '' },
  { en: 'Private', ru: 'Частные' },
  { en: 'have', ru: 'имеют' },
  { en: 'a', ru: 'возможность' },
  { en: 'right', ru: 'право' },
  { en: 'choose', ru: 'выбирать' },
  { en: 'curriculum', ru: 'учебный план' },
  { en: 'establish', ru: 'устанавливать' },
  { en: 'kind', ru: 'вид' },
  { en: 'free', ru: 'свободный' },
  { en: 'charge', ru: 'плата' },
  { en: 'Homeschooling', ru: 'Обучение дома' },
  { en: 'addresses', ru: 'рассматривает' },
  { en: 'parents', ru: 'родителей' },
  { en: 'who', ru: 'которые' },
  { en: 'want', ru: 'хотят' },
  { en: 'attend', ru: 'посещать' },
  { en: 'regular', ru: 'обычные' },
  { en: 'certain', ru: 'определенные' },
  { en: 'reasons', ru: 'причины' },
  { en: 'Among', ru: 'Среди' },
  { en: 'with', ru: 'с' },
  { en: 'special', ru: 'особыми' },
  { en: 'whose', ru: 'чья' },
  { en: 'support', ru: 'поддержка' },
  { en: 'non', ru: 'нетрадиционным' },
  { en: 'traditional', ru: 'традиционным' },
  { en: 'learning', ru: 'образованием' },
  { en: 'also', ru: 'также' },
  { en: 'young', ru: 'молодые' },
  { en: 'athletes', ru: 'спортсмены' },
  { en: 'celebrities', ru: 'знаменитости' },
  { en: 'tight', ru: 'плотное' },
  { en: 'schedule', ru: 'расписание' },
  { en: 'leave', ru: 'оставляет' },
  { en: 'them', ru: 'им' },
  { en: 'enough', ru: 'достаточно' },
  { en: 'time', ru: 'времени' },
  { en: 'going', ru: 'для' },
  { en: 'About', ru: 'Около' },
  { en: '3', ru: '3' },
  { en: 'homeschooled', ru: 'учатся дома' },
  { en: 'USA', ru: 'США' },
  { en: 'necessary', ru: 'необходимые' },
  { en: 'standards', ru: 'стандарты' },
  { en: 'set', ru: 'устанавливаются' },
  { en: 'governments', ru: 'правительствами' },
  { en: 'As', ru: 'Как' },
  { en: 'rule', ru: 'правило' },
  { en: 'key', ru: 'ключевое' },
  { en: 'requirement', ru: 'требование' },
  { en: 'American', ru: 'американцы' },
  { en: 'pass', ru: 'сдать' },
  { en: 'obligatory', ru: 'обязательные' },
  { en: 'standardized', ru: 'стандартизированные' },
  { en: 'tests', ru: 'тесты' },
  { en: 'developed', ru: 'разработанные' },
  { en: 'After', ru: 'После' },
  { en: 'several', ru: 'нескольких' },
  { en: 'options', ru: 'вариантов' },
  { en: 'First', ru: 'Во-первых' },
  { en: 'they', ru: 'они' },
  { en: 'can', ru: 'могут' },
  { en: '4', ru: '4' },
  { en: 'college', ru: 'колледж' },
  { en: 'or', ru: 'или' },
  { en: 'university', ru: 'университет' },
  { en: 'program', ru: 'программу' },
  { en: 'get', ru: 'получить' },
  { en: 'selected', ru: 'выбранным' },
  { en: 'professional', ru: 'профессиональным' },
  { en: 'career', ru: 'карьеру' },
  { en: 'Second', ru: 'Во-вторых' },
  { en: '2', ru: '2' },
  { en: 'prepared', ru: 'подготовлены' },
  { en: 'future', ru: 'будущее' },
  { en: 'choice', ru: 'выбор' },
  { en: 'Third', ru: 'В-третьих' },
  { en: 'graduates', ru: 'выпускники' },
  { en: 'enter', ru: 'поступают' },
  { en: 'vocational', ru: 'профессиональное' },
  { en: 'learn', ru: 'изучить' },
  { en: 'trade', ru: 'профессию' },
  { en: 'an', ru: 'в' },
  { en: 'opportunity', ru: 'возможность' },
  { en: 'be', ru: 'стать' },
  { en: 'employed', ru: 'трудоустроенными' },
  { en: 'specific', ru: 'конкретной' },
  { en: 'field', ru: 'области' },
  { en: 'occupation', ru: 'деятельности' },
  { en: 'such', ru: 'как' },
  { en: 'as', ru: 'например' },
  { en: 'design', ru: 'дизайн' },
  { en: 'baking', ru: 'выпечка' },
  { en: 'carpentry', ru: 'плотничество' },
  { en: 'Fourth', ru: 'В-четвертых' },
  { en: 'serve', ru: 'служить' },
  { en: 'US', ru: 'США' },
  { en: 'armed', ru: 'вооруженными' },
  { en: 'forces', ru: 'силами' },
  { en: 'Fifth', ru: 'В-пятых' },
  { en: 'if', ru: 'если' },
  { en: 'ready', ru: 'готовы' },
  { en: 'continue', ru: 'продолжить' },
  { en: 'gap', ru: 'пробел' },
  { en: 'Most', ru: 'Большинство' },
  { en: 'kids', ru: 'дети' },
  { en: 'prefer', ru: 'предпочитают' },
  { en: 'spend', ru: 'провести' },
  { en: 'this', ru: 'это' },
  { en: 'exploring', ru: 'исследование' },
  { en: 'life', ru: 'жизни' },
  { en: 'preferences', ru: 'предпочтения' },
  { en: 'individual', ru: 'индивидуальные' },
  { en: 'interests', ru: 'интересы' },
  { en: 'through', ru: 'через' },
  { en: 'active', ru: 'активное' },
  { en: 'involvement', ru: 'участие' },
  { en: 'jobs', ru: 'работы' },
  { en: 'internships', ru: 'стажировки' },
  { en: 'volunteering', ru: 'волонтерство' },
  { en: 'work', ru: 'работу' },
  { en: 'traveling', ru: 'путешествия' },
  { en: 'children’s', ru: 'детей' },
  { en: 'nontraditional', ru: 'нетрадиционный' },
   
  ];
  