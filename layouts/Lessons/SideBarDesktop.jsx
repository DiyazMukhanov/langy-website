import styles from './SideBar.module.scss'
import Sidebar from '@/components/Sidebar'

export default function SideBarDesktop({ lessonsSummary, expires }) {
    
    return (
    <div className={styles.sideBar}>
    {expires && <p>подписка действует до {expires}</p>}
    <Sidebar lessonsSummary={lessonsSummary}/>
    </div> 
    )
}