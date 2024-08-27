import styles from "./SideBar.module.scss";
import Sidebar from "@/modules/shared/Sidebar";

export default function SideBarDesktop({
  lessonsSummary,
  expires,
  isBeginner,
}) {
  return (
    <div className={styles.sideBar}>
      {/* {expires && <p>подписка действует до {expires}</p>} */}
      <Sidebar lessonsSummary={lessonsSummary} isBeginner={isBeginner} />
    </div>
  );
}
