import { useIterate } from "../../shared/hooks/useIterate";
import EverydayEnglishContainer from "../shared/EverydayEnglishContainer";
import styles from "./BlocksLessonLayout.module.scss";
import { DndContext } from "@dnd-kit/core";
import DroppableCard from "../../../shared/DragComponents/DroppableCard";
import DraggableCard from "../../../shared/DragComponents/DraggableCard";
import { MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import { useDroppedItems } from "../../shared/hooks/useDroppedItems";
import AudioSuccess from "@/modules/shared/audioSuccess";
import { shuffleArray } from "../../lessons/utils/shuffleArray";
import { BlocksData, BlockItem } from "./types";
import UpdateButton from "@/modules/shared/UpdateButton";
import classNames from "classnames";

export default function BlocksLessonLayout({ blocks }) {
  const sensorConfig = {
    activationConstraint: {
      distance: 8,
    },
  };

  const mouseSensor = useSensor(MouseSensor, sensorConfig);
  const touchSensor = useSensor(TouchSensor, sensorConfig);
  const sensors = useSensors(mouseSensor, touchSensor);
  const [successAudioTrigger, setSuccessAudioTrigger] = useState(false);
  const { updateIteration, iteration } = useIterate(blocks);
  const data = blocks.filter((item) => item.iteration === iteration);

  const { updateDroppedIds, droppedIds, resetDroppedItems } = useDroppedItems();

  function handleDragEnd(event) {
    const { over } = event;
    const { active } = event;

    if (over && over.id === active.id) {
      updateDroppedIds(over.id);
      setSuccessAudioTrigger(!successAudioTrigger);
    }
  }

  const getDraggables = (data): any => {
    const draggables = data.filter((item) => item.iteration === iteration);
    return draggables;
  };

  const getNewDroppables = (arr): any => {
    const newDroppables = shuffleArray([...arr]); // перемешивает варианты
    return newDroppables;
  };

  const droppables: BlocksData = getDraggables(data);
  const draggables: BlocksData = getNewDroppables(droppables);

  const updateIterationsHandler = () => {
    resetDroppedItems();
    updateIteration();
  };

  const renderDraggableCardItem = (item: BlockItem) => {
    if (!droppedIds.includes(item.id)) {
      return (
        <DraggableCard
          draggableId={item.id}
          className={classNames(styles.block, styles.draggableBlock)}
          keyProp={item.id}
          key={item.id}
        >
          {item.en}
        </DraggableCard>
      );
    }

    return <div className={styles.empty} key={item.id}></div>;
  };

  return (
    <EverydayEnglishContainer className={styles.internalLayout}>
      <h1 className={styles.h1}>Составьте фразу</h1>
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <div className={styles.cards}>
          {droppables.map((item) => (
            <DroppableCard
              droppableId={item.id}
              className={styles.block}
              overStyle={styles.overStyle}
              keyProp={item.id}
              key={item.id}
            >
              <div key={item.id}>
                {droppedIds.includes(item.id) ? item.en : ""}
              </div>
            </DroppableCard>
          ))}
        </div>
        <div className={styles.cards}>
          {draggables.map((item) => renderDraggableCardItem(item))}
        </div>
      </DndContext>
      <UpdateButton onClick={updateIterationsHandler} />
      <AudioSuccess trigger={successAudioTrigger} />
    </EverydayEnglishContainer>
  );
}
