export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `Choosing a higher education path is always hard. You need to make sure that you study something you like and you really want to make a career in this field. I am going to tell you about my university, and why I chose it. Right now, I am studying Business Administration and Management program at the faculty of Economics. It lasts for 3 years, and when I finish it I will get a bachelor’s degree. After that, I am planning to apply for a master’s degree which is 2 more years. I study for this degree at the University of Pecs. It is a huge University with many campuses and dormitories. I am not a freshman; I am a sophomore. That is why I already know a lot of things about higher education. At the beginning of each semester, you have to enroll in your course. After that you register for the compulsory and optional subjects. You can choose from a great number of elective courses. You can do absolutely anything from yoga to programming If you choose to. After you finish your studies, you can calculate your GPA, it is the average of your marks during the semester. If you have it above 4, you can apply for different scholarships and grants. Studying at the university is so much fun because you meet a lot of unique people. But do not think it is easy. Only the best graduates receive jobs at international companies, so take your time and study hard. During your education, it is a good idea to apply for different internships to get some valuable experience. Overall, university is a nice place to be in, and I hope you will get to your dream university, and after that you will get your dream job.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}