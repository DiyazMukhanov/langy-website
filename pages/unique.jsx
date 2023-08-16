export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `I was born in Nizhny Novgorod. It is my hometown. I have been living here all my life. Let me tell you more about it. It is a very lively place, located in Central Russia. It was founded in 1221. Back then it used to be a major trading hub. People from all over the country came to Nizhny Novgorod to buy and sell goods. Now it has a population of one million and five hundred thousand citizens, it is the 6th biggest city in Russia. Nowadays it is a large city with a big city center and suburbs. A lot of companies have their headquarters in Nizhny Novgorod. It is one of the biggest economic centers in Russia. Of course, each city has its advantages and disadvantages. Let’s start with the advantages. There are many ways of transportation in Nizhny Novgorod. You can travel by bus, by trolley, you can even take the underground. Also, Nizhny Novgorod has an advantageous geographical location because it is located between two major cities — Moscow and Kazan. However, there are also some disadvantages. First of all, it is very dirty and noisy because of traffic jams. Second, it hasn’t got a lot of public areas, such as parks, where you can spend your time with friends. Third, life here is pretty expensive, and the prices of houses and apartments are quite high. In conclusion, I would like to say that despite all the disadvantages I like my city because I was born there and have a lot of good memories of it.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p>{index} {item.en}</p>)}
    </div>)
}