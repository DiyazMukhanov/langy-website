import { Button } from "@/ui-kit/Button";
import WithTeachersLayout from "../shared/withTeachersLayout";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Download.module.scss";

export default function Download() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <WithTeachersLayout tabName="download">
      <div className={styles.container}>
        <a
          href="https://storage.googleapis.com/langy.su/books/english_for_everyone_level_1_course_book_beginner.pdf"
          className={styles.btn}
        >
          English for everyone - Уровень 1
        </a>
        <a
          href="https://storage.googleapis.com/langy.su/books/english_for_everyone_level_2_course_book_beginner.pdf"
          className={styles.btn}
        >
          English for everyone - Уровень 2
        </a>
        <a
          href="https://storage.googleapis.com/langy.su/books/English_for_Everyone_Course_Book_Level_3_Intermediate_-_DK.pdf"
          className={styles.btn}
        >
          English for everyone - Уровень 3
        </a>
        <a
          href="https://storage.googleapis.com/langy.su/books/English_for_Everyone_Course_Book_Level_4_Advanced_-_Dorling_Kindersley.pdf"
          className={styles.btn}
        >
          English for everyone - Уровень 4
        </a>
      </div>
    </WithTeachersLayout>
  );
}
