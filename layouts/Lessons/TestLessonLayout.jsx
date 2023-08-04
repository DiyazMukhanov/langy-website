import LessonLayout from "./LessonLayout";
import { lessonsSummary } from "@/utils/lessonsSummary";
import styles from './TestLessonLayout.module.scss'
import { useState } from "react";
import classNames from "classnames";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const questions = [
    {
        id: 1,
        firstPart: 'You shall',
        secondPart: 'this game',
        answers: [
            {
                id: 1,
                answer: 'play',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: false
            }
        ] 
    },
    {
        id: 2,
        firstPart: 'You can',
        secondPart: 'this cake',
        answers: [
            {
                id: 1,
                answer: 'play',
                isCorrect: false
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: true
            }
        ] 
    },
    {
        id: 3,
        firstPart: 'You can',
        secondPart: 'this cat',
        answers: [
            {
                id: 1,
                answer: 'take',
                isCorrect: true
            },
            {
                id: 2,
                answer: 'go',
                isCorrect: false
            },
            {
                id: 3,
                answer: 'swim',
                isCorrect: false
            },
            {
                id: 4,
                answer: 'eat',
                isCorrect: false
            }
        ] 
    }
]

const WordContainer = ({ word, isCorrect }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: "WORD_CONTAINER",
        item: { word, isCorrect },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });

   return (
   <div 
        ref={dragRef}
        className={styles.wordContainer}
        draggable='true'
        // onDragStart={onDragStart}
        >
      {word}
   </div>
   )
}

export default function TestLessonLayout() {
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const totalQuestions = questions.length
    const [isCorrect, setIsCorrect] = useState('neutral')
    const [droppedWord, setDroppedWord] = useState(null)

    // const handleDragStart = (event, word, isCorrect) => {
    //     // Set the data to be transferred during the drag
    //     event.dataTransfer.setData("word", word);
    //     event.dataTransfer.setData("isCorrect", isCorrect);
    //   };

    //   const handleDragOver = (event) => {
    //     // Allow the drop
    //     event.preventDefault();
    //   };

    const handleDrop = (word, isCorrect) => {
        setDroppedWord(word);
        setIsCorrect(isCorrect ? 'correct' : 'mistake');
      };
    
      const [, dropRef] = useDrop({
        accept: "WORD_CONTAINER",
        drop: (item) => handleDrop(item.word, item.isCorrect),
      });

    

     return (
     <>
     
       <LessonLayout lessonsSummary={lessonsSummary} chapter='test'>
         <div className={styles.questionContainer}>
            <div className={styles.top}>
            <p className={styles.questionTitle}>Вопрос {currentQuestion}</p>
            <p>{currentQuestion}/{totalQuestions}</p>
            </div>

            <div className={styles.middle}>
               {questions[currentQuestion - 1].firstPart}
               <div 
               className={classNames(
                styles.dropZone,
                {[styles.green]: isCorrect === 'correct'},
                {[styles.red]: isCorrect === 'mistake'},
                )}
               ref={dropRef}
               onDragOver={(event) => event.preventDefault()}
               >
                {droppedWord && droppedWord}
                </div>
               {questions[currentQuestion - 1].secondPart}
            </div>

            <div className={styles.bottom}>
               {questions[currentQuestion - 1].answers.map(answer => (
                <WordContainer 
                key={answer.id}
                word={answer.answer}
                isCorrect={answer.isCorrect}
                // onDragStart={(event) => handleDragStart(event, answer.answer, answer.isCorrect)}
                />
               ))}
            </div>
            
         </div>
       </LessonLayout>
       
     </>
     )
}