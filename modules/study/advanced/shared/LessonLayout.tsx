import Header from "@/modules/shared/Header";
import styles from "./LessonLayout.module.scss";
import SideBarDesktop from "./SideBarDesktop";
import { Typography } from "@/ui-kit/Typography";
import { UserContext } from "@/store/userContext";
import { useContext, useEffect, useState } from "react";
import { getProgressData } from "./api/getProgressData";
import { setCurrentLearningField } from "../../shared/api/setCurrentLearningField";
import Loader from "@/modules/shared/Loader";
import ProtectPage from "@/modules/shared/ProtectPage";
import { getThisLessonNumber } from "@/utils/getThisLessonNumber";
import { setCurrentLessonData } from "../../../shared/api/setCurrentLessonData";

export default function LessonLayout({
  children,
  chapter,
  withoutProgress,
  currentLessonData,
  subscriptionIsNeeded,
  isBeginner,
}) {
  const userCtx = useContext(UserContext);

  const [lessonsSummary, setLessonsSummary] = useState<any>(
    userCtx.lessonsSummary
  );

  let progressValue;
  if (currentLessonData.currentLesson < 9) {
    progressValue = (currentLessonData.currentLesson / 8) * 100;
  }

  if (
    currentLessonData.currentLesson > 8 &&
    currentLessonData.currentLesson < 17
  ) {
    progressValue = ((currentLessonData.currentLesson - 8) / 8) * 100;
  }

  if (currentLessonData.currentLesson > 16) {
    progressValue = ((currentLessonData.currentLesson - 16) / 8) * 100;
  }

  return (
    <>
      <Header variant="white" lessonsSummary={lessonsSummary} />
      <div className={styles.container}>
        <SideBarDesktop
          lessonsSummary={lessonsSummary}
          isBeginner={isBeginner}
        />
        <div className={styles.rightSide}>
          <div>
            <Typography size="small" element="h3" className={styles.text}>
              {currentLessonData.level} - Lesson{" "}
              {getThisLessonNumber(currentLessonData.currentLesson)}
            </Typography>

            {chapter === "audio" && (
              <p className={styles.mobileViewOnly}>
                Для более эффективного усвоения, рекомендуем прослушивать и
                прочитывать текст до полного понимания
              </p>
            )}
          </div>
          {!withoutProgress && (
            <div className={styles.progressContainer}>
              <div
                style={{
                  width: `${progressValue}%`,
                  height: "100%",
                  background: "#48C61C",
                  borderRadius: "25px",
                }}
              />
            </div>
          )}

          <div className={styles.links}>
            {chapter === "grammar" && (
              <p className={styles.currentLink}>Grammar</p>
            )}
            {chapter === "audio" && (
              <p className={styles.currentLink}>Audio/Reading</p>
            )}
            {chapter === "writing" && (
              <p className={styles.currentLink}>Writing</p>
            )}
            {chapter === "test" && <p className={styles.currentLink}>Test</p>}
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
