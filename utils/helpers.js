// helpers.js
export const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };
  

// I will give you a text. Please extract all unique words and provide russian translation of each word.
 
// Now make an array of  objects from this list. For example [{en: 'short', ru: 'короткие'}]