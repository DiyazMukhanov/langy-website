import { useState } from "react";

export function useIterate(data) {
    const [iteration, setIteration] = useState(1)

    function updateIteration() {
        const maxIteration = data[data.length - 1].iteration
        if (iteration === maxIteration) {
            setIteration(1)
        } else {
            setIteration(iteration + 1)
        }
    }

    return {
        iteration,
        updateIteration
    }
}

// Этот хук принимает массив объектов со свойством iteration: number