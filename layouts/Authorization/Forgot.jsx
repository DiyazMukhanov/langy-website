import { useRouter } from "next/router";
import { useState } from "react";
import styles from './Forgot.module.scss'
import classNames from "classnames";
import { Button } from "@/components/Button";
import validator from "validator";
import { forgotPassword } from "@/api/user";

const Forgot = () => {
    const router = useRouter()

    const [emailSent, setEmailSent] = useState(false);
    const [emailValue, setEmailValue] = useState('')
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [emptyField, setEmptyField] = useState(false)

    const forgotHandler = async (event) => {
        event.preventDefault()
        setError(false)
        setEmptyField(false)
        setIsLoading(true)

        if (!emailValue) {
            setEmptyField(true)
            setInvalidEmail(false)
            setIsLoading(false)
            return
        }

        if (!validator.isEmail(emailValue)) {
            setInvalidEmail(true)
            setIsLoading(false)
            console.log('Invalid email')
            return
        }

        try {
            const data = await forgotPassword(emailValue)
            if (data) {
                setIsLoading(false)
                setEmailSent(true)
            }
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }

    }

    if (emailSent) {
        return (
            <>
                <div className={styles.complete}>
                    Ссылка для сброса отправлена на указанный почтовый ящик
                    <Button variant='authLargeContained' onClick={() => router.push('/')}>На главную</Button>
                </div>
            </>
        )
    }

    return (
        <div className={styles.container}>
            <form
                className={styles.form}
                onSubmit={forgotHandler}
            >
                <p className={styles.paragraph}>Сброс пароля</p>
                <div className={styles.formBlock}><label className={styles.label}>Email</label>
                    <input
                        placeholder='Укажите ваш почтовый адрес'
                        className={classNames({ [styles.warningInput]: emptyField }, styles.input)}
                        onChange={(event) => setEmailValue(event.target.value)}
                    >
                    </input>
                </div>

                <Button
                    variant='authLargeContained'
                    className={styles.button}
                    disabled={isLoading}
                >
                    Сбросить пароль
                </Button>
                {isLoading && <p className={styles.warning}>Идёт сброс вашего пароля...</p>}
                {error && <p className={styles.warning}>Неправильный почтовый адрес или пароль</p>}
                {emptyField && <p className={styles.warning}>Введите почтовый адрес!</p>}
                {invalidEmail && <p className={styles.warning}>Введите валидный почтовый адрес!</p>}

            </form>
        </div>
    )
}

export default Forgot