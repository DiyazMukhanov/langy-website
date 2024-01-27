import TeacherCard from "../shared/components/TeacherCard";
import WithTeachersLayout from "../shared/withTeachersLayout";
import { teachers } from "./fakeTeachers";
import styles from "./Teachers.module.scss";

export default function Teachers() {

    return (
        <WithTeachersLayout>
            <h2>Преподаватели для вас</h2>
            <div className={styles.teachersContainer}>
                {teachers.map(teacher => <TeacherCard />)}
            </div>



        </WithTeachersLayout>
    )
}