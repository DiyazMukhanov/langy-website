import { useState } from 'react';
import styles from './VocabularyLesson.module.scss'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { Button } from '../Button';

export default function VocabularyLesson({words_1, words_2, words_3, wordsToAsk_1, wordsToAsk_2, wordsToAsk_3}) {
    const [firstRight, setFirstRight] = useState(false)
    const [secondRight, setSecondRight] = useState(false)
    const [thirdRight, setThirdRight] = useState(false)
    const [words, setWords] = useState(words_1)
    const [wordsToAsk, setWordsToAsk] = useState(wordsToAsk_1)
    
    const findIndexOfRightWord = (askEnword) => {
        let indexOfRightWord
        const filteredArray = words.map((item, index) => {
            if(item.enWord === askEnword) {
             indexOfRightWord = index
            } 
         })
         return indexOfRightWord
    }

    const rightStateIndexes = {
        0: firstRight,
        1: secondRight,
        2: thirdRight
    }

    const onDropHandler = (e, enWord) => {
        if(enWord === e.dragData) {
            let indexOfRightWord
            const filteredArray = words.map((item, index) => {
               if(item.enWord === enWord) {
                indexOfRightWord = index
               } 
            })
            
            switch (indexOfRightWord) {
                case 0:
                    setFirstRight(true)
                    break
                
                case 1:
                    setSecondRight(true)
                    break

                case 2:
                setThirdRight(true)
                break
            }
        }
    }

    const nextWordsHandler = () => {
        setFirstRight(false)
        setSecondRight(false)
        setThirdRight(false)

        if(words === words_1) {
            setWords(words_2)
            setWordsToAsk(wordsToAsk_2)
        }

        if(words === words_2) {
            setWords(words_3)
            setWordsToAsk(wordsToAsk_3)
        }

        if(words === words_3) {
            setWords(words_1)
            setWordsToAsk(wordsToAsk_1)
        }
    }

    return (
    <>
    <div className={styles.wordsContainer}>
       <div className={styles.top}>
       {
                !rightStateIndexes[findIndexOfRightWord(wordsToAsk[0].enWord)] ? (
                <DragDropContainer targetKey="foo" 
                dragData={wordsToAsk[0].enWord}   
                >  
                <div className={styles.draggable}>{wordsToAsk[0].ruWord} </div>
            </DragDropContainer>
                ) : (
                    <div className={styles.empty}></div>
                )
            }
              {
                !rightStateIndexes[findIndexOfRightWord(wordsToAsk[1].enWord)] ? (
                <DragDropContainer targetKey="foo" 
                dragData={wordsToAsk[1].enWord}   
                >  
                <div className={styles.draggable}>{wordsToAsk[1].ruWord} </div>
            </DragDropContainer>
                ) : (
                    <div className={styles.empty}></div>
                )
            }
              {
                !rightStateIndexes[findIndexOfRightWord(wordsToAsk[2].enWord)] ? (
                <DragDropContainer targetKey="foo" 
                dragData={wordsToAsk[2].enWord}   
                >  
                <div className={styles.draggable}>{wordsToAsk[2].ruWord} </div>
            </DragDropContainer>
                ) : (
                    <div className={styles.empty}></div>
                )
            }
       </div>

       <div className={styles.bottom}>
       {
              firstRight ? (<div className={styles.dropTargetRight}>{words[0].enWord} - {words[0].ruWord}</div>) : (
            <DropTarget targetKey="foo" onHit={(e) => onDropHandler(e, words[0].enWord)} >
                <div className={styles.dropTarget}>{words[0].enWord}</div>
            </DropTarget>
              )
            }
            {
              secondRight ? (<div className={styles.dropTargetRight}>{words[1].enWord} - {words[1].ruWord}</div>) : (
            <DropTarget targetKey="foo" onHit={(e) => onDropHandler(e, words[1].enWord)} >
                <div className={styles.dropTarget}>{words[1].enWord}</div>
            </DropTarget>
              )
            }
            {
              thirdRight ? (<div className={styles.dropTargetRight}>{words[2].enWord} - {words[2].ruWord}</div>) : (
            <DropTarget targetKey="foo" onHit={(e) => onDropHandler(e, words[2].enWord)} >
                <div className={styles.dropTarget}>{words[2].enWord}</div>
            </DropTarget>
              )
            }
       </div>
       </div>
       <div className={styles.moreBtn}>
              <Button variant='standardNextContained' onClick={nextWordsHandler}>Ещё</Button>
            </div>
    </>
    )
}