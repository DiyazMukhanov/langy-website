
// I will give you a text. Please extract all unique words and provide russian translation of each word.
 
// Now make an array of  objects from this list. For example [{en: 'short', ru: 'короткие'}]

function extractUniqueWords(text) {
    const words = text.match(/\b\w+\b/g); // Split text into words
    const uniqueWords = [...new Set(words)]; // Remove duplicates using Set
    
    return uniqueWords;
}

const inputText = "For almost any person, there is nothing more important in the world than their family. I love my family too.";
const uniqueWords = extractUniqueWords(inputText);
console.log(uniqueWords);

