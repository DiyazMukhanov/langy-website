import NewPlay from "../../../public/icons/newPlay.svg";
import styles from "./PlayAudioButton.module.scss";

type Props = {
  src: string;
};

export default function PlayAudioButton({ src }: Props) {
  const playWordHandler = (src: string) => {
    new Audio(src).play();
  };

  return (
    <NewPlay onClick={() => playWordHandler(src)} className={styles.btn} />
  );
}
