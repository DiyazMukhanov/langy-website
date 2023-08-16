export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `Today was a typical school day for me. I woke up at 6:30am and got ready for the day. I had breakfast and packed my bag with all the things I needed for class, including my laptop, textbook, and notes. I left for school at 7:30am and arrived at 8:00am, just in time for my first class of the day. My schedule was pretty packed today, with classes from 8:00am to 3:00pm, with a break for lunch at noon. I had a mix of lectures, discussions, and group work, and I tried my best to stay focused and engaged in each class. After school, I headed home and took a break for a little while before starting on my homework. I had a lot to do, so I sat down at my desk and started to work. I finished around 8:00pm and took some time to relax before going to bed. It was a busy but productive day. I’m looking forward to getting  some rest tonight and starting fresh tomorrow.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p>{index} {item.en}</p>)}
    </div>)
}