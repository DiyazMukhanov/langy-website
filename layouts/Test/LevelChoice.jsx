import Header from '@/components/Header'
import styles from './LevelChoice.module.scss'
import { Typography } from '@/components/Typography'

const LevelBlock = ({ children, onClick }) => {
  return (
    <div className={styles.level} onClick={onClick}>
      {children}
    </div>
  )
}

export default function LevelChoice() {
    return (
        <>
        <Header variant='blue'/>
        <div className={styles.container}>
            <Typography size='small' element='h3'>Выберите уровень</Typography>
            <div className={styles.levels}>
               <LevelBlock>Elementary</LevelBlock>
               <LevelBlock>Pre-Intermediate</LevelBlock>
               <LevelBlock>Intermediate</LevelBlock>
            </div>

        </div>
        </>
    )
}