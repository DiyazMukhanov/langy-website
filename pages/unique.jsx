export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `The system of education in the United States is rather complicated. It is exposed to the constant changes of federal policies, adaptation to various social needs, and the emergence of new pedagogical methods. In most schools, it is divided into three levels: elementary school – grades 1 to 5, middle school — grades 6 to 8, high school — grades 9 to 12. This 12-year system is called “K-12”. K-12 stands for the grades for students of various age groups from the kindergarten age (5 years old) to the 12th grade age (18 years old). There are three types of schools in the United States: public, private, and home schools. Public schooling is financed by federal, state, and local authorities. Parents do not pay for their children’s education. Private schools have a right to choose their curriculum and establish their policies. This kind of education is not free of charge. Homeschooling addresses the needs of parents who do not want their children to attend regular schools for certain reasons. Among home school students are children with special needs and children whose parents support non-traditional methods of learning. There are also young athletes and celebrities whose tight schedule do not leave them enough time for going to school. About 3% of children are homeschooled in the USA. The necessary standards of education in the United States are set by state governments. As a rule, the key requirement for American students is to pass obligatory standardized tests developed for the K-12 schooling system. After high school, children have several options. First, they can choose a 4-year college or university program and get the education for the selected professional career. Second, children can choose a 2-year program in college and get prepared for their future career choice. Third, high school graduates can enter a vocational school and learn a trade to have an opportunity to be employed in a specific field of occupation such as design, baking or carpentry. Fourth, graduates of high schools can choose to serve in the US armed forces. Fifth, if children are not ready to continue their education, they can have a gap year. Most kids prefer to spend this time exploring their life preferences and individual interests through active involvement in various jobs, internships, volunteering work, or traveling.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}