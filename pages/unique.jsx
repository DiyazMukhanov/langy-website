export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `I recently had the opportunity to visit a theater for the first time. It was an incredible experience that I will never forget. The theater was located in the heart of the city, and as I approached it, I couldn’t help but feel a sense of excitement and anticipation. The outside of the building was grand and impressive, with tall columns and beautiful architectural details. As I entered the theater, I was struck by the ornate decorations and the grandeur of the interior. The floors were polished to a shine, and the walls were adorned with intricate frescoes and paintings. The seats were comfortable and plush, and the stage was vast and impressive. As I waited for the show to begin, I couldn’t help but feel a sense of nervous excitement. I had heard so much about this particular performance, and I was eager to see it for myself. When the curtain finally rose, I was completely captivated by the performance. The actors were talented and skilled, and the sets and costumes were stunning. I was completely absorbed in the story, and it was a truly unforgettable experience. Overall, my visit to the theater was an absolute delight. It was a chance to experience live performance in a way that I had never done before, and it left a lasting impression on me. I can’t wait to visit the theater again in the future and see more performances.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}