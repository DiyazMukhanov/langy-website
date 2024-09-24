import dynamic from "next/dynamic";
import styles from "./VideoCall.module.scss";

// Dynamically import the VideoCall component and disable SSR
const VideoCall = dynamic(() => import("./VideoCalls/index"), {
  ssr: false,
});

export default function VideoConference() {
  return (
    <div className={styles.container}>
      <VideoCall />
    </div>
  );
}
