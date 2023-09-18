import BeginnerSidebar from '@/components/BeginnerSideBar'
import styles from './SideBar.module.scss'

export default function BeginnerSideBarDesktop({ lessonsSummary, beginnerProgress }) {
    
    return (
    <div className={styles.sideBar} >
    <BeginnerSidebar lessonsSummary={lessonsSummary} beginnerProgress={beginnerProgress}/>
    </div> 
    )
}