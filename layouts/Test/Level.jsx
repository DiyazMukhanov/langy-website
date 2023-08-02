import { Typography } from '@/components/Typography'
import styles from './Level.module.scss'
import Header from '@/components/Header'
import { Button } from '@/components/Button'




export default function Level() {
    return (
    <>
      <Header variant='blue'></Header>
      <div className={styles.container}>
      <Typography size='small' element='h3' className={styles.text}>Пройдите короткий тест.</Typography>
      <Typography size='small' element='h3' className={styles.text}>Мы определим ваш уровень.</Typography>
      <Button variant='authLargeContained' className={styles.levelBtn}>Определить мой уровень</Button>
      <Button variant='standardLargeOutlined' className={styles.levelBtnTwo}>Я выберу программу самостоятельно</Button>
      </div>
    </>
    )
}

