import ProtectPage from "@/modules/shared/ProtectPage";
import styles from "./Main.module.scss";
import { useRouter } from "next/router";
import { AdminLayout } from "../AdminLayout";
import { useState } from "react";
import { deleteOldLessons } from "../shared/api/deleteOldLessons";

export default function Main() {
  const router = useRouter();
  const [daysInputValue, setDaysInputValue] = useState("");

  const deleteOldLessonsHandler = async () => {
    const userResponse = confirm(
      `Вы хотите удалить уроки старше ${daysInputValue} дней?`
    );

    if (userResponse) {
      try {
        const days = {
          days: Number(daysInputValue),
        };
        await deleteOldLessons(days);
        alert("Старые уроки успешно удалены");
      } catch (err) {
        console.log(err);
        alert("Ошибка удаленяи уркоов");
      }
    }
  };

  return (
    <AdminLayout>
      <div className={styles.container}>
        <p
          className={styles.link}
          onClick={() => router.push("/admin/students")}
        >
          Студенты
        </p>
        <p
          className={styles.link}
          onClick={() => router.push("/admin/statistics")}
        >
          Статистика
        </p>
        <p
          className={styles.link}
          onClick={() => router.push("/admin/services")}
        >
          Служба поддержки
        </p>
        <div className={styles.resetLessonsBlock}>
          <span>Количество дней назад:</span>
          <input
            type="text"
            onChange={(e) => setDaysInputValue(e.target.value)}
          />
          <button onClick={deleteOldLessonsHandler}>
            Удалить старые уроки
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
