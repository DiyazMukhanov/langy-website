export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `Nowadays environmental pollution is one of the main topics at international conferences. Governments from all over the world discuss the situation and how it is possible to improve it. There can be different types of pollution. Let’s discuss some of them. Air pollution and marine pollution are the most discussed ones. They are caused by different reasons. First of all, it is CO2 emitted by cars when they are using fuel. Second, humans add pollution to the environment through industrial activities and waste disposal. Nowadays, many countries are trying to decrease both waste disposal and CO2 emission. Probably, the most well-known way to reduce negative effects of waste disposal is waste sorting. It means that the waste is sorted into a few categories to be recycled later. Switching to electric vehicles is one of the most promising ways to reduce CO2 emission. Different types of pollution are interconnected. For example, marine pollution might be caused by direct discharge of industrial waste into the ocean. But pollutants could also be released from the atmosphere. Overpopulation is another factor that causes pollution, as well as a number of other problems. Overpopulated cities tend to be the ones with the biggest ecological problems. Vehicles and people themselves add too much pollution for a relatively small area. But how can we stop pollution? First of all, we should reconsider our approach to transportation in general. Public transport, private and corporate vehicles produce a lot of CO2 in our cities. Second, we should stop being careless about our garbage disposal. Third, we need to realize that not only the governments are responsible for the planet, but every single human as well. Every time when you are making a food or transport choice, you can make some difference. In conclusion, I would like to say that our planet is our home, and we must keep it safe and clean for the future generations.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}