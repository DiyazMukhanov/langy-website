import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '@/store/userContext'
import { userLogout } from '../api/userLogout'
import BlueHeader from './BlueHeader'
import WhiteHeader from './WhiteHeader/index'

export default function Header({ variant, isEasyEnglish }) {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const router = useRouter()
  const userCtx = useContext(UserContext)
  const lessonsSummary = userCtx.getUpdatedLessonsSummary()
  const firstLetterOfName = userCtx?.userData?.name[0].toUpperCase()

  const modalCloseHandler = () => {
    setIsModalOpened(false)
  }

  const modalOpenHandler = () => {
    console.log('clicked')
    setIsModalOpened(true)
  }

  const goToMainHandler = () => {
    router.push('/')
  }

  const logOutHandler = async () => {
    try {
      const response = await userLogout()
      userCtx.setUserData(null)
      router.push('/')
    } catch (err) {
      alert('Произошла ошибка выхода')
    }
  }

  if (variant === 'blue') {
    return (
      <>
        <BlueHeader
          modalCloseHandler={modalCloseHandler}
          modalOpenHandler={modalOpenHandler}
          goToMainHandler={goToMainHandler}
          logOutHandler={logOutHandler}
          lessonsSummary={lessonsSummary}
          firstLetterOfName={firstLetterOfName}
          isModalOpened={isModalOpened}
        />
      </>
    )

  }

  if (variant === 'white') {
    return <>
      <WhiteHeader
        modalCloseHandler={modalCloseHandler}
        modalOpenHandler={modalOpenHandler}
        goToMainHandler={goToMainHandler}
        logOutHandler={logOutHandler}
        lessonsSummary={lessonsSummary}
        firstLetterOfName={firstLetterOfName}
        isModalOpened={isModalOpened}
        isEasyEnglish={isEasyEnglish}
      />
    </>

  }

}