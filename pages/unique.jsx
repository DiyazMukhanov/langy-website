export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `The United Kingdom is an advanced European island country. It is surrounded by three bodies of water: the North Sea, in the eastern part, the English Channel in the southern part, and the Atlantic Ocean in the west. The country consists of England, Scotland, Wales, and Northern Ireland. The term “United Kingdom” is often confused with the term “Great Britain”, which is the name of the island, but not the state. Many smaller islands and adjacent territories form an integral part of this country, as well as the area of Northern Ireland in the northwest. The total area of the country is 242,500 sq. km. The population is over 67 million people, according to the 2020 statistical data. The British landscape is diverse. It includes flat countryside, low hills, and a long line of high mountains. In this unique island country, the climate is rather mild and a bit humid. This geographical region is known for its warm weather in winter, and cool weather in summer, combined with intense rainfall and baffling winds over the year. There are numerous rivers and lakes in the UK. The water resources of great importance are the largest river the Thames, the longest one called the Severn, and many smaller rivers like the Mersey, the Clyde, and the Tyne. These natural resources play a critical role in the water supply of the nation. Unfortunately, the UK has already been affected by the ongoing climate change. The nation experiences increased rainfall, storms, and heatwaves. London, the official capital city and influential administrative center, is one of the most densely populated megalopolises in the world. Its population is over 9.2 million people. The major cities are Manchester, famous for its industrial heritage, Birmingham, Leeds, and Glasgow. They are recognized as significant cultural, commercial, and industrial centers that contribute to the nation’s economic growth and sustainable social development. Many highly acclaimed universities and colleges can be found in the UK. The UK has mixed economy that allows the nation to succeed both in international trade, the manufacturing industry, agriculture, and the services sector. Tourism is the number one national industry that keeps the UK economy flourishing. There are many places of huge interest in this popular destination that attract visitors from all over the world. Among them are the majestic Buckingham Palace, the Tower of London, and the British Museum in London. Thus, the UK is a country with a highly developed economy and well-established scientific and cultural centers.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}