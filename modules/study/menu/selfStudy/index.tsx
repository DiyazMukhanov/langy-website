import Header from "@/modules/shared/Header";
import styles from "./../Menu.module.scss";
import { useRouter } from "next/router";
import { getMe } from "@/modules/shared/api/getMe";
import { getBeginnerProgress } from "@/modules/shared/api/getBeginnerProgress";
import Image from "next/image";
import EverydayEnglish from "./../../../../public/images/everyday_english.jpg";
import BeginnerEnglish from "./../../../../public/images/beginner_english.webp";
import AdvancedEnglish from "./../../../../public/images/advanced_english.jpg";
import TestEnglish from "./../../../../public/images/test_english.jpg";

import { useContext, useEffect, useState } from "react";
import Loader from "@/modules/shared/Loader";
import { Button } from "@/ui-kit/Button";
import { UserContext } from "@/store/userContext";
import { getEverydayProgress } from "@/modules/shared/api/getEverydayProgress";

const LevelBlock = ({ onClick, title, description, image }) => {
  return (
    <div className={styles.levelCard} onClick={onClick}>
      <div className={styles.top}>
        <span className={styles.title}>{title}</span>
        <div className={styles.advantages}>
          <span>{description[0]}</span>
          <span>{description[1]}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <Image
          src={image}
          alt="menuItem"
          width={208}
          height={130}
          style={{ borderRadius: "12px" }}
          className={styles.image}
        />
        <Button variant="teachersBook">Войти</Button>
      </div>
    </div>
  );
};

export default function Menu() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [beginnerProgress, setBeginnerProgress] = useState(null);
  const [everydayProgress, setEverydayProgress] = useState(null);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const userData = await getMe();
        userCtx.setUserData(userData.data.data);
        setUser(userData.data.data);

        const beginnerProgress = await getBeginnerProgress();
        setBeginnerProgress(beginnerProgress.data.data);
        const everydayProgress = await getEverydayProgress();
        setEverydayProgress(everydayProgress.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const routingObject = {
    starter:
      beginnerProgress === null
        ? `/lessons/beginner/lesson1`
        : `/lessons/beginner/lesson${beginnerProgress?.currentLesson}`,
    higher:
      user?.currentLesson === 0
        ? `/lessons/1/video`
        : `/lessons/${user?.currentLesson}/${user?.currentChapter}`,
    everyday:
      everydayProgress === null
        ? `/lessons/everydayEnglish/1/phrases`
        : `/lessons/everydayEnglish/${everydayProgress?.currentLesson}/${everydayProgress?.currentChapter}`,
    level: `/test/test`,
    teachers: `/with-teachers/main`,
  };

  const goToLearningFieldHandler = (learningField) => {
    router.push(routingObject[learningField]);
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <Header variant="blue" />
        <div className={styles.container}>
          <div className={styles.heading}>Выберите раздел</div>
          <div className={styles.levels}>
            <LevelBlock
              onClick={() => goToLearningFieldHandler("everyday")}
              title="Английский на каждый день"
              image={EverydayEnglish}
              description={["Легкие фразы", "Слова на каждый день"]}
            />
            <LevelBlock
              onClick={() => goToLearningFieldHandler("starter")}
              title="Для начинающих"
              image={BeginnerEnglish}
              description={["Английский с нуля", "Пополняйте словарный запас"]}
            />
            <LevelBlock
              onClick={() => goToLearningFieldHandler("higher")}
              title="Для продолжающих"
              image={AdvancedEnglish}
              description={[
                "Углубитесь в английский язык",
                "Оттачивайте ваши навыки",
              ]}
            />
            <LevelBlock
              onClick={() => goToLearningFieldHandler("level")}
              title="Узнай свой уровень"
              image={TestEnglish}
              description={["Определите свой уровень", "Познайте себя"]}
            />
          </div>
        </div>
      </>
    );
  }
}
