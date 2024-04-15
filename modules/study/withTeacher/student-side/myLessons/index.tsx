import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./myLessons.module.scss";

export default function MyLessons() {
  return (
    <WithTeachersLayout>
      <div className={styles.lessonsContainer}></div>
    </WithTeachersLayout>
  );
}
