import EverydayEnglishNav from "../shared/EverydayEnglishNav";
import styles from "./EverydayEnglishSideBar.module.scss"

export default function EverydayEnglishSidebar() {
    return (
        <div className={styles.navContainer}>
            <EverydayEnglishNav />
        </div>
    )
}