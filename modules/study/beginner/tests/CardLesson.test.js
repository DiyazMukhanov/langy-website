import { render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'

import CardLesson from "../CardsLesson/index"
import userEvent from "@testing-library/user-event"

const words = [
    {
        ru: 'яблоко',
        enRight: 'apple',
        imageUrl: 'https://storage.googleapis.com/langy.su/images/food/apple.jpg',
        enWrong: ['orange', 'bread'],
        audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson1/apple.mp3'
    },
]

describe('CardLesson component in beginner section', () => {
    it('right chosen answer proper behavior', async () => {
        render(<CardLesson words={words} />)

        const rightAnswerCard = screen.getByText('apple')

        userEvent.click(rightAnswerCard)

        await waitFor(() => {
            expect(rightAnswerCard).toHaveClass('right');
        });
    })

    it('wrong chosen answer proper behavior', async () => {
        render(<CardLesson words={words} />)

        const wrongAnswerCard = screen.getByText('orange')

        userEvent.click(wrongAnswerCard)

        await waitFor(() => {
            expect(wrongAnswerCard).not.toHaveClass('right');
        });
    })
})
