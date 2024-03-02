import { Button } from "@/ui-kit/Button";
import { BuyLessonCard } from "./BuyLessonCard";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from './BuyLessons.module.scss';
import { PACKAGES } from "./packages";

export default function BuyLessons() {
    return (
        <WithTeachersLayout>
            <div className={styles.container}>
                {PACKAGES.map(packageItem => (
                    <div className={styles.packageBlock}>
                        <BuyLessonCard packageText={packageItem.packageText} priceText={packageItem.priceText} />
                        <Button variant="teachersBook">Приобрести</Button>
                    </div>
                ))}
            </div>

        </WithTeachersLayout>
    )
}