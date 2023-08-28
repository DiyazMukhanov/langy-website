import styles from './Registration.module.scss'
import ButtonClose from '../../public/images/Button-close.svg'
import Google from '../../public/images/Google.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import axios from 'axios';
import { useRef, useState } from 'react'
import { useRouter } from "next/router"
import { registerUser } from '@/api/user'
import classNames from 'classnames'
import validator from "validator"
import { goToMainHandler } from '@/utils/helpers'

export default function Registration() {
    const [nameInputValue, setNameInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [passwordConfirmInputValue, setPasswordConfirmInputValue] = useState('')
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [nameEmpty, setNameEmpty] = useState(false)
    const [emailEmpty, setEmailEmpty] = useState(false)
    const [passwordEmpty, setPasswordEmpty] = useState(false)
    const [passConfirmEmpty, setPassConfirmEmpty] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [passWordsDiffer, setPasswordsDiffers] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [userExists, setUserExists] = useState(false)

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordConfirmRef = useRef(null)
    

    let serverUrl
    if(process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
      serverUrl = `http://localhost:3000`
    } else {
      serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
    }

    const router = useRouter()

    function onlyLatinCharacters(str) {
      return /^[a-zA-Z0-9]+$/.test(str);
  }

    const nameNameInputHandler = (event) => {
      setNameInputValue(event.target.value)
      }

    const emailInputHandler = (event) => {
      setEmailInputValue(event.target.value)
    }

    const passwordInputHandler = (event) => {
      setPasswordInputValue(event.target.value)
    }

    const passwordConfirmInputHandler = (event) => {
      setPasswordConfirmInputValue(event.target.value)
    }

    //   const body = {
    //     name: nameInputValue,
    //     email: emailInputValue,
    //     password: passwordInputValue,
    //     passwordConfirm: passwordConfirmInputValue
    // }

      const userSignUpHandler = async (e) => {
        e.preventDefault()
        const body = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          passwordConfirm: passwordConfirmRef.current.value
      }
        setUserExists(false)
        setIsLoading(true)

        setInvalidEmail(false)
        setNameEmpty(false)
        setEmailEmpty(false)
        setPasswordEmpty(false)
        setPassConfirmEmpty(false)
        setInvalidPassword(false)
        setPasswordsDiffers(false)

        if(!nameInputValue) {
          setNameEmpty(true)
          setIsLoading(false)
          }

        if(!emailInputValue) {
          setEmailEmpty(true)
          setIsLoading(false)
          }

        if(!passwordInputValue) {
          setPasswordEmpty(true)
          setIsLoading(false)
          }

        if(!passwordConfirmInputValue) {
          setPassConfirmEmpty(true)
          setIsLoading(false)
          }
          
          // if(!nameInputValue || !emailInputValue || !passwordInputValue || !passwordConfirmInputValue ) {
          //   console.log('Empty fields detected')
          //   setIsLoading(false)
          // }

          if(!onlyLatinCharacters(passwordInputValue) || passwordInputValue.length < 7) {
            setInvalidPassword(true)
            alert('Используйте латинские буквы и цифры. Длина больше 8 символов.')
            setIsLoading(false)
            return
        }

        if(!validator.isEmail(emailInputValue)) {
          setInvalidEmail(true)
          alert('Используйте правильный email')
          setIsLoading(false)
          return
        }

        if(passwordInputValue !== passwordConfirmInputValue) {
          alert('Пароли не совпадают!')
          setPasswordsDiffers(true)
          setIsLoading(false)
          return
      }
      
       
        try {
          const userData = await registerUser(body)
          if(userData?.data?.message === 'User exists') {
            setUserExists(true)
            setIsLoading(false)
          }
          
          if(userData) {
            console.log(userData)
            // localStorage.setItem('token', userData.data.token)
            setIsLoading(false)
            router.push('/test/level')
          }
        } catch (error) {
            setIsLoading(false)
            alert('Произошла ошибка, повторите попытку')
            console.log(error)
        }
      }
    
      const goToLoginHandler = () => {
        router.push('/authorization/login')
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
           <Button variant='standardAuthOutlined' onClick={goToLoginHandler}>Войти</Button>
        </div>

        <div className={styles.formContainer}>
           <Typography size='small' element='h2' className={styles.formHeading}>Создайте аккаунт</Typography>
        
        <form onSubmit={userSignUpHandler}>
        <div className={styles.inputs}>
          <input placeholder='Имя' className={classNames({[styles.errorInput]: nameEmpty}, {[styles.input]: !nameEmpty})} onChange={nameNameInputHandler} ref={nameRef} name='email' autoComplete='email'></input>
          <input placeholder='Электронная почта' className={classNames({[styles.errorInput]: emailEmpty}, {[styles.input]: !emailEmpty})} onChange={emailInputHandler} ref={emailRef} name="email" autoComplete='off'></input>
          <input placeholder='Пароль' className={classNames({[styles.errorInput]: passwordEmpty}, {[styles.input]: !passwordEmpty})} onChange={passwordInputHandler} ref={passwordRef} name="password" autoComplete='off'></input>
          <input placeholder='Повторить пароль' className={classNames({[styles.errorInput]: passConfirmEmpty}, {[styles.input]: !passConfirmEmpty})} onChange={passwordConfirmInputHandler} ref={passwordConfirmRef} name="passwordConfirm" autoComplete='off'></input>
        </div>
        <Button 
        variant='authLargeContained' 
        // onClick={userSignUpHandler} 
        disabled={isLoading}
        className={styles.buttonRegister}
        >
          Зарегистрироваться
        </Button>
        </form>
        <p>или</p>
        <Button 
        variant='google'
        onClick={() => router.push(`${serverUrl}/api/auth`)}
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
        <div className={styles.existContainer}>
        {userExists && <p className={styles.exist}>Пользователь уже существует!</p>}
        {isLoading && <p className={styles.exist}>Идёт регистрация...</p>}
        </div>
    </div>
    )
    }
  