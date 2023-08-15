import { useRouter } from 'next/router'
import styles from "../../../layouts/Authorization/Login.module.scss"
import classNames from "classnames";
import { Button } from '@/components/Button';
import { resetPassword } from '@/api/user';
import { useState } from "react";

import validator from "validator";

const passwordReset = () => {
    const router = useRouter()
    const {token} = router.query
    
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordConfirmValue, setPasswordConfirmValue] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [passwordEmpty, setPasswordEmpty] = useState(false)
    const [passConfirmEmpty, setPassConfirmEmpty] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [passWordsDiffer, setPasswordsDiffers] = useState(false)


    // error handling
    const [error, setError] = useState(false);
    const [emptyField, setEmptyField] = useState(false)

    function onlyLatinCharacters(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }

    const resetPasswordHandler = async (event) => {
        event.preventDefault()
        setError(false)
        setPasswordEmpty(false)
        setPassConfirmEmpty(false)
        setInvalidPassword(false)
        setPasswordsDiffers(false)

        if(!passwordValue) {
            setPasswordEmpty(true)
        }
        if(!passwordConfirmValue) {
            setPassConfirmEmpty(true)
        }

        if( !passwordValue || !passwordConfirmValue ) {
            setEmptyField(true)
            return
        }

        if(!onlyLatinCharacters(passwordValue) || passwordValue.length < 7) {
            setInvalidPassword(true)
            return
        }

        if(passwordValue !== passwordConfirmValue) {
            setPasswordsDiffers(true)
            return
        }

        setIsLoading(true)

        try{
            const data = await resetPassword(passwordValue, passwordConfirmValue, token)
            console.log(data)
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }   
    }

    return (
        <div className={styles.container}>
            <form
                className={styles.form}
                onSubmit={resetPasswordHandler}
            >
                <p className={styles.paragraph}>Сброс пароля</p>

                <div className={styles.formBlock}><label className={styles.label}>Придумайте новый пароль</label>
                    <input
                        type='password'
                        placeholder='Придумайте новый пароль'
                        className={classNames({[styles.warningInput]: passwordEmpty}, styles.input)}
                        onChange={(event) => setPasswordValue(event.target.value)}
                    >
                    </input>
                </div>
                <div className={styles.formBlock}><label className={styles.label}>Повторите новый пароль</label>
                    <input
                        type='password'
                        placeholder='Повторите новый пароль'
                        className={classNames({[styles.warningInput]: passConfirmEmpty}, styles.input)}
                        onChange={(event) => setPasswordConfirmValue(event.target.value)}
                    >
                    </input>
                </div>

                <Button
                    variant='contained'
                    size='small'
                    className={styles.button}
                    disabled={isLoading}
                >
                    Обновить пароль
                </Button>

                {isLoading && <p className={styles.warning}>Идёт обновление пароля...</p>}
                {emptyField && <p className={styles.warning}>Заполните все поля!</p>}

                {invalidPassword && <p className={styles.warning}>Пароль должен состоять из латинских букв или цифр. Длина пароля минимум 8 букв</p>}
                {passWordsDiffer && <p className={styles.warning}>Пароли не совпадают</p>}
            </form>
        </div>
    )
}



export default passwordReset