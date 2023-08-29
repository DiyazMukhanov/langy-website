export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `Art has always been a significant part of human life and culture. It has the ability to express emotions, capture a moment in time, and stimulate the imagination. Art can take many forms, including painting, sculpture, and film. It can be found in museums and galleries, as well as in public spaces and private homes.Art has the power to bring people together and inspire dialogue and understanding. It can also serve as a means of self-expression, allowing individuals to communicate their thoughts and feelings through creative means. In addition to its cultural value, art has also been shown to have numerous benefits for mental and physical health. Studies have shown that engaging in artistic activities can reduce stress, improve cognitive function, and boost self-esteem. Art is an integral part of our lives and has the ability to enrich and enhance our experiences. Whether we are creating it, viewing it, or simply enjoying it, art has the power to bring beauty and meaning into our world.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}