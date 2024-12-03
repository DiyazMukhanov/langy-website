import Header from "@/modules/shared/Header/index";
import ProtectPage from "@/modules/shared/ProtectPage/index";
import styles from "./EverydayEnglishLayout.module.scss";
import { PropsWithChildren, useEffect, useState } from "react";
import EverydayEnglishNav from "../EverydayEnglishNav/index";
import EverydayEnglishNextButtonSection from "../EverydayEnglishNextButtonSection/index";

type Props = {
  lessonNumber: number;
  chapter: string;
};

export default function EveryDayEnglishLayout({
  lessonNumber,
  children,
  chapter,
}: PropsWithChildren<Props>) {
  return (
    <>
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
    </>
  );
}
