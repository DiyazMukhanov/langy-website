import React, { useEffect, useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import ParticipantView from "../ParticipantView";
import Controls from "../Controls";
import PresenterView from "../PresenterView";

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
  const { join, participants, presenterId } = useMeeting({
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

  return (
    <div className="container">
      <h3>Meeting Id: {meetingId}</h3>
      {joined && joined === "JOINED" ? (
        <div>
          <Controls isTeacherSide={isTeacherSide} />
          {/* For rendering all the participants in the meeting */}
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
          {/* Show presenter view if someone is sharing their screen */}
          {presenterId && <PresenterView presenterId={presenterId} />}
        </div>
      ) : joined && joined === "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
}

// function PresenterView({ presenterId }) {
//   return <div>Presenter is sharing screen: {presenterId}</div>;
// }
