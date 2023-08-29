export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `Everyone wants to be healthy. Good health affects the way people behave, work, and interact with each other. As the proverb goes, “Health is wealth.” Health is the key benefit provided by sports activities. People who exercise tend to be well-disciplined and stress-resistant. These qualities are essential for the effectiveness of personal and professional development. Currently, there are many opportunities offered to those people who want to be fit. Fitness clubs and athletic centers are available for people of different ages. Also, there are public places for physical activities. Students are engaged in special school and university programs that guarantee their successful physical development. They can participate in different sports to find the most appealing athletic activity. Among them are running, swimming, fitness, cycling, football, and yoga, to name a few. Regular physical exercises help stimulate muscles and get better results in any sport. As for me, my favorite sport is volleyball. This is a traditional team game that is very popular across the world. Playing volleyball teaches me how to become a leader, set goals, organize teamwork, and develop self-confidence and self-discipline. My participation in sports competitions allows me to improve my physical fitness and mental abilities. Further success in my career depends on these aspects. The rules of this game are easy to understand. Two teams, consisting of six players each, play a match. This indoor game is played with a ball. The winner of the volleyball set is the team that gains 25 points. It’s important for every player to bat the ball over the net using their hands effectively. The key goal is to bat the ball in such a way that it touches the opponent team’s court. It is very important to remember that before the game, you need to warm up so that your body is ready for physical exercise. Without a good warm-up, you might get an injury. Although the goal of any game is to win, safety comes first.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p key={index}>{index} {item.en}</p>)}
    </div>)
}