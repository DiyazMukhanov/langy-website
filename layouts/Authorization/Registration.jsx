import styles from './Registration.module.scss'
import ButtonClose from '../../public/images/Button-close.svg'
import Google from '../../public/images/Google.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
// import { googleRegistration } from '../../api/auth'
import axios from 'axios';
import { useState } from 'react'
import { useRouter } from "next/router"

export default function Registration() {
    const [nameInputValue, setNameInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [passwordConfirmInputValue, setPasswordConfirmInputValue] = useState('')

    // const handleGoogleAuth = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:3002/auth/google');
    //       // Handle the response from the backend, if needed
    //       console.log('Google Auth Response:', response.data);
    //     } catch (error) {
    //       console.error('Google Auth Error:', error);
    //     }
    //   };

    const router = useRouter()

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

      const userSignUpHandler = async () => {
        const url = 'http://localhost:3000/api/v1/users/signup'; 

        const body = {
            name: nameInputValue,
            email: emailInputValue,
            password: passwordInputValue,
            passwordConfirm: passwordConfirmInputValue
        }
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                         },
                body: JSON.stringify(body),
            })
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
    
              const responseData = await response.json();
              console.log('Response data:', responseData);
        } catch (error) {
            console.error('Error:', error);
            // Handle any errors that occurred during the fetch request
          }
      }

      const goToLoginHandler = () => {
        router.push('/authorization/login')
      }

    return (
    <div className={styles.container}>
        <div className={styles.header}>
        <Image
           priority
           src={ButtonClose}
           width={15}
           className={styles.close}
           />
           <Button variant='standardAuthOutlined' onClick={goToLoginHandler}>Войти</Button>
        </div>

        <div className={styles.formContainer}>
           <Typography size='small' element='h2' className={styles.formHeading}>Создайте аккаунт</Typography>
        
        <div className={styles.inputs}>
          <input placeholder='Имя' className={styles.input} onChange={nameNameInputHandler}></input>
          <input placeholder='Электронная почта' className={styles.input} onChange={emailInputHandler}></input>
          <input placeholder='Пароль' className={styles.input} onChange={passwordInputHandler}></input>
          <input placeholder='Повторить пароль' className={styles.input} onChange={passwordConfirmInputHandler}></input>
        </div>
        <Button variant='authLargeContained' onClick={userSignUpHandler}>Зарегистрироваться</Button>
        <p>или</p>
        <Button 
        variant='google'
        // onClick={handleGoogleAuth}
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