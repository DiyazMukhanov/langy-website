import { DndContext } from "@dnd-kit/core";
import DroppableCard from "../../../shared/DragComponents/DroppableCard";
import DraggableCard from "../../../shared/DragComponents/DraggableCard";
import { MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useCallback, useState } from "react";
import { shuffleArray } from "../../lessons/utils/shuffleArray";
import styles from "./PhrasesLessonLayout.module.scss";
import { Phrase } from "./types/phrase";
import AudioSuccess from "@/modules/shared/audioSuccess";
import PlayAudioButton from "@/modules/shared/PlayAudioButton";
import EverydayEnglishContainer from "../shared/EverydayEnglishContainer";
import UpdateButton from "@/modules/shared/UpdateButton";
import { useIterate } from "../../shared/hooks/useIterate";
import classNames from "classnames";
import { useDroppedItems } from "../../shared/hooks/useDroppedItems";
import Image from "next/image";
import TwoWomen from "../../../../public/images/two_women.webp";

type Props = {
  data: Phrase[];
};

export default function PhrasesLessonLayout({ data }: Props) {
  const [successAudioTrigger, setSuccessAudioTrigger] = useState(false);
  const sensorConfig = {
    activationConstraint: {
      distance: 8,
    },
  };
  const mouseSensor = useSensor(MouseSensor, sensorConfig);
  const touchSensor = useSensor(TouchSensor, sensorConfig);
  const sensors = useSensors(mouseSensor, touchSensor);

  const { updateIteration, iteration } = useIterate(data);
  const { updateDroppedIds, droppedIds, resetDroppedItems } = useDroppedItems();

  function handleDragEnd(event) {
    const { over } = event;
    const { active } = event;

    if (over && over.id === active.id) {
      updateDroppedIds(over.id);
      setSuccessAudioTrigger(!successAudioTrigger);
    }
  }

  const updateIterationsHandler = () => {
    resetDroppedItems();
    updateIteration();
  };

  const getDraggables = (data: Phrase[]): any => {
    const draggables = data.filter((item) => item.iteration === iteration);
    return draggables;
  };

  const getNewDroppables = (arr: Phrase[]): any => {
    const newDroppables: Phrase[] = shuffleArray([...arr]); // перемешивает варианты
    return newDroppables;
  };

  const draggables = useCallback(getDraggables(data), [iteration]);
  const droppables = useCallback(getNewDroppables(draggables), [draggables]);

  return (
    <EverydayEnglishContainer className={styles.internalLayout}>
      <h1 className={styles.h1}>Перетащите фразы к переводам</h1>
      <Image
        src={TwoWomen}
        alt="two women"
        height={300}
        style={{ borderRadius: "10px" }}
        className={styles.image}
      />
      <div className={styles.cardsContainer}>
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
          <div className={styles.cardsSection}>
            {draggables.map(
              (item) =>
                !droppedIds.includes(item.id) && (
                  <DraggableCard
                    draggableId={item.id}
                    className={styles.card}
                    keyProp={item.id}
                    key={item.id}
                  >
                    <span className={styles.draggableText}>{item.en}</span>
                    <PlayAudioButton src={item.src} />
                  </DraggableCard>
                )
            )}
          </div>

          <div className={styles.cardsSection}>
            {droppables.map((item) => (
              <DroppableCard
                droppableId={item.id}
                className={classNames(styles.card, {
                  [styles.right]: droppedIds.includes(item.id),
                })}
                overStyle={styles.overStyle}
                keyProp={item.id}
                key={item.id}
              >
                <div className={styles.droppedContainer}>
                  <span>{item.ru}</span>
                  {droppedIds.includes(item.id) && <span>{item.en}</span>}
                </div>
              </DroppableCard>
            ))}
          </div>
        </DndContext>
      </div>
      <UpdateButton onClick={updateIterationsHandler} />
      <AudioSuccess trigger={successAudioTrigger} />
    </EverydayEnglishContainer>
  );
}
