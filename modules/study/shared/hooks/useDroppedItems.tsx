import { useState } from "react"

export function useDroppedItems() {
    const [droppedIds, setdroppedIds] = useState([])

    const updateDroppedIds = (id: number) => {
        const newDropIds = [...droppedIds, id]
        setdroppedIds(newDropIds)
    }

    const resetDroppedItems = () => {
        setdroppedIds([])
    }

    return {
        droppedIds,
        updateDroppedIds,
        resetDroppedItems
    }
}