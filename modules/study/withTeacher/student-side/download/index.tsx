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
        <button
          className={styles.btn}
          onClick={() =>
            router.push(
              "https://storage.googleapis.com/langy.su/books/english_for_everyone_level_1_course_book_beginner.pdf"
            )
          }
        >
          English for everyone - Уровень 1
        </button>
        <button
          className={styles.btn}
          onClick={() =>
            router.push(
              "https://storage.googleapis.com/langy.su/books/english_for_everyone_level_2_course_book_beginner.pdf"
            )
          }
        >
          English for everyone - Уровень 2
        </button>
        <button
          className={styles.btn}
          onClick={() =>
            router.push(
              "https://storage.googleapis.com/langy.su/books/English_for_Everyone_Course_Book_Level_3_Intermediate_-_DK.pdf"
            )
          }
        >
          English for everyone - Уровень 3
        </button>
        <button
          className={styles.btn}
          onClick={() =>
            router.push(
              "https://storage.googleapis.com/langy.su/books/English_for_Everyone_Course_Book_Level_4_Advanced_-_Dorling_Kindersley.pdf"
            )
          }
        >
          English for everyone - Уровень 4
        </button>
      </div>
    </WithTeachersLayout>
  );
}
