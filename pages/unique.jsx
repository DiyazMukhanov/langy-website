export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `The United States is considered to be one of the countries with the largest territories. It is situated in North America, an amazing continent with its beautiful nature and diverse climatic zones. The country’s landscape includes both high mountains and flat prairies. The weather conditions range from arctic cold in the northern parts to tropical heat in the southern parts. The main water bodies on the territory of the USA include  such rivers as Mississippi, Missouri, the Rio Grande. These rivers provide a sufficient amount of drinking water to supply the nation. They also serve as vital sources of irrigation for farming. As the United States is ranked as the country with the highest population (328.2 million) after India and China, many people live in urban and rural areas. The major metropolitan areas which are well-known across the world include New York City, located in the state with the same name, Los Angeles situated in the western state of California, Chicago in Illinois, and others. The most influential industries are real estate, finance, insurance, health care and social support services, trade, and other industries. Many top-producing plants and factories are placed in urbanized areas. This location poses certain environmental threats to local communities and natural resources. State authorities issue policies and programs aimed at protecting the environment. The USA is a highly developed capitalist country based on economic freedom, international trade, and a focus on technological innovation. The economy incorporates both private businesses and public entities. All citizens have the right to ensure control over their properties and labor relations. The United States is a federal republic that consists of 50 self-governing states and the DC. The US Congress is the legal institution that ensures both law-making, and adequate control over the adherence to laws by the executive branch. The Constitution is the basic legal document that contains the principles and precedents adopted by the federal government. It determines the major rights of American citizens. In American democratic society, the Constitution guarantees the power of citizens to control the functioning of the government. The United States is well-known as the so-called “melting pot” because it is comprised of a number of people of different cultural and ethnic backgrounds. People of all ages, races, and nationalities who have got a citizenship status understand the important role of cross-cultural adaptation. There are many special events organized across the country that foster immigrants’ adaptation and acculturation through increased communication with locals and sharing their cultural experiences with them. Among them are music and arts festivals, various cultural celebrations, and holidays that unite Americans.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}