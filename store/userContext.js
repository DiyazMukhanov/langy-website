import React, { useState } from "react"
import { useRouter } from "next/router"

export const UserContext = React.createContext({
    userData: {},
    setUserData: () => {},
    logOut: () => {},
    lessonsSummary: []
})

const UserProvider = (props) => {
    const [userData, setUserData] = useState(null)
    const router = useRouter()

    const lessonsSummaryInitial = [
        {
            title: 'Урок 1',
            lessonNumber: 1,
            isCompleted: false,
            isCurrent: true,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: true,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 2',
            lessonNumber: 2,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 3',
            lessonNumber: 3,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 4',
            lessonNumber: 4,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        },
        {
            title: 'Урок 5',
            lessonNumber: 5,
            isCompleted: false,
            isCurrent: false,
            lessons: [
                {
                    chapter: 'Grammar: video lesson',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: true
                },
                {
                    chapter: 'Listening/Reading',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        }
    ]

    const [lessonsSummary, setLessonsSummary] = useState(lessonsSummaryInitial)

    const logOut = () => {
        localStorage.setItem('token', null)
        if(router.asPath === '/') {
            router.reload()
        }
        router.push('/')
    }
    
    const userContext = {
        userData,
        setUserData,
        logOut,
        lessonsSummary
    }

    return (
        <UserContext.Provider value={userContext}>
           {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider

