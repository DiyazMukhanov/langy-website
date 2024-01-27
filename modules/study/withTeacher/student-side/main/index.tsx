import Header from "@/modules/shared/Header";
import { Button } from "@/ui-kit/Button";
import styles from './Main.module.scss';
import { Card } from "@/ui-kit/Card";
import { Paper } from "@/ui-kit/Paper";

export default function Main() {
    return <>
        <Header variant='blue' isEasyEnglish={false} />
        <div className={styles.top}>
            <Button variant="standardMiddleOutlined">Мой прогресс</Button>
            <Card className={styles.lessonsStatus}>
                <Paper>Пополнить уроки</Paper>
                <Paper>12 уроков</Paper>
            </Card>
        </div>
    </>
}