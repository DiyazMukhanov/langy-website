import React, { useState } from "react"
import { useRouter } from "next/router"

export const UserContext = React.createContext({
    userData: {},
    setUserData: () => {},
    logOut: () => {},
    lessonsSummary: [],
    setProgressData: () => {},
    progressData: [],
    getUpdatedLessonsSummary: () => {}
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
                    chapterCode: 'gr',
                    ru: 'Грамматика',
                    isCurrent: true,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    chapterCode: 'au',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    chapterCode: 'wr',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    chapterCode: 'ts',
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
                    chapterCode: 'gr',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    chapterCode: 'au',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    chapterCode: 'wr',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    chapterCode: 'ts',
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
                    chapterCode: 'gr',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    chapterCode: 'au',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    chapterCode: 'wr',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    chapterCode: 'ts',
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
                    chapterCode: 'gr',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    chapterCode: 'au',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    chapterCode: 'wr',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    chapterCode: 'ts',
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
                    chapterCode: 'gr',
                    ru: 'Грамматика',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Listening/Reading',
                    chapterCode: 'au',
                    ru: 'Аудио/Чтение',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Writing',
                    chapterCode: 'wr',
                    ru: 'Письмо',
                    isCurrent: false,
                    isCompleted: false
                },
                {
                    chapter: 'Test',
                    chapterCode: 'ts',
                    ru: 'Тест',
                    isCurrent: false,
                    isCompleted: false
                },
            ]
        }
    ]

    
    const [lessonsSummary, setLessonsSummary] = useState(lessonsSummaryInitial)
    
    const [progressData, setProgressData] = useState(null)

    const lessonsIndexes = {
        gr: 0,
        au: 1,
        wr: 2,
        ts: 3
    }

    // Get updated lessonsSummary upon updating of progressData which we get from server
    const getUpdatedLessonsSummary = () => {
        let updatedLessonsSummary;
        if(progressData !== null) {
             updatedLessonsSummary = lessonsSummary.map(lesson => {
                progressData.map(progressItem => {
                    if(progressItem.lesson === lesson.lessonNumber) {
                        
                        lesson.lessons[lessonsIndexes[progressItem.chapter]].isCompleted = true
                    }
                })

                return lesson
            })

        } else {
            console.log('data is null')
            return lessonsSummary
        }

        let finallyUpdatedLessonsSummary
        
        if(updatedLessonsSummary) {
            finallyUpdatedLessonsSummary = updatedLessonsSummary.map(lesson => {
                const filteredLessonItem = lesson.lessons.filter(item => item.isCompleted === true)
                if(filteredLessonItem.length === 4) {
                 lesson.isCompleted = true
                }

                return lesson
            })
        }
       
        console.log(finallyUpdatedLessonsSummary)
        return updatedLessonsSummary
    }

   
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
        lessonsSummary,
        setProgressData,
        progressData,
        getUpdatedLessonsSummary
    }

    return (
        <UserContext.Provider value={userContext}>
           {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider

