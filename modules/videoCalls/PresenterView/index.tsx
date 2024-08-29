import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

// const PresenterView = ({ presenterId }) => {
//   const { screenShareAudioStream, isLocal, screenShareStream, screenShareOn } =
//     useParticipant(presenterId);

//   // Creating a media stream from the screen share stream
//   const mediaStream = useMemo(() => {
//     if (screenShareOn && screenShareStream) {
//       const stream = new MediaStream();
//       stream.addTrack(screenShareStream.track);
//       return stream;
//     }
//     return null; // Return null if no stream is available
//   }, [screenShareStream, screenShareOn]);

//   // Creating a reference to the audio element
//   const audioPlayer = useRef(null);

//   // Playing the screen share audio stream
//   useEffect(() => {
//     if (
//       !isLocal &&
//       audioPlayer.current &&
//       screenShareOn &&
//       screenShareAudioStream
//     ) {
//       const audioStream = new MediaStream();
//       audioStream.addTrack(screenShareAudioStream.track);

//       audioPlayer.current.srcObject = audioStream;
//       audioPlayer.current.play().catch((err) => {
//         if (
//           err.message ===
//           "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
//         ) {
//           console.error("Audio error: " + err.message);
//         }
//       });
//     } else if (audioPlayer.current) {
//       audioPlayer.current.srcObject = null;
//     }
//   }, [screenShareAudioStream, screenShareOn, isLocal]);

//   return (
//     <>
//       {mediaStream ? (
//         <ReactPlayer
//           playsinline // extremely crucial prop
//           playIcon={<></>}
//           pip={false}
//           light={false}
//           controls={false}
//           muted={true}
//           playing={true}
//           url={mediaStream} // passing mediaStream here
//           height={"100%"}
//           width={"100%"}
//           onError={(err) => {
//             console.log(err, "presenter video error");
//           }}
//         />
//       ) : (
//         <p>No screen share available.</p>
//       )}
//       <audio autoPlay playsInline controls={false} ref={audioPlayer} />
//     </>
//   );
// };

// export default PresenterView;

const PresenterView = ({ presenterId }) => {
  const { screenShareAudioStream, isLocal, screenShareStream, screenShareOn } =
    useParticipant(presenterId);

  //Creating a media stream from the screen share stream
  const mediaStream = useMemo(() => {
    if (screenShareOn && screenShareStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareStream.track);
      return mediaStream;
    }
  }, [screenShareStream, screenShareOn]);

  // Creating a reference to the audio element
  const audioPlayer = useRef();

  // Playing the screen share audio stream
  useEffect(() => {
    if (
      !isLocal &&
      audioPlayer.current &&
      screenShareOn &&
      screenShareAudioStream
    ) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareAudioStream.track);

      audioPlayer.current.srcObject = mediaStream;
      audioPlayer.current.play().catch((err) => {
        if (
          err.message ===
          "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
        ) {
          console.error("audio" + err.message);
        }
      });
    } else {
      audioPlayer.current.srcObject = null;
    }
  }, [screenShareAudioStream, screenShareOn, isLocal]);

  return (
    <>
      // playing the media stream in the ReactPlayer
      <ReactPlayer
        //
        playsinline // extremely crucial prop
        playIcon={<></>}
        //
        pip={false}
        light={false}
        controls={false}
        muted={true}
        playing={true}
        //
        url={mediaStream} // passing mediastream here
        //
        height={"100%"}
        width={"100%"}
        onError={(err) => {
          console.log(err, "presenter video error");
        }}
      />
      <audio autoPlay playsInline controls={false} ref={audioPlayer} />
    </>
  );
};

export default PresenterView;
