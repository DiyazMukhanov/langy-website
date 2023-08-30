export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `The system of education in the United Kingdom is based on a well-developed approach that allows children to gain knowledge stepwise. There are four stages of education in this country: primary education (from 4 or 5 up to 11 years old), secondary education (from 11 up to 16 years old), further education, and higher education. Children are obliged to attend primary (or elementary) and secondary schools to develop the proper communication and learning abilities, organizational skills, self-discipline, and enthusiasm. Further education and higher education are not compulsory. The primary school divides students into two levels: infants, aged 5-7, and juniors, aged 7-11. At this stage, the major goal is to give children the very basics of education. Kids learn to read, write, and do sums. The secondary school differs from the primary school as its program is more complicated. Several subjects should be studied by all students, including English, Mathematics, Social Sciences, Humanities, and Modern Languages and Literature. Moreover, there are optional subjects for every student depending on their interests. They include various Arts and Sciences categories of studies. In this country, both free and paid schools are available. State schools are financed by the government, and students do not pay for their education. Independent schools require parents to pay for their children’s classes. One can find certain differences in the overall functioning of the system of education in England, Scotland and Wales, because of different schooling policies that affect this scheme. Children should pass a standard exam after high school graduation. The results of the examination will show their eligibility to continue their education in universities. Further education includes all types of college-level programs and courses chosen by a student after the completion of the period of compulsory education. At this stage, students are offered basic skills training options, and vocational education necessary for employment in a selected occupation. The key goal is to prepare young people both for their future job and for their application for a higher education institution if they wish to. The higher level of education incorporates university courses that give students a chance to get their diplomas and national certificates. There are different levels of courses related to the study in universities, namely, postgraduate (Bachelor’s, Master’s, and Ph.D. degrees) and undergraduate courses. In general, the UK education system has gained a good reputation worldwide due to the highest educational standards and quality of knowledge it provides to students and the entire community.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}