import React, { useEffect, useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantView from "../ParticipantView";
import Controls from "../Controls";
import PresenterView from "../PresenterView";
import { Button } from "@/ui-kit/Button";
import styles from "./MeetingView.module.scss";
import { ChatPanel } from "../Chat/ChatPanel";

export default function MeetingView({
  onMeetingLeave,
  meetingId,
  isTeacherSide,
}) {
  const [joined, setJoined] = useState(null);
  const [isPresenting, setIsPresenting] = useState(false);

  // Callback for when the presenter changes
  function onPresenterChanged(presenterId) {
    if (presenterId) {
      console.log(presenterId, "started screen share");
    } else {
      console.log("someone stopped screen share");
    }
  }

  // Get the method to join the meeting and the list of participants
  const { join, participants, presenterId, localParticipant, meeting } =
    useMeeting({
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

  // Effect to handle browser navigation like back or reload
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (joined === "JOINED") {
        meeting?.leave(); // Ensure the user leaves the meeting before page unload
      }
    };

    // Handle navigation or back button to clean up properly
    const handlePopState = () => {
      if (joined === "JOINED") {
        meeting?.leave(); // Ensure the user leaves the meeting when the back button is pressed
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [joined, meeting]);

  return (
    <div className={styles.container}>
      {joined && joined === "JOINED" ? (
        <div className={styles.classRoom}>
          <div className={styles.leftSide}>
            <Controls
              isTeacherSide={isTeacherSide}
              participantId={localParticipant?.id}
            />
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
          <div className={styles.chatSection}>
            <ChatPanel panelHeight={500} />
          </div>
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
