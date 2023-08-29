export const videoTasks = [
    {
        number: 1,
        title: 'I play soccer well.',
        answers: [
            {
                id: 1,
                answer: "He say that he play soccer well",
                isCorrect: false
            },
            {
                id: 2,
                answer: "He says that he plays soccer well",
                isCorrect: false
            },
            {
                id: 3,
                answer: "He said that he plays soccer well",
                isCorrect: true
            }
        ]
    },
    {
        number: 2,
        title: '2.Teacher said "The earth is round"',
        answers: [
            {
                id: 1,
                answer: "The teacher said that the earth was round",
                isCorrect: false
            },
            {
                id: 2,
                answer: "The teacher told that the earth was round",
                isCorrect: false
            },
            {
                id: 3,
                answer: 'The teacher said that the earth is round',
                isCorrect: true
            }
        ]
    },
    {
        number: 3,
        title: '3. She told me "I am working hard"',
        answers: [
            {
                id: 1,
                answer: "She told me that she was working hard",
                isCorrect: true
            },
            {
                id: 2,
                answer: "She told me that she is working hard",
                isCorrect: false
            },
            {
                id: 3,
                answer: "She told me that I was working hard",
                isCorrect: false
            }
        ]
    },
]

export const videoUrl = 'https://www.youtube.com/watch?v=iFNFD0pS1gk' 