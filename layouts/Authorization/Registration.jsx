import styles from './Registration.module.scss'
import ButtonClose from '../../public/images/Button-close.svg'
import Google from '../../public/images/Google.svg'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'

export default function Registration() {
    return (
    <div className={styles.container}>
        <div className={styles.header}>
        <Image
           priority
           src={ButtonClose}
           width={15}
           className={styles.close}
           />
           <Button variant='standardAuthOutlined'>Войти</Button>
        </div>

        <div className={styles.formContainer}>
           <Typography size='small' element='h2' className={styles.formHeading}>Создайте аккаунт</Typography>
        
        <div className={styles.inputs}>
          <input placeholder='Имя' className={styles.input}></input>
          <input placeholder='Электронная почта' className={styles.input}></input>
          <input placeholder='Пароль' className={styles.input}></input>
          <input placeholder='Повторить пароль' className={styles.input}></input>
        </div>
        <Button variant='authLargeContained'>Зарегистрироваться</Button>
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