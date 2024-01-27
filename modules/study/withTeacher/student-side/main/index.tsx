import Header from "@/modules/shared/Header";
import { Button } from "@/ui-kit/Button";
import styles from './Main.module.scss';
import { Card } from "@/ui-kit/Card";
import { Paper } from "@/ui-kit/Paper";
import Image from 'next/image';
import Teacher from './../../../../../public/images/teacher.png';
import { useRouter } from "next/router";
import ProtectPage from "@/modules/shared/ProtectPage";
import WithTeachersLayout from "../shared/withTeachersLayout";

export default function Main() {
    const router = useRouter()
    return (
        <WithTeachersLayout>
            <div className={styles.main}>
                <Image
                    priority
                    src={Teacher}
                    className={styles.image}
                    alt="teacher"
                />
                <Button variant="teachers" className={styles.chooseTeacherBtn} onClick={() => router.push('/with-teachers/teachers')}>Выбрать преподавателя</Button>
            </div>

            <div className={styles.bottom}>
                <Button variant="standardMiddleOutlined">Правила возврата уроков</Button>
                <Button variant="standardMiddleOutlined">Правила отмены уроков</Button>
            </div>
        </WithTeachersLayout>
    )
}