import EasyEnglishNav from "../shared/EasyEnglishNav";
import styles from "./EasyEnglishSideBar.module.scss"

export default function EasyEnglishSidebar() {
    return (
        <div className={styles.navContainer}>
            <EasyEnglishNav />
        </div>
    )
}