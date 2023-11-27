import { DndContext } from '@dnd-kit/core';
import DroppableCard from '../../../shared/DragComponents/DroppableCard';
import DraggableCard from '../../../shared/DragComponents/DraggableCard';
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useState } from 'react';
import { shuffleArray } from '../../lessons/utils/shuffleArray';
import styles from './PhrasesLessonLayout.module.scss';
import { Phrase } from './types/phrase';
import AudioSuccess from '@/modules/shared/audioSuccess';
import PlayAudioButton from '@/modules/shared/PlayAudioButton';
import EverydayEnglishContainer from '../shared/EverydayEnglishContainer';
import UpdateButton from '@/modules/shared/UpdateButton';
import { useIterate } from '../../shared/hooks/useIterate';

type Props = {
    data: Phrase[]
}

export default function PhrasesLessonLayout({ data }: Props) {
    const [droppedIds, setdroppedIds] = useState([])
    const [successAudioTrigger, setSuccessAudioTrigger] = useState(false)
    const sensorConfig = {
        activationConstraint: {
            distance: 8
        }
    }
    const mouseSensor = useSensor(MouseSensor, sensorConfig)
    const touchSensor = useSensor(TouchSensor, sensorConfig)
    const sensors = useSensors(mouseSensor, touchSensor)

    const { updateIteration, iteration } = useIterate(data)

    const updateDroppedIds = (id) => {
        const newDropIds = [...droppedIds, id]
        setdroppedIds(newDropIds)
    }

    function handleDragEnd(event) {
        const { over } = event
        const { active } = event

        if (over && over.id === active.id) {
            updateDroppedIds(over.id)
            setSuccessAudioTrigger(!successAudioTrigger)
        }
    }

    const updateIterationsHandler = () => {
        setdroppedIds([])
        updateIteration()
    }

    const draggables = data.filter(item => item.iteration === iteration)
    const droppables = shuffleArray([...draggables]) // перемешивает варианты

    return (
        <EverydayEnglishContainer className={styles.internalLayout}>
            <div>
                <h1 className={styles.h1}>Перетащите фразы к переводам</h1>
            </div>
            <div className={styles.cardsContainer}>
                <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                    <div className={styles.cardsSection}>
                        {draggables.map(item => (
                            !droppedIds.includes(item.id) &&
                            <DraggableCard
                                draggableId={item.id}
                                className={styles.card}
                                keyProp={item.id}
                                key={item.id}
                            >
                                {item.en}
                                <PlayAudioButton src='https://storage.googleapis.com/langy.su/audio/lesson1/apple.mp3' />
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
            <UpdateButton onClick={updateIterationsHandler} />
            <AudioSuccess trigger={successAudioTrigger} />
        </EverydayEnglishContainer>
    )
}