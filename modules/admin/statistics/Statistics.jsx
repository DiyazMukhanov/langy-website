import { useEffect, useState } from "react";
import styles from "./Statistics.module.scss";
import { useRouter } from "next/router";
import { getStatistics } from "./shared/api/getStatistics";

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export default function Statisctics() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const getStatsHandler = async () => {
    try {
      const response = await getStatistics(inputValue);
      setStats(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <label>Введите год</label>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={getStatsHandler}>получить</button>
      {arr.map((month) => (
        <div className={styles.monthBlock}>
          <div style={{ fontWeight: "700", color: "blue" }}>
            {months[month]}:{" "}
          </div>
          <div>
            5 lessons:{" "}
            {stats && stats[month] ? stats[month]["5 lessons"] : "no data"}
          </div>

          <div>
            10 lessons:{" "}
            {stats && stats[month] ? stats[month]["10 lessons"] : "no data"}
          </div>

          <div>
            20 lessons:{" "}
            {stats && stats[month] ? stats[month]["20 lessons"] : "no data"}
          </div>
        </div>
      ))}
    </div>
  );
}
