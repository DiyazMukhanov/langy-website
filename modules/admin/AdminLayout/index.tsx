import ProtectPage from "@/modules/shared/ProtectPage";
import styles from "./AdminLayout.module.scss";
import { useRouter } from "next/router";

export const AdminLayout = ({ children }) => {
  const router = useRouter();

  return (
    <ProtectPage adminNeeded={true} subscriptionIsNeeded={false}>
      <div className={styles.header}>
        <a onClick={() => router.push("/admin/main")}>Main Admin</a>
        <a onClick={() => router.push("/admin/students")}>Students</a>
        <a>Teachers</a>
        <a>Feedbacks</a>
      </div>
      {children}
    </ProtectPage>
  );
};
