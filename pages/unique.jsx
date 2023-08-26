export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `I spend my weekends in a variety of ways. On some weekends, I like to relax at home and catch up on some rest. I might watch a movie or TV show, read a book, or just take a nap. On other weekends, I like to be more active and go out and do something. This might include going for a hike or bike ride in the park, playing a sport with friends, or going to the gym. I also like to spend time with my family and friends on the weekends. We might have a barbecue in the backyard, go out to eat at a restaurant, or just hang out and chat. On weekends when I have a lot of homework or projects due, I might spend more time studying and working on school assignments. I try to balance my responsibilities with my desire to have some leisure time, so I make sure to set aside time for both. In most cases, my weekends are a mix of relaxation, fun, and productivity, and I enjoy being able to have a break from the busy week and spend time doing the things that I enjoy.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}