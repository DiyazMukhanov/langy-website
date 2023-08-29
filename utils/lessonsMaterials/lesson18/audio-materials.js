const en = `The United States is considered to be one of the countries with the largest territories. It is situated in North America, an amazing continent with its beautiful nature and diverse climatic zones. The country’s landscape includes both high mountains and flat prairies. The weather conditions range from arctic cold in the northern parts to tropical heat in the southern parts. The main water bodies on the territory of the USA include  such rivers as Mississippi, Missouri, the Rio Grande. These rivers provide a sufficient amount of drinking water to supply the nation. They also serve as vital sources of irrigation for farming. As the United States is ranked as the country with the highest population (328.2 million) after India and China, many people live in urban and rural areas. The major metropolitan areas which are well-known across the world include New York City, located in the state with the same name, Los Angeles situated in the western state of California, Chicago in Illinois, and others. The most influential industries are real estate, finance, insurance, health care and social support services, trade, and other industries. Many top-producing plants and factories are placed in urbanized areas. This location poses certain environmental threats to local communities and natural resources. State authorities issue policies and programs aimed at protecting the environment. The USA is a highly developed capitalist country based on economic freedom, international trade, and a focus on technological innovation. The economy incorporates both private businesses and public entities. All citizens have the right to ensure control over their properties and labor relations. The United States is a federal republic that consists of 50 self-governing states and the DC. The US Congress is the legal institution that ensures both law-making, and adequate control over the adherence to laws by the executive branch. The Constitution is the basic legal document that contains the principles and precedents adopted by the federal government. It determines the major rights of American citizens. In American democratic society, the Constitution guarantees the power of citizens to control the functioning of the government. The United States is well-known as the so-called “melting pot” because it is comprised of a number of people of different cultural and ethnic backgrounds. People of all ages, races, and nationalities who have got a citizenship status understand the important role of cross-cultural adaptation. There are many special events organized across the country that foster immigrants’ adaptation and acculturation through increased communication with locals and sharing their cultural experiences with them. `
const ru = `Соединенные Штаты считаются одной из стран с самыми большими территориями. Он расположен в Северной Америке, удивительном континенте с его прекрасной природой и разнообразными климатическими зонами. Ландшафт страны включает в себя как высокие горы, так и равнинные прерии. Погодные условия варьируются от арктического холода в северных районах до тропической жары в южных. К основным водоемам на территории США относятся такие реки, как Миссисипи, Миссури, Рио-Гранде. Эти реки обеспечивают достаточное количество питьевой воды для снабжения страны. Они также служат жизненно важными источниками орошения для сельского хозяйства. Поскольку Соединенные Штаты считаются страной с самым высоким населением (328,2 миллиона человек) после Индии и Китая, многие люди живут в городских и сельских районах. К крупным мегаполисам, которые хорошо известны во всем мире, относятся Нью-Йорк, расположенный в одноименном штате, Лос-Анджелес, расположенный в западном штате Калифорния, Чикаго в Иллинойсе и другие. Наиболее влиятельными отраслями являются недвижимость, финансы, страхование, здравоохранение и социальная поддержка, торговля и другие отрасли. Многие заводы и фабрики с самым высоким уровнем производства расположены в урбанизированных районах. Это местоположение создает определенные экологические угрозы для местных сообществ и природных ресурсов. Государственные органы разрабатывают политику и программы, направленные на защиту окружающей среды. США - высокоразвитая капиталистическая страна, основанная на экономической свободе, международной торговле и ориентированная на технологические инновации. Экономика включает в себя как частные предприятия, так и государственные структуры. Все граждане имеют право обеспечивать контроль над своим имуществом и трудовыми отношениями. Соединенные Штаты - федеративная республика, состоящая из 50 самоуправляющихся штатов и округа Колумбия. Конгресс США является правовым институтом, который обеспечивает как законотворчество, так и надлежащий контроль за соблюдением законов исполнительной властью. Конституция является основным правовым документом, содержащим принципы и прецеденты, принятые федеральным правительством. Он определяет основные права американских граждан. В американском демократическом обществе Конституция гарантирует гражданам право контролировать функционирование правительства. Соединенные Штаты хорошо известны как так называемый “плавильный котел”, потому что они состоят из множества людей разного культурного и этнического происхождения. Люди всех возрастов, рас и национальностей, получившие статус гражданина, понимают важную роль межкультурной адаптации. По всей стране организовано множество специальных мероприятий, которые способствуют адаптации иммигрантов и аккультурации благодаря расширению общения с местными жителями и обмену с ними своим культурным опытом.`

