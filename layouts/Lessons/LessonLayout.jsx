import Header from "@/components/Header";
import styles from './LessonLayout.module.scss';
import SideBar from "./SideBar";

export default function LessonLayout({ children }) {
    return (<>
    <Header variant='white'/>
    <div className={styles.container}>
        <SideBar />
    </div>
    </>
    )
}