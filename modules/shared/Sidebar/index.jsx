import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

const lessonsIndexes = {
  gr: "video",
  au: "audio",
  wr: "writing",
  ts: "test",
};

export default function Sidebar({ lessonsSummary, isBeginner }) {
  const router = useRouter();
  const sidebarRef = useRef(null); // Ref for the sidebar container

  const { lessonNumber } = router.query;
  const asPath = router.asPath; // Full path, e.g., /lessons/17/test
  const pathSegments = asPath.split("/"); // Split into segments
  const chapter = pathSegments[3]; // Extract test (chapter)

  const navigationHandler = (lessonNumber, lesson) => {

    const chapterName = lessonsIndexes[lesson.chapterCode];

    if (!isBeginner) {
      router.push(`/lessons/${lessonNumber}/${chapterName}`);
    } else {
      router.push(`/lessons/beginner/lesson${lessonNumber}/${chapterName}`);
    }
  };

  const handleScrollToLesson = (lessonIndex) => {
    if (sidebarRef.current) {
      const lessonHeight = 180; // Adjust based on your lesson block height
      const scrollToPosition = lessonIndex * lessonHeight;
      sidebarRef.current.scrollTo({
        top: scrollToPosition,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  useEffect(() => {
    handleScrollToLesson(lessonNumber);
  }, [])

  return (
    <div className={styles.lessonsListContainer} ref={sidebarRef}>
      {lessonsSummary.map((lessonBlock) => (
        <div className={styles.lessonBlock} key={lessonBlock.title}>
          <div
            className={classNames(styles.title, {
              [styles.completed]: lessonBlock.isCompleted,
            })}
          >
            {lessonBlock.title}
          </div>
          {lessonBlock.lessons.map((lesson) => (
            <div
              key={lesson.chapter}
              className={classNames(
                styles.chapter,
                  {
                    [styles.currentLesson]: Number(lessonBlock.lessonNumber) === Number(lessonNumber) && lessonsIndexes[lesson.chapterCode] === chapter, // Add class for current lesson
                  },
              )}
              onClick={() =>
                navigationHandler(
                  lessonBlock.lessonNumber,
                  lesson,
                  lessonBlock.level
                )
              }
            >
              {lesson.chapter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
