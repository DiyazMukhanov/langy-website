import Header from "@/modules/shared/Header/index";
import ProtectPage from "@/modules/shared/ProtectPage/index";
import styles from "./EverydayEnglishLayout.module.scss";
import { PropsWithChildren, useEffect, useState } from "react";
import EverydayEnglishNav from "../EverydayEnglishNav/index";
import EverydayEnglishNextButtonSection from "../EverydayEnglishNextButtonSection/index";
import { setCurrentLearningField } from "../../../shared/api/setCurrentLearningField";
import { updateEverydayProgress } from "../api/updateEverydayProgress";
import { checkIfSuscriptionIsNeeded } from "@/modules/study/lessons/advanced/shared/utils/checkIfSubscriptionNeeded";

type Props = {
  lessonNumber: number;
  chapter: string;
};

export default function EveryDayEnglishLayout({
  lessonNumber,
  children,
  chapter,
}: PropsWithChildren<Props>) {
  useEffect(() => {
    const updateEverydayData = async () => {
      try {
        if (lessonNumber) {
          const currentLearningField = await setCurrentLearningField({
            currentLearningField: "everydayEnglish",
          });
          const data = await updateEverydayProgress({
            currentLesson: lessonNumber,
            currentChapter: chapter,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    updateEverydayData();
  }, [lessonNumber]);

  const subscriptionIsNeededStatus = checkIfSuscriptionIsNeeded(lessonNumber);

  return (
    <>
      <ProtectPage subscriptionIsNeeded={false} adminNeeded={false}>
        <div className={styles.background}>
          <Header variant="white" isEasyEnglish={true} />
          <div className={styles.top}>
            <div className={styles.navContainer}>
              <EverydayEnglishNav lessonNumber={lessonNumber} />
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.mainSectionContainer}>{children}</div>
              <EverydayEnglishNextButtonSection
                lessonNumber={lessonNumber}
                chapter={chapter}
              />
            </div>
          </div>
        </div>
      </ProtectPage>
    </>
  );
}
