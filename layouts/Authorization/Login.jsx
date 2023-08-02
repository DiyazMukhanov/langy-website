import styles from './Login.module.scss'
import ButtonClose from '../../public/images/Button-close.svg'
import Google from '../../public/images/Google.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'

export default function Login() {
    return (
    <div className={styles.container}>
        <div className={styles.header}>
        <Image
           priority
           src={ButtonClose}
           width={15}
           className={styles.close}
           />
           <Button variant='standardAuthOutlined'>Регистрация</Button>
        </div>

        <div className={styles.formContainer}>
           <Typography size='small' element='h2' className={styles.formHeading}>Вход</Typography>
        
        <div className={styles.inputs}>
          <input placeholder='Имя' className={styles.input}></input>
          <input placeholder='Пароль' className={styles.input}></input>
        </div>
        <p className={styles.forgotPassword}>Забыли пароль</p>
        <Button variant='authLargeContained'>Войти</Button>
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