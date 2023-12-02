import { memo, useEffect, useRef } from "react";

const AudioSuccess = ({ trigger }) => {
    const audioRef = useRef(null)
    const hasPageBeenRendered = useRef(false)

    function play() {
        audioRef.current.play();
    }

    useEffect(() => {
        if (hasPageBeenRendered.current) {
            play()
        }
        hasPageBeenRendered.current = true
    }, [trigger])

    return (
        <audio ref={audioRef} controls style={{ display: 'none' }}>
            <source src='/audio/success.mp3' type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    )
}

export default memo(AudioSuccess) as typeof AudioSuccess