import { useState } from "react";
import { TeacherLayout } from "../shared/components/TeacherLayout";
import styles from "./TeacherPassedLessons.module.scss";
import { getTeacherPassedLessons } from "../shared/api/getTeachersPassedLessons";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const TeacherPassedLessons = () => {
  const [year, setYear] = useState("");
  const [lessons, setLessons] = useState<any>(null); // State to store fetched lessons
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedMonth, setSelectedMonth] = useState(null); // State to store the selected month

  // Handle the form submission
  const handleSearch = async () => {
    console.log("clicked");
    if (!year) return; // Return if no year is entered
    setLoading(true);
    setError(null);

    try {
      const response = await getTeacherPassedLessons(Number(year));
      setLessons(response.data.data.lessonsByMonth); // Store the lessons by month
    } catch (err) {
      setError("Произошла ошибка при загрузке уроков."); // Set an error message if the request fails
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle month click
  const handleMonthClick = (monthIndex) => {
    setSelectedMonth(monthIndex); // Set the selected month
  };

  return (
    <TeacherLayout>
      <div className={styles.container}>
        <h2>Мои проведенные уроки</h2>
        <input
          type="text"
          placeholder="введите год"
          onChange={(e) => setYear(e.target.value)}
        />
        <button onClick={handleSearch}>Искать</button>

        {/* Render month buttons */}
        <div className={styles.monthsContainer}>
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => handleMonthClick(index)}
              className={selectedMonth === index ? styles.activeMonth : ""}
            >
              {month}
            </button>
          ))}
        </div>

        {loading && <p>Загрузка уроков...</p>}
        {lessons && selectedMonth !== null && (
          <div className={styles.lessonsByMonth}>
            <h3>Уроки за {months[selectedMonth]}</h3>
            <div className={styles.lessonsContainer}>
              {lessons[selectedMonth]?.length > 0 ? (
                lessons[selectedMonth].map((lesson) => (
                  <span key={lesson._id} className={styles.lessonContainer}>
                    <p>
                      Дата:{" "}
                      {new Date(lesson.lessonDate).toLocaleDateString("ru-RU", {
                        timeZone: "Asia/Karachi", // GMT +5
                      })}
                    </p>
                    <p>
                      Время:{" "}
                      {new Date(lesson.lessonDate).toLocaleTimeString("ru-RU", {
                        timeZone: "Asia/Karachi", // GMT +5
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p>Студент: {lesson.studentEmail}</p>
                  </span>
                ))
              ) : (
                <p>Нет уроков за этот месяц</p>
              )}
            </div>
          </div>
        )}
      </div>
    </TeacherLayout>
  );
};

export default TeacherPassedLessons;
