import EverydayEnglishContainer from "../shared/EverydayEnglishContainer";
import Audioplayer from "./../../../shared/Audioplayer/index";
import styles from "./DialogueLessonLayout.module.scss";
import Image from "next/image";
import TwoWomen from "../../../../public/images/two_women.webp";

export default function DialogueLessonLayout({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.audioContainer}>
        <Audioplayer audioSrc={data.src} />
      </div>
      <h1 className={styles.h1}>Прослушайте диалог</h1>
      <Image
        src={TwoWomen}
        alt="two women"
        height={300}
        style={{ borderRadius: "10px" }}
        className={styles.image}
      />
      <EverydayEnglishContainer className={styles.internalLayout}>
        {data?.dialogue.map((item) => (
          <div key={item.id}>
            <p className={styles.en}>
              {item.nameEn}: {item.phraseEn}
            </p>
            <p className={styles.ru}>
              {item.nameRu}: {item.phraseRu}
            </p>
          </div>
        ))}
      </EverydayEnglishContainer>
    </div>
  );
}
