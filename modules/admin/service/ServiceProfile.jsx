import { useEffect, useState } from "react";
import styles from ".//ServiceProfile.module.scss";
import { useRouter } from "next/router";
import { getServiceById } from "./shared/api/getServiceById";
import { resolveService } from "./shared/api/resolveService";

export default function ServiceProfile() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [service, setService] = useState(null);

  useEffect(() => {
    const getService = async () => {
      try {
        const response = await getServiceById(router.query.id);
        setIsLoading(false);
        setService(response?.data?.data);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    getService();
  }, [router.query?.id]);

  const resolveRequestHandler = async (id) => {
    if (confirm("Вы уверены что хотите закрыть этот кейс?")) {
      setIsLoading(true);
      try {
        const response = await resolveService(id);
        setService(response?.data?.data);
        setIsLoading(false);
      } catch (err) {
        alert("Произошла ошибка");
        console.log(err);
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className={styles.container}>
          <p>User ID: {service?.userId}</p>
          <p>UserEmail: {service?.userEmail}</p>
          <p>Message: {service?.message}</p>
          <p>Status: {service?.isResolved ? "Решён" : "Не решён"}</p>
          <button onClick={() => resolveRequestHandler(service?._id)}>
            resolve request
          </button>
        </div>
      </>
    );
  }
}
