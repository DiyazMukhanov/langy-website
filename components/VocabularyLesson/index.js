import { useState } from 'react';
import styles from './VocabularyLesson.module.scss'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { Button } from '../Button';
// import successSound from '../../public/audio/success.mp3'
import Play from "../../public/images/Play.svg";
import Image from "next/image";

export default function VocabularyLesson({words_1, words_2, words_3, wordsToAsk_1, wordsToAsk_2, wordsToAsk_3, wordSrc_1, wordSrc_2, wordSrc_3, wordSrc_4, wordSrc_5, wordSrc_6, wordSrc_7, wordSrc_8, wordSrc_9}) {
    const [firstRight, setFirstRight] = useState(false)
    const [secondRight, setSecondRight] = useState(false)
    const [thirdRight, setThirdRight] = useState(false)
    const [words, setWords] = useState(words_1)
    const [wordsToAsk, setWordsToAsk] = useState(wordsToAsk_1)

    // function play() {
    //     new Audio(successSound).play()
    // }

    function playWord(wordNumber) {
        let wordSrc;
        if(words === words_1) {
           switch(wordNumber) {
            case 1:
                wordSrc = wordSrc_1;
                break;

            case 2:
                wordSrc = wordSrc_2;
                break;
                
            case 3:
                wordSrc = wordSrc_3
                break;    
           }
        }

        if(words === words_2) {
            switch(wordNumber) {
             case 1:
                 wordSrc = wordSrc_4;
                 break;
 
             case 2:
                 wordSrc = wordSrc_5;
                 break;
                 
             case 3:
                 wordSrc = wordSrc_6
                 break;    
            }
         }

         if(words === words_3) {
            switch(wordNumber) {
             case 1:
                 wordSrc = wordSrc_7;
                 break;
 
             case 2:
                 wordSrc = wordSrc_8;
                 break;
                 
             case 3:
                 wordSrc = wordSrc_9
                 break;    
            }
         }
        // new Audio(wordSrc).play()
    }
    
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
            play()
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
    <p className={styles.task}>Перетащите слова согласно их переводу</p>
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
                <div className={styles.dropTarget}><div className={styles.enContainer}>{words[0].enWord}
                <Image
                priority
                src={Play}
                width={30}
                onClick={() => playWord(1)}
                className={styles.play}
                />
                </div>
                </div>
                
            </DropTarget>
              )
            }
            {
              secondRight ? (<div className={styles.dropTargetRight}>{words[1].enWord} - {words[1].ruWord}</div>) : (
            <DropTarget targetKey="foo" onHit={(e) => onDropHandler(e, words[1].enWord)} >
                <div className={styles.dropTarget}><div className={styles.enContainer}>{words[1].enWord}<Image
                priority
                src={Play}
                width={30}
                onClick={() => playWord(2)}
                className={styles.play}
                /></div></div>
            </DropTarget>
              )
            }
            {
              thirdRight ? (<div className={styles.dropTargetRight}>{words[2].enWord} - {words[2].ruWord}</div>) : (
            <DropTarget targetKey="foo" onHit={(e) => onDropHandler(e, words[2].enWord)} >
                <div className={styles.dropTarget}><div className={styles.enContainer}>{words[2].enWord}<Image
                priority
                src={Play}
                width={30}
                onClick={() => playWord(3)}
                className={styles.play}
                /></div></div>
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