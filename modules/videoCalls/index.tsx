import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

// Dynamically import the VideoCall component and disable SSR
const VideoCall = dynamic(() => import("./VideoCalls/index"), {
  ssr: false,
});

export default function VideoConference() {
  return (
    <div>
      <h1>Video Call</h1>
      <VideoCall />
    </div>
  );
}
