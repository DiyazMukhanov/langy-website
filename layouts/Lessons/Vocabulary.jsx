import { useState } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import styles from './Vocabulary.module.scss'

export default function Vocabulary() {
    const [draggedWord, setDraggedWord] = useState(null)

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
        >  
        <div className={styles.draggable}>Right word</div>
      </DragDropContainer>

      <DragDropContainer targetKey="foo" 
        dragData={'rabbit'}   
        >  
        <div className={styles.draggable}>Wrong word</div>
      </DragDropContainer>

<DropTarget targetKey="foo" onHit={onDropHandler} >
    <div className={styles.dropTarget}>Перетащи сюда</div>
</DropTarget>
    </>
}