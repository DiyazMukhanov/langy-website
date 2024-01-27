import Header from "@/modules/shared/Header";
import { Button } from "@/ui-kit/Button";
import styles from './Main.module.scss';
import { Card } from "@/ui-kit/Card";
import { Paper } from "@/ui-kit/Paper";
import Image from 'next/image';
import Teacher from './../../../../../public/images/teacher.png';

export default function Main() {
    return <>
        <Header variant='blue' isEasyEnglish={false} />
        <div className={styles.top}>
            <Button variant="standardMiddleOutlined">Мой прогресс</Button>
            <Card className={styles.lessonsStatus}>
                <Paper>Пополнить уроки</Paper>
                <p>12 уроков</p>
            </Card>
        </div>
        <div className={styles.main}>
            <Image
                priority
                src={Teacher}
                className={styles.image}
                alt="teacher"
            />
            <Button variant="teachers" className={styles.chooseTeacherBtn}>Выбрать преподавателя</Button>
        </div>

        <div className={styles.bottom}>
            <Button variant="standardMiddleOutlined">Правила возврата уроков</Button>
            <Button variant="standardMiddleOutlined">Правила отмены уроков</Button>
        </div>
    </>
}