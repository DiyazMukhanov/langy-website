import { Button } from "@/ui-kit/Button";
import TeacherCard from "../shared/components/TeacherCard";
import WithTeachersLayout from "../shared/withTeachersLayout";
import styles from "./Teachers.module.scss";
import { useRouter } from "next/router";
import { getTeachersAsStudent } from "../shared/api/getTeachers";
import { useQuery } from "@tanstack/react-query";
import { Teacher } from "../shared/types/teacher";

async function getTeachersRequest() {
  const response = await getTeachersAsStudent();
  return response.data;
}

export default function Teachers() {
  const router = useRouter();

  const { isPending, error, data } = useQuery({
    queryKey: ["teachersForStudentData"],
    queryFn: getTeachersRequest,
  });

  if (isPending) return "Loading...";

  if (error) return "Ошибка, перезагрузите страницу";

  return (
    <WithTeachersLayout>
      <div className={styles.teachersContainer}>
        {data?.data.map((teacher: Teacher) => (
          <div className={styles.teacherBlock}>
            <TeacherCard teacher={teacher} />
          </div>
        ))}
      </div>
    </WithTeachersLayout>
  );
}
