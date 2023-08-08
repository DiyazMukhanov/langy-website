import { Typography } from '@/components/Typography'
import styles from './Level.module.scss'
import Header from '@/components/Header'
import { Button } from '@/components/Button'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'

export default function Level() {
  // const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // useEffect(() => {
  //   const updateToOnLevelTest = async () => {
  //     try {
  //       const userData = await setOnLevelTest()
  //       if(userData) {
  //         setIsLoading(false)
  //       } 
  //     } catch(error) {
  //       console.log(error)
  //       setIsLoading(false)
  //     }
  //   }

  //   updateToOnLevelTest()

    
  // }, [])

    
      return (
        <>
          <Header variant='blue'></Header>
          <div className={styles.container}>
          <Typography size='small' element='h3' className={styles.text}>Пройдите короткий тест.</Typography>
          <Typography size='small' element='h3' className={styles.text}>Мы определим ваш уровень.</Typography>
          <Button variant='authLargeContained' className={styles.levelBtn} onClick={() => router.push('/test/test')}>Определить мой уровень</Button>
          <Button variant='standardLargeOutlined' className={styles.levelBtnTwo} onClick={() => router.push('/test/choice')}>Я выберу программу самостоятельно</Button>
          </div>
        </>
        )
    }
  

