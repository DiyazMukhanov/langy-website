import { useDraggable } from '@dnd-kit/core';

export default function DraggableCard({ children, draggableId, className, keyProp }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: draggableId,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} key={keyProp} style={style} {...listeners} {...attributes} className={className}>
            {children}
        </div>
    );
}