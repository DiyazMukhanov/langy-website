import React, { useEffect, useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantView from "../ParticipantView";
import Controls from "../Controls";
import PresenterView from "../PresenterView";
import { Button } from "@/ui-kit/Button";
import styles from "./MeetingView.module.scss";

export default function MeetingView({
  onMeetingLeave,
  meetingId,
  isTeacherSide,
}) {
  const [joined, setJoined] = useState(null);

  // Callback for when the presenter changes
  function onPresenterChanged(presenterId) {
    if (presenterId) {
      console.log(presenterId, "started screen share");
    } else {
      console.log("someone stopped screen share");
    }
  }

  // Get the method to join the meeting and the list of participants
  const { join, participants, presenterId, localParticipant } = useMeeting({
    onPresenterChanged,
    // Callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    // Callback for when meeting is left
    onMeetingLeft: () => {
      onMeetingLeave();
    },
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  // Effect to handle page refresh or close
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Attempt to leave the meeting before page unload
      if (joined === "JOINED") {
        onMeetingLeave(); // Ensure the user leaves the meeting before refresh/close
      }

      // Optional: Show a confirmation dialog to prevent accidental refresh
      // event.preventDefault();
      // event.returnValue = ''; // This will display the browser's default "Leave site?" prompt
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [joined, onMeetingLeave]);

  return (
    <div className={styles.container}>
      {joined && joined === "JOINED" ? (
        <div>
          <Controls isTeacherSide={isTeacherSide} />
          {/* For rendering all the participants in the meeting */}
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
              isTeacherSide={isTeacherSide}
              presenterId={presenterId}
            />
          ))}
          {presenterId && <PresenterView presenterId={presenterId} />}
        </div>
      ) : joined && joined === "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <Button variant="standardLargeOutlined" onClick={joinMeeting}>
          Войти в урок
        </Button>
      )}
    </div>
  );
}
