import styles from './Login.module.scss'
import ButtonClose from '../../public/images/Button-close.svg'
import Google from '../../public/images/Google.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { useState } from 'react'
import classNames from 'classnames'
import { loginUser } from '@/api/user'
import { useRouter } from 'next/router'

export default function Login() {
    const [emailInputValue, setEmailInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [emailEmpty, setEmailEmpty] = useState(false)
    const [passwordEmpty, setPasswordEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    console.log(isLoading)

    const router = useRouter()

    const emailInputHandler = (event) => {
        setEmailInputValue(event.target.value)
      }
  
    const passwordInputHandler = (event) => {
        setPasswordInputValue(event.target.value)
    }

    const body = {
        email: emailInputValue,
        password: passwordInputValue
    }

    const userLoginHandler = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        console.log('test clicked')

        setPasswordEmpty(false)
        setEmailEmpty(false)

        if(!emailInputValue) {
            setEmailEmpty(true)
            }

        if(!passwordInputValue) {
            setPasswordEmpty(true)
            }

        if(!emailInputValue || !passwordInputValue) {
            console.log('Empty fields detected')
            setIsLoading(false)
            return
            }

        try {
            console.log(body)
            const userData = await loginUser(body)
            if(userData.data.token) {
                localStorage.setItem('token', userData.data.token)
                setIsLoading(false)
                router.push('/test/level')
            }
            } catch (error) {
                setIsLoading(false)
                alert('Произошла ошибка, повторите попытку')
                console.log(error)
            }
    }

    const goToSignUpHandler = () => {
        router.push('/authorization/registration')
      }

    const goToMainHandler = () => {
    router.push('/')
    }

    return (
    <div className={styles.container}>
        <div className={styles.header}>
        <Image
           priority
           src={ButtonClose}
           width={15}
           className={styles.close}
           onClick={goToMainHandler}
           />
           <Button variant='standardAuthOutlined' onClick={goToSignUpHandler}>Регистрация</Button>
        </div>

        <div className={styles.formContainer}>
           <Typography size='small' element='h2' className={styles.formHeading}>Вход</Typography>
        
        <form onSubmit={userLoginHandler} className={styles.form}>
        <div className={styles.inputs}>
          <input placeholder='Email' className={classNames({[styles.errorInput]: emailEmpty}, {[styles.input]: !emailEmpty})} onChange={emailInputHandler}></input>
          <input placeholder='Пароль' className={classNames({[styles.errorInput]: passwordEmpty}, {[styles.input]: !passwordEmpty})} onChange={passwordInputHandler}></input>
        </div>
        <p className={styles.forgotPassword}>Забыли пароль</p>
        <Button variant='authLargeContained' disabled={isLoading}>Войти</Button>
        </form>
        <p>или</p>
        <Button 
        variant='google'
        >
           <Image
           priority
           src={Google}
           width={15}
           className={styles.close}
           />
            Google
        </Button>
        </div>
    </div>
    )
}