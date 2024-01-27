import Header from "@/modules/shared/Header";
import ProtectPage from "@/modules/shared/ProtectPage";
import styles from "./WithTeachersLayout.module.scss";
import { Button } from "@/ui-kit/Button";
import { Card } from "@/ui-kit/Card";
import { Paper } from "@/ui-kit/Paper";

export default function WithTeachersLayout({ children }) {
    return (
        <ProtectPage subscriptionIsNeeded={false} adminNeeded={false}>
            <Header variant='blue' isEasyEnglish={false} />
            <div className={styles.top}>
                <Button variant="standardMiddleOutlined">Мой прогресс</Button>
                <Card className={styles.lessonsStatus}>
                    <Paper>Пополнить уроки</Paper>
                    <p>12 уроков</p>
                </Card>
            </div>
            {children}
        </ProtectPage>
    )
}