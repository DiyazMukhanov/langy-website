export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `My dream is to become a successful doctor. Growing up, I always had a fascination with the human body and how it works. I loved learning about different diseases and how they can be treated, and I always knew that I wanted to work in the medical field. As I grew up, I realized that becoming a doctor was not going to be easy. It requires a lot of hard work and dedication, but I am more than willing to put in the effort to achieve my dream. I know that becoming a doctor will require a lot of schooling and training, but I am ready for the challenge. My dream is to use my medical skills to help people. I want to be able to make a difference in the lives of others. I believe that being a doctor is not just a profession, but a calling, and I am eager to answer that call. I am grateful to have the opportunity to pursue my dream, and I am determined to work hard and do whatever it takes to make it a reality. I know that the path to becoming a doctor will be challenging, but I am up for the challenge. I am confident that with hard work and determination, I can achieve my dream of becoming a successful doctor.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}