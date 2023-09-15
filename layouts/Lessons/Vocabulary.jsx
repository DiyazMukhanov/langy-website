import { useState } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default function Vocabulary() {
    const [draggedWord, setDraggedWord] = useState(null)
    // console.log(draggedWord)

    // const onDragHandler = (dragData) => {
    //     // setDraggedWord(dragData)
    //     console.log('dragged: ', dragData)
    // }

    const onDropHandler = (e) => {
        // setDraggedWord(dragData)
        if(e.dragData === 'lion') {
            alert('Right!')
        } else {
            alert('False!')
        }
    }

    const testObj = {
        word: 'lion'
    }

    return <>
      <DragDropContainer targetKey="foo" 
    dragData={'lion'}   
    // onDragStart={onDragHandler}
    >  
    <div>Drag Me!</div>
</DragDropContainer>

<DropTarget targetKey="foo" onHit={onDropHandler} >
    <p>I'm a valid drop target for the object above since we both have the same targetKey!</p>
</DropTarget>
    </>
}