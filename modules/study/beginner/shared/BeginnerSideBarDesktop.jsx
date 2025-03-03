import BeginnerSidebar from "./BeginnerSideBar";
import styles from "../../advanced/shared/SideBar.module.scss";

export default function BeginnerSideBarDesktop({
  lessonsSummary,
  beginnerProgress,
}) {
  return (
    <div className={styles.sideBar}>
      <span className={styles.titleLevel}>Beginner</span>
      <BeginnerSidebar
        lessonsSummary={lessonsSummary}
        beginnerProgress={beginnerProgress}
      />
    </div>
  );
}
