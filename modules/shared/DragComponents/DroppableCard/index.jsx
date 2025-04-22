import { useDroppable } from '@dnd-kit/core';
import classNames from 'classnames';

export default function DroppableCard({ children, droppableId, className, overStyle, keyProp }) {
    const { isOver, setNodeRef } = useDroppable({
        id: droppableId
    })

    return (
        <div
            ref={setNodeRef}
            key={keyProp}
            className={
                classNames(
                    className,
                    { [overStyle]: isOver }
                )
            }
        >
            {children}
        </div>
    )
}