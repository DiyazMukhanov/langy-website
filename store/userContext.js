import React, { useState } from "react"
import { useRouter } from "next/router"
import { getLessonsSummaryInitial } from "./../utils/lessonsSummary"

export const UserContext = React.createContext({
    userData: {},
    setUserData: () => {},
    logOut: () => {},
    // lessonsSummary: [],
    setProgressData: () => {},
    progressData: [],
    getUpdatedLessonsSummary: () => {}
})

const UserProvider = (props) => {
    const [userData, setUserData] = useState(null)
    const router = useRouter()
    const lessonsSummaryInitial = getLessonsSummaryInitial()
    const lessonSummaryForMutation = [...lessonsSummaryInitial]
    
    // const [lessonsSummary, setLessonsSummary] = useState(lessonSummaryForMutation)
  
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
        if(progressData === null || progressData.length === 0) {
            return lessonsSummaryInitial
        } else {
            updatedLessonsSummary = lessonSummaryForMutation.map(lesson => {
                progressData.map(progressItem => {
                    if(progressItem.lesson === lesson.lessonNumber) {
                        
                        lesson.lessons[lessonsIndexes[progressItem.chapter]].isCompleted = true
                    }
                })

                return lesson
            })
        }
        
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
        // lessonsSummary,
        // setLessonsSummary,
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

