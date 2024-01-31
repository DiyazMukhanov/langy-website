import { Button } from "@/ui-kit/Button";
import TeacherCard from "../shared/components/TeacherCard";
import WithTeachersLayout from "../shared/withTeachersLayout";
import { teachers } from "./fakeTeachers";
import styles from "./Teachers.module.scss";
import { useRouter } from "next/router";

export default function Teachers() {
    const router = useRouter()

    return (
        <WithTeachersLayout>
            <h2 className={styles.teachersHeader}>Преподаватели для вас</h2>
            <div className={styles.teachersContainer}>
                {teachers.map(teacher => (
                    <div className={styles.teacherBlock}>
                        <TeacherCard />
                        <Button variant='teachersBook' onClick={() => router.push('/with-teachers/book-teacher/001')}>Забронировать урок</Button>
                    </div>
                ))}
            </div>
        </WithTeachersLayout>
    )
}