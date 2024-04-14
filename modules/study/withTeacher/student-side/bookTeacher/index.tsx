import { useQuery } from "@tanstack/react-query";
import { getScheduleAsStudent } from "../shared/api/getSchedule";
import WithTeachersLayout from "../shared/withTeachersLayout";
import Schedule from "./Schedule";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "@/ui-kit/Button";
import styles from "./BookTeacher.module.scss";
import { useLessons } from "../shared/hooks/useLessons";

async function getSchedule(teacherId: string | undefined | null) {
  if (teacherId && !Array.isArray(teacherId)) {
    const response = await getScheduleAsStudent(teacherId);
    return response.data;
  }
}

export default function BookTeacher() {
  // const [teacherId, setTeacherId] = useState<string | undefined | null>(null);

  // const router = useRouter();
  // useEffect(() => {
  //   const id = router.query.teacherId;
  //   if (!Array.isArray(id)) {
  //     setTeacherId(id);
  //   }
  // }, [router.query.teacherId]);

  const { isPending, error, data, bookNewLesson, cancelLesson } = useLessons();
  console.log(data);
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["lessonsSchedule"],
  //   queryFn: () => getSchedule(teacherId),
  //   enabled: !!teacherId,
  // });

  if (isPending) return "Loading...";

  return (
    <WithTeachersLayout>
      <div className={styles.buttons}>
        <Button variant="standardMiddleOutlined">
          Мои запланированные уроки
        </Button>
      </div>
      <Schedule
        data={data?.data?.data}
        bookNewLesson={bookNewLesson}
        cancelLesson={cancelLesson}
      />
    </WithTeachersLayout>
  );
}
