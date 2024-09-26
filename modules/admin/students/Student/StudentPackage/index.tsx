import { useStudentPackage } from "../../shared/hooks/useStudentPackage";
import { AdminLayout } from "@/modules/admin/AdminLayout";
import styles from "./StudentPackage.module.scss";
import { useState } from "react";

export default function StudentPackage() {
  const {
    isPending,
    error,
    data,
    udpatePackage,
    isMutationPending,
    isMutationError,
  } = useStudentPackage();
  const [inputData, setInputData] = useState<string | null>(null);

  const updatePackageHandler = () => {
    if (inputData) {
      udpatePackage(Number(inputData));
    }
  };

  if (isPending) return "Loading...";

  if (error) return "Ooops, please reload...";

  return (
    <AdminLayout>
      <div className={styles.packageContainer}>
        <div>Количество уроков {data?.data?.data[0]?.lessonsQuantity}</div>
        <input type="text" onChange={(e) => setInputData(e.target.value)} />
        <button onClick={updatePackageHandler}>Добавить уроки</button>
        {isMutationPending && <p>Обновляем пакет...</p>}
        {isMutationError && <p>Ошибка обновления...</p>}
      </div>
    </AdminLayout>
  );
}
