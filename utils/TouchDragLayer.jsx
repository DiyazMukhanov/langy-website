export default function TouchDragLayer({ item, itemType, currentOffset }) {
    // Add the touch-drag-layer class to the moving element
    const style = {
      pointerEvents: "none",
      position: "fixed",
      zIndex: 9999,
      left: 0,
      top: 0,
      opacity: 0.8,
      touchAction: "none", // Add this CSS property
    };
  
    return (
      <div className="touch-drag-layer" style={style}>
        {/* Render the moving element using the provided item and itemType */}
        {/* You can customize the appearance of the element here */}
        {itemType === "WORD" && <div>{item.word}</div>}
      </div>
    );
  }