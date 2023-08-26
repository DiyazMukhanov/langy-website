export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `We all know how hard it is to study at school. However, some subjects make our time at school more enjoyable. I am going to tell you about one of them. I adore this subject. This subject is called history. This is the class I never skip. In this class, we learn about notable events of the past and great people such as the rulers of the kingdoms and countries. Some people call history boring but for me it is like a breath of fresh air. It is a shame that we have this subject only twice per week. Right now we are learning about the Middle Ages and it is exciting. Sometimes I imagine that I am a knight fighting in a Middle Ages battle. Our teacher is also the reason why I love history. He is a very interesting speaker. It is a pleasure to listen to him. He also answers all our questions and helps with homework. I think when I grow up, I want to be a history teacher, too. I am trying to get only excellent grades for history. Usually, I am very disappointed when I get a four, but my mom says that it is okay, you can’t get excellent grades all the time. In conclusion, I would like to say that history is a really important subject and I want to know it better than others.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}