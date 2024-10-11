import { useRouter } from "next/router";
import styles from "./TeacherMaterials.module.scss";
import { TeacherLayout } from "../shared/components/TeacherLayout";

const TeacherMaterials = () => {
  const router = useRouter();
  return (
    <TeacherLayout>
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
    </TeacherLayout>
  );
};

export default TeacherMaterials;
