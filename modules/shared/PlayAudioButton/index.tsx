import newPlay from "../../../public/images/newPlay.svg";
import Image from "next/image";
import styles from './PlayAudioButton.module.scss'

type Props = {
    src: string
}

export default function PlayAudioButton({ src }: Props) {

    const playWordHandler = (src: string) => {
        new Audio(src).play()
    }

    return (

        <Image
            priority
            src={newPlay}
            width={30}
            alt="play"
            className={styles.btn}
            onClick={() => playWordHandler(src)}
        />

    )

}