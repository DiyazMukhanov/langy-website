import styles from './SideBar.module.scss'
import Sidebar from '@/components/Sidebar'

export default function SideBarDesktop({ lessonsSummary, expires, isBeginner }) {

    return (
        <div className={styles.sideBar}>
            {expires && <p>подписка действует до {expires}</p>}
            <Sidebar lessonsSummary={lessonsSummary} isBeginner={isBeginner} />
        </div>
    )
}