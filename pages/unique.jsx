export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `Have you ever thought about what your future life is going to be like? What are you going to do when you finish school? It is never too early or late to start thinking about your future career. Maybe you enjoy some of the subjects at school more than others. If you do, this is a good sign, because they will guide you to your future profession. In today’s world, your future career can be absolutely anything. It does not necessarily mean having a boss or working in a company. For example, you can become a freelancer. A freelancer is a person who works at home or wherever they want, doing work for their clients. The clients ask a freelancer to do something, and they have to do it until a certain date. As long as the job is getting done, freelancers can choose where and when to work. They can even work at night, or spend a week not working at all, it depends only on them. Also, there are a lot of jobs that require creativity. For example, you can become a designer, a psycologist, or an actor. These professions might require a great deal of training, practice and probably some talent. Some people become entrepreneurs. They run their own businesses, make jobs and fill the needs of society, although running a business is a lot of responsibility. A lot of people depend on an entrepreneur including their employees, partners and clients. Many people enjoy working in more traditional industries. If you love baking pastry or taking care of animals, you should follow your real passion. It is up to you what occupation to choose. In conclusion, I would like to say that choosing your future career is not easy but it is surely rewarding to do something you love.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}