export const text = {
    en,
    ru
}
// complete
export const audioTasks = [
    {
        number: 1,
        title: '1. Where people take water for drinking?',
        answers: [
            {
                id: 1,
                answer: 'river',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'ocean',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'mountain',
                isCorrect: false
            }
        ]
    },
    {
        number: 2,
        title: "2. What is the biggest city in US?",
        answers: [
            {
                id: 1,
                answer: 'New York',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'Chicago',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'LA',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: '3. What unites americans?',
        answers: [
            {
                id: 1,
                answer: 'constitution',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'cultural experience',
                isCorrect: true
            },
            {
                id: 3,
                answer: "government",
                isCorrect: false
            }
        ]
    },
]

export const wordsWithTranslations = [
    { en: 'The', ru: 'С' },
    { en: 'United', ru: 'Объединенные' },
    { en: 'States', ru: 'Штаты' },
    { en: 'is', ru: 'является' },
    { en: 'considered', ru: 'считается' },
    { en: 'to', ru: 'чтобы' },
    { en: 'be', ru: 'быть' },
    { en: 'one', ru: 'один' },
    { en: 'of', ru: 'из' },
    { en: 'the', ru: 'этих' },
    { en: 'countries', ru: 'стран' },
    { en: 'with', ru: 'с' },
    { en: 'largest', ru: 'самый большой' },
    { en: 'territories', ru: 'территориями' },
    { en: 'It', ru: 'Это' },
    { en: 'situated', ru: 'расположено' },
    { en: 'in', ru: 'в' },
    { en: 'North', ru: 'Северной' },
    { en: 'America', ru: 'Америке' },
    { en: 'an', ru: 'одной' },
    { en: 'amazing', ru: 'удивительной' },
    { en: 'continent', ru: 'континент' },
    { en: 'its', ru: 'его' },
    { en: 'beautiful', ru: 'красивой' },
    { en: 'nature', ru: 'природой' },
    { en: 'and', ru: 'и' },
    { en: 'diverse', ru: 'разнообразными' },
    { en: 'climatic', ru: 'климатическими' },
    { en: 'zones', ru: 'зонами' },
    { en: 'country', ru: 'страной' },
    { en: 's', ru: 'с' },
    { en: 'landscape', ru: 'ландшафтом' },
    { en: 'includes', ru: 'включает в себя' },
    { en: 'both', ru: 'и' },
    { en: 'high', ru: 'высокими' },
    { en: 'mountains', ru: 'горами' },
    { en: 'flat', ru: 'плоскими' },
    { en: 'prairies', ru: 'лугами' },
    { en: 'weather', ru: 'погодные' },
    { en: 'conditions', ru: 'условия' },
    { en: 'range', ru: 'диапазон' },
    { en: 'from', ru: 'от' },
    { en: 'arctic', ru: 'арктического' },
    { en: 'cold', ru: 'холода' },
    { en: 'northern', ru: 'северных' },
    { en: 'parts', ru: 'частей' },
    { en: 'tropical', ru: 'тропической' },
    { en: 'heat', ru: 'жары' },
    { en: 'southern', ru: 'южных' },
    { en: 'main', ru: 'главной' },
    { en: 'water', ru: 'водой' },
    { en: 'bodies', ru: 'водоемы' },
    { en: 'on', ru: 'на' },
    { en: 'territory', ru: 'территории' },
    { en: 'USA', ru: 'США' },
    { en: 'include', ru: 'включают' },
    { en: 'such', ru: 'такие' },
    { en: 'rivers', ru: 'реки' },
    { en: 'as', ru: 'как' },
    { en: 'Mississippi', ru: 'Миссисипи' },
    { en: 'Missouri', ru: 'Миссури' },
    { en: 'Rio', ru: 'Рио' },
    { en: 'Grande', ru: 'Гранде' },
    { en: 'These', ru: 'Эти' },
    { en: 'provide', ru: 'обеспечивают' },
    { en: 'a', ru: 'достаточное' },
    { en: 'sufficient', ru: 'достаточное' },
    { en: 'amount', ru: 'количество' },
    { en: 'drinking', ru: 'питьевой' },
    { en: 'supply', ru: 'поставку' },
    { en: 'nation', ru: 'нацию' },
    { en: 'They', ru: 'Они' },
    { en: 'also', ru: 'также' },
    { en: 'serve', ru: 'служат' },
    { en: 'vital', ru: 'жизненно важными' },
    { en: 'sources', ru: 'источниками' },
    { en: 'irrigation', ru: 'орошения' },
    { en: 'for', ru: 'для' },
    { en: 'farming', ru: 'сельского хозяйства' },
    { en: 'As', ru: 'Поскольку' },
    { en: 'ranked', ru: 'расположенные' },
    { en: 'highest', ru: 'высшими' },
    { en: 'population', ru: 'населения' },
    { en: '328', ru: '328' },
    { en: '2', ru: '2' },
    { en: 'million', ru: 'миллионов' },
    { en: 'after', ru: 'после' },
    { en: 'India', ru: 'Индии' },
    { en: 'China', ru: 'Китае' },
    { en: 'many', ru: 'многие' },
    { en: 'people', ru: 'люди' },
    { en: 'live', ru: 'живут' },
    { en: 'urban', ru: 'городских' },
    { en: 'rural', ru: 'сельских' },
    { en: 'areas', ru: 'территориях' },
    { en: 'major', ru: 'крупные' },
    { en: 'metropolitan', ru: 'мегаполисы' },
    { en: 'which', ru: 'которые' },
    { en: 'are', ru: 'являются' },
    { en: 'well', ru: 'хорошо' },
    { en: 'known', ru: 'известными' },
    { en: 'across', ru: 'по всему' },
    { en: 'world', ru: 'миру' },
    { en: 'New', ru: 'Нью' },
    { en: 'York', ru: 'Йорк' },
    { en: 'City', ru: 'город' },
    { en: 'located', ru: 'расположенный' },
    { en: 'state', ru: 'штат' },
    { en: 'same', ru: 'тот же' },
    { en: 'name', ru: 'имя' },
    { en: 'Los', ru: 'Лос' },
    { en: 'Angeles', ru: 'Анджелес' },
    { en: 'western', ru: 'западной' },
    { en: 'California', ru: 'Калифорнии' },
    { en: 'Chicago', ru: 'Чикаго' },
    { en: 'Illinois', ru: 'Иллинойс' },
    { en: 'others', ru: 'другие' },
    { en: 'most', ru: 'наиболее' },
    { en: 'influential', ru: 'влиятельные' },
    { en: 'industries', ru: 'индустрии' },
    { en: 'real', ru: 'недвижимость' },
    { en: 'estate', ru: 'имущество' },
    { en: 'finance', ru: 'финансы' },
    { en: 'insurance', ru: 'страхование' },
    { en: 'health', ru: 'здравоохранение' },
    { en: 'care', ru: 'забота' },
    { en: 'social', ru: 'социальное' },
    { en: 'support', ru: 'поддержка' },
    { en: 'services', ru: 'услуги' },
    { en: 'trade', ru: 'торговля' },
    { en: 'other', ru: 'другие' },
    { en: 'Many', ru: 'Многие' },
    { en: 'top', ru: 'топовые' },
    { en: 'producing', ru: 'производящие' },
    { en: 'plants', ru: 'заводы' },
    { en: 'factories', ru: 'фабрики' },
    { en: 'placed', ru: 'расположенные' },
    { en: 'urbanized', ru: 'урбанизированные' },
    { en: 'This', ru: 'Это' },
    { en: 'location', ru: 'местоположение' },
    { en: 'poses', ru: 'представляет' },
    { en: 'certain', ru: 'определенные' },
    { en: 'environmental', ru: 'экологические' },
    { en: 'threats', ru: 'угрозы' },
    { en: 'local', ru: 'местные' },
    { en: 'communities', ru: 'сообщества' },
    { en: 'natural', ru: 'природные' },
    { en: 'resources', ru: 'ресурсы' },
    { en: 'State', ru: 'государственные' },
    { en: 'authorities', ru: 'органы власти' },
    { en: 'issue', ru: 'вызов' },
    { en: 'policies', ru: 'политики' },
    { en: 'programs', ru: 'программы' },
    { en: 'aimed', ru: 'направлены' },
    { en: 'at', ru: 'на' },
    { en: 'protecting', ru: 'защиту' },
    { en: 'environment', ru: 'окружающей среды' },
    { en: 'highly', ru: 'высоко' },
    { en: 'developed', ru: 'развитые' },
    { en: 'capitalist', ru: 'капиталистический' },
    { en: 'based', ru: 'основанный' },
    { en: 'economic', ru: 'экономический' },
    { en: 'freedom', ru: 'свобода' },
    { en: 'international', ru: 'международное' },
    { en: 'focus', ru: 'фокус' },
    { en: 'technological', ru: 'технологическое' },
    { en: 'innovation', ru: 'инновации' },
    { en: 'economy', ru: 'экономика' },
    { en: 'incorporates', ru: 'включает' },
    { en: 'private', ru: 'частные' },
    { en: 'businesses', ru: 'бизнесы' },
    { en: 'public', ru: 'государственные' },
    { en: 'entities', ru: 'организации' },
    { en: 'All', ru: 'Все' },
    { en: 'citizens', ru: 'граждане' },
    { en: 'have', ru: 'имеют' },
    { en: 'right', ru: 'право' },
    { en: 'ensure', ru: 'гарантировать' },
    { en: 'control', ru: 'контроль' },
    { en: 'over', ru: 'над' },
    { en: 'their', ru: 'их' },
    { en: 'properties', ru: 'собственность' },
    { en: 'labor', ru: 'трудовые' },
    { en: 'relations', ru: 'отношения' },
    { en: 'federal', ru: 'федеральное' },
    { en: 'republic', ru: 'республика' },
    { en: 'that', ru: 'которая' },
    { en: 'consists', ru: 'состоит' },
    { en: '50', ru: '50' },
    { en: 'self', ru: 'самоуправляемых' },
    { en: 'governing', ru: 'управляемых' },
    { en: 'states', ru: 'штатов' },
    { en: 'DC', ru: 'округа Колумбия' },
    { en: 'US', ru: 'США' },
    { en: 'Congress', ru: 'Конгресс' },
    { en: 'legal', ru: 'законодательное' },
    { en: 'institution', ru: 'учреждение' },
    { en: 'ensures', ru: 'обеспечивает' },
    { en: 'law', ru: 'закон' },
    { en: 'making', ru: 'создание' },
    { en: 'adequate', ru: 'адекватное' },
    { en: 'adherence', ru: 'соблюдение' },
    { en: 'laws', ru: 'законы' },
    { en: 'by', ru: 'от' },
    { en: 'executive', ru: 'исполнительная' },
    { en: 'branch', ru: 'ветвь' },
    { en: 'Constitution', ru: 'Конституция' },
    { en: 'basic', ru: 'основной' },
    { en: 'document', ru: 'документ' },
    { en: 'contains', ru: 'содержит' },
    { en: 'principles', ru: 'принципы' },
    { en: 'precedents', ru: 'прецеденты' },
    { en: 'adopted', ru: 'принятые' },
    { en: 'government', ru: 'правительство' },
    { en: 'determines', ru: 'определяет' },
    { en: 'rights', ru: 'права' },
    { en: 'American', ru: 'американский' },
    { en: 'In', ru: 'В' },
    { en: 'democratic', ru: 'демократическом' },
    { en: 'society', ru: 'обществе' },
    { en: 'guarantees', ru: 'гарантирует' },
    { en: 'power', ru: 'власть' },
    { en: 'functioning', ru: 'функционирование' },
    { en: 'so', ru: 'так' },
    { en: 'called', ru: 'так называемый' },
    { en: 'melting', ru: 'плавильный' },
    { en: 'pot', ru: 'горшок' },
    { en: 'because', ru: 'потому что' },
    { en: 'it', ru: 'это' },
    { en: 'comprised', ru: 'состоит из' },
    { en: 'number', ru: 'количество' },
    { en: 'different', ru: 'разных' },
    { en: 'cultural', ru: 'культурных' },
    { en: 'ethnic', ru: 'этнических' },
    { en: 'backgrounds', ru: 'происхождений' },
    { en: 'People', ru: 'Люди' },
    { en: 'all', ru: 'все' },
    { en: 'ages', ru: 'возрасты' },
    { en: 'races', ru: 'расы' },
    { en: 'nationalities', ru: 'национальности' },
    { en: 'who', ru: 'кто' },
    { en: 'got', ru: 'получили' },
    { en: 'citizenship', ru: 'гражданство' },
    { en: 'status', ru: 'статус' },
    { en: 'understand', ru: 'понимают' },
    { en: 'important', ru: 'важную' },
    { en: 'role', ru: 'роль' },
    { en: 'cross', ru: 'перекрестное' },
    { en: 'adaptation', ru: 'адаптации' },
    { en: 'There', ru: 'Существует' },
    { en: 'special', ru: 'особые' },
    { en: 'events', ru: 'события' },
    { en: 'organized', ru: 'организованные' },
    { en: 'foster', ru: 'способствовать' },
    { en: 'immigrants', ru: 'иммигрантам' },
    { en: 'acculturation', ru: 'аккультурации' },
    { en: 'through', ru: 'через' },
    { en: 'increased', ru: 'увеличенной' },
    { en: 'communication', ru: 'коммуникации' },
    { en: 'locals', ru: 'местными' },
    { en: 'sharing', ru: 'деление' },
    { en: 'experiences', ru: 'опытом' },
    { en: 'them', ru: 'ими' },
    { en: 'Among', ru: 'Среди' },
    { en: 'music', ru: 'музыка' },
    { en: 'arts', ru: 'искусства' },
    { en: 'festivals', ru: 'фестивали' },
    { en: 'various', ru: 'различные' },
    { en: 'celebrations', ru: 'празднования' },
    { en: 'holidays', ru: 'праздники' },
    { en: 'unite', ru: 'объединяют' },
    { en: 'Americans', ru: 'американцев' }
];
