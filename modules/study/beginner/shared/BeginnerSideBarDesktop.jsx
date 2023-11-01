import BeginnerSidebar from './BeginnerSideBar'
import styles from '../../advanced/shared/SideBar.module.scss'

export default function BeginnerSideBarDesktop({ lessonsSummary, beginnerProgress }) {

    return (
        <div className={styles.sideBar} >
            <BeginnerSidebar lessonsSummary={lessonsSummary} beginnerProgress={beginnerProgress} />
        </div>
    )
}