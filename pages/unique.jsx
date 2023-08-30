export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `New York City is a metropolis that has long been a center of culture, commerce, and innovation. Located in the northeastern United States, it is the largest city in the country and home to more than 8 million people. There are many things that make New York City unique. Its iconic skyline, with towering skyscrapers like the Empire State Building and the One World Trade Center, is recognized around the world. The city is also home to some of the most famous landmarks and cultural institutions in the world, such as Central Park, the Metropolitan Museum of Art, and Broadway theater district. New York City is known for its exciting nightlife and diverse cuisine, with restaurants and cafes serving cuisine from every corner of the globe. The city is also home to a thriving arts community, with galleries and performance spaces scattered throughout the five boroughs. Although the city has many charms, living in New York City can be challenging. The cost of living is high, and housing is often in short supply. The city is also known for its fast pace and crowded streets, which can be overwhelming for some people. Despite these challenges, many people are drawn to New York City for its energy and opportunities. Whether you are interested in pursuing a career in the arts, finance, or any other field, there are endless possibilities in the city that never sleeps.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}