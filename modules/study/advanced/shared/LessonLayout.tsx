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
  console.log(userCtx);
  const [isLoading, setIsLoading] = useState(true);
  const [lessonsSummary, setLessonsSummary] = useState<any>(
    userCtx.lessonsSummary
  );

  let progressValue;
  if (currentLessonData.currentLesson < 9) {
    progressValue = (currentLessonData.currentLesson / 8) * 100;
  }

  if (
    (currentLessonData.currentLesson > 8) &
    (currentLessonData.currentLesson < 17)
  ) {
    progressValue = ((currentLessonData.currentLesson - 8) / 8) * 100;
  }

  if (currentLessonData.currentLesson > 16) {
    progressValue = ((currentLessonData.currentLesson - 16) / 8) * 100;
  }

  useEffect(() => {
    if (isBeginner) {
      setLessonsSummary(() => userCtx.getUpdatedBeginnerLessonsSummary());
    } else {
      setLessonsSummary(() => userCtx.getUpdatedLessonsSummary());
    }
    const getProgress = async () => {
      const lessonsIndexes = {
        video: 0,
        audio: 1,
        writing: 2,
        test: 3,
      };

      const chapterCodes = {
        gr: "video",
        au: "audio",
        wr: "writing",
        ts: "test",
      };

      let indexOfCurrentLesson;

      const updatedLessonsSummary = lessonsSummary.map((lesson, index) => {
        if (Number(currentLessonData.currentLesson) === index + 1) {
          lesson.lessons[
            lessonsIndexes[currentLessonData.currentChapter]
          ].isCurrent = true;
          indexOfCurrentLesson =
            lessonsIndexes[currentLessonData.currentChapter];
        }

        lesson.lessons.map((item) => {
          if (item.isCurrent === true) {
            if (
              chapterCodes[item.chapterCode] !==
              currentLessonData.currentChapter
            ) {
              item.isCurrent = false;
            }
          }
        });

        return lesson;
      });

      setLessonsSummary(updatedLessonsSummary);
      console.log(lessonsSummary);
      const bodyData = {
        currentLesson: currentLessonData.currentLesson,
        currentChapter: currentLessonData.currentChapter,
      };

      try {
        const progressData = await getProgressData();
        if (progressData) {
          userCtx.setProgressData(progressData?.data?.data);
          setIsLoading(false);
        }
        await setCurrentLessonData(bodyData);
        const currentLearningField = await setCurrentLearningField({
          currentLearningField: "higher",
        });
      } catch (err) {
        setIsLoading(false);
      }
    };

    getProgress();
  }, [currentLessonData]);

  let dateObject;
  let options;
  let formattedDate;

  if (userCtx?.userData?.subscriptionExpirationDate !== null) {
    dateObject = new Date(userCtx?.userData?.subscriptionExpirationDate);

    options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    formattedDate = dateObject.toLocaleDateString("ru-RU", options);
  }

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <ProtectPage
        currentLesson={currentLessonData.currentLesson}
        currentChapter={currentLessonData.currentChapter}
        subscriptionIsNeeded={false}
      >
        <Header variant="white" lessonsSummary={lessonsSummary} />
        <div className={styles.container}>
          <SideBarDesktop
            lessonsSummary={lessonsSummary}
            expires={formattedDate}
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
      </ProtectPage>
    );
  }
}
