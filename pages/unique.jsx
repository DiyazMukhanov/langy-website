export default function Unique() {
    function extractUniqueWordsWithTranslations(text) {
        const words = text.match(/\b\w+\b/g); // Split text into words
        const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
        
        const wordsWithTranslations = uniqueWords.map(word => {
            return { en: word, ru: '' }; // Replace '' with the corresponding translation
        });
        
        return wordsWithTranslations;
    }
    
    const inputText = `Hobby is an activity that we do for fun, just because we like it. Most people have at least one hobby even if their schedule is tight. I have a few hobbies but my favorite one is drawing comics. Let me tell you about this interesting activity. Drawing comics is not the same as just drawing. When you draw a person, an animal or an object, normally there is no story in it. Comics are all about storytelling. Even web comics that consist of only one picture tell a story. The story is told through pictures and text. So, if you make comics, you should be and artist and a writer at the same time. My stories are usually funny, they include talking animals and fantastic creatures. Some of my stories are sad and they are based on my personal experience. I took up drawing comics just a year ago. My friend sent me a picture with two turtles arguing over an apple. I just imitated it and drew a picture with the same characters but with a different story. My friend found it funny, although my picture was not drawn well. I spent a lot of time coming up with my drawing style, and now I think I have one. Drawing never felt like work to me, it is something that I enjoy doing. As for my other hobbies, I like reading and I am a big fan of historical books. I used to spend a lot of time reading, but now I spend most of my free time drawing. In conclusion, I would like to say that it is great to have a hobby. If you do not have one, it probably means that you just have not found it yet.`;
    const wordsWithTranslations = extractUniqueWordsWithTranslations(inputText);
    
    return (
    <div>
            {wordsWithTranslations.map((item, index) => <p>{index} {item.en}</p>)}
    </div>)
}