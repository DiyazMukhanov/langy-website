import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

export default function Sidebar({ lessonsSummary, isBeginner }) {
  const router = useRouter();
  const currentLessonRef = useRef(null);

  let found = false;
  for (let i = 0; i < lessonsSummary.length; i++) {
    for (let j = 0; j < lessonsSummary[i].lessons.length; j++) {
      if (lessonsSummary[i].lessons[j].isCompleted === false) {
        if (found) break;
        lessonsSummary[i].lessons[j].isOpened = true;
        found = true;
      }
    }
    if (found) break;
  }

  const navigationHandler = (lessonNumber, lesson) => {
    const lessonsIndexes = {
      gr: "video",
      au: "audio",
      wr: "writing",
      ts: "test",
    };
    const chapterName = lessonsIndexes[lesson.chapterCode];

    if (!isBeginner) {
      router.push(`/lessons/${lessonNumber}/${chapterName}`);
    } else {
      router.push(`/lessons/beginner/lesson${lessonNumber}/${chapterName}`);
    }
  };

  useEffect(() => {
    // Scroll to the current lesson when the component is first rendered
    if (currentLessonRef.current) {
      currentLessonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.lessonsListContainer}>
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
                { [styles.currentChapter]: lesson.isOpened },
                { [styles.completed]: lesson.isCompleted }
              )}
              ref={lesson.isCurrent ? currentLessonRef : null}
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
