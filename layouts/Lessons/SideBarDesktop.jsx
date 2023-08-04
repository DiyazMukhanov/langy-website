import { Typography } from '@/components/Typography'
import styles from './SideBar.module.scss'
import Sidebar from '@/components/Sidebar'

export default function SideBarDesktop({ lessonsSummary }) {
    
    return (
    <div className={styles.sideBar}>
    <Typography size='small' element='h3' className={styles.text}>Beginner</Typography>
    <p>подписка действует до 30.07.23</p>
    <Sidebar lessonsSummary={lessonsSummary}/>
    </div> 
    )
}