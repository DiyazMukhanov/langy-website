import { DndContext } from '@dnd-kit/core';
import DroppableCard from '../../../shared/DragComponents/DroppableCard';
import DraggableCard from '../../../shared/DragComponents/DraggableCard';
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useState } from 'react';
import { shuffleArray } from '../../lessons/utils/shuffleArray';
import styles from './PhrasesLessonLayout.module.scss'


export default function PhrasesLessonLayout() {
    const [droppedIds, setdroppedIds] = useState([]);
    const mouseSensor = useSensor(MouseSensor)
    const touchSensor = useSensor(TouchSensor)
    const sensors = useSensors(mouseSensor, touchSensor)

    const data = [
        {
            en: 'Hi, how are you?',
            ru: 'Привет, как дела?',
            id: 'phrase-1',
        },
        {
            en: 'Great! My name is Dana.',
            ru: 'Замечательно! Меня зовут Дана.',
            id: 'phrase-2',
        },
        {
            en: 'I am Assel. It’s nice to meet you.',
            ru: 'Я – Асель. Приятно c тобой познакомиться.',
            id: 'phrase-3',
        }
    ]


    const droppables = shuffleArray([...data])

    const updateDroppedIds = (id) => {
        const newDropIds = [...droppedIds, id]
        setdroppedIds(newDropIds)
    }

    function handleDragEnd(event) {
        const { over } = event
        const { active } = event

        if (over && over.id === active.id) {
            updateDroppedIds(over.id)
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <h1>Перетащите фразы к переводам</h1>
            </div>
            <div className={styles.cardsContainer}>
                <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                    <div className={styles.cardsSection}>
                        {data.map(item => (
                            !droppedIds.includes(item.id) &&
                            <DraggableCard
                                draggableId={item.id}
                                className={styles.card}
                                keyProp={item.id}
                                key={item.id}
                            >
                                {item.en}
                            </DraggableCard>
                        ))}
                    </div>

                    <div className={styles.cardsSection}>
                        {droppables.map(item => (
                            !droppedIds.includes(item.id) &&
                            <DroppableCard
                                droppableId={item.id}
                                className={styles.card}
                                overStyle={styles.overStyle}
                                keyProp={item.id}
                                key={item.id}
                            >
                                {item.ru}
                            </DroppableCard>
                        ))}
                    </div>
                </DndContext >
            </div>
        </div>
    )
}