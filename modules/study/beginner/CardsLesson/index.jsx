import styles from './CardsLesson.module.scss';
import { Button } from '@/ui-kit/Button';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export default function CardLesson({ words }) {
  const [wordsIndex, setWordsIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(null)
  const [randomShowingVariant, setRandomShowVariant] = useState(0)

  // const [hasWindow, setHasWindow] = useState(false)
  const audioRef = useRef(null)
  const audioRef1 = useRef(null)

  const checkAnswer = (item, index) => {
    if (item === rightAnswer) {
      setRightIndex(index)
      // setAudioSrc(words[wordsIndex].audioSrc)
      audioRef.current.play();
    } else {
      audioRef1.current.play();
    }
  }

  const createTranslationCard = (wordObject) => {
    let translationsArray = []
    if (randomShowingVariant === 0) {
      translationsArray = [wordObject.enRight, wordObject.enWrong[0], wordObject.enWrong[1]]
    }

    if (randomShowingVariant === 1) {
      translationsArray = [wordObject.enWrong[0], wordObject.enRight, wordObject.enWrong[1]]
    }

    if (randomShowingVariant === 2) {
      translationsArray = [wordObject.enWrong[1], wordObject.enWrong[0], wordObject.enRight,]
    }


    return <>{translationsArray.map((item, index) => <div key={index} className={classNames(styles.translationCard,
      { [styles.right]: index === rightIndex }
    )} onClick={() => checkAnswer(item, index)}>{item}</div>)}</>
  }

  const [audioSrc, setAudioSrc] = useState(words[wordsIndex].audioSrc)
  const [rightAnswer, setRightAnswer] = useState(words[0].enRight)

  const moreWordsHandler = () => {
    audioRef.current.pause();
    const randomShowingVariant = Math.floor(Math.random() * 3)
    setRandomShowVariant(randomShowingVariant)
    setRightIndex(null)
    if (wordsIndex === words.length - 1) {
      setWordsIndex(0)
    } else {
      setWordsIndex(wordsIndex + 1)
    }
  }

  useEffect(() => {
    setRightAnswer(words[wordsIndex].enRight);
    setAudioSrc(words[wordsIndex].audioSrc)
    audioRef.current.load();
  }, [wordsIndex, audioSrc])

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={words[wordsIndex].imageUrl} className={styles.image} />

      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.cards}>
          {createTranslationCard(words[wordsIndex])}
        </div>
        <div className={styles.btnContainer}>
          <Button variant='standardNextContained' className={styles.moreButton} onClick={moreWordsHandler}>Ещё</Button>
        </div>
      </div>
      <audio ref={audioRef} controls style={{ display: 'none' }}>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef1} controls style={{ display: 'none' }}>
        <source src='/audio/error.mp3' type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}