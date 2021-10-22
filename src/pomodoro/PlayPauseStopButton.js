import React from "react";
import classNames from "../utils/class-names";

const PlayPauseStopButton = ({
    isTimerRunning,
    setIsTimerRunning,
    focusDuration,
    session,
    setSession
}) => {
    function playPause() {
        setIsTimerRunning((prevState) => {
          const nextState = !prevState;
          if (nextState) {
            setSession((prevStateSession) => {
              // If the timer is starting and the previous session is null,
              // start a focusing session.
              if (prevStateSession === null) {
                return {
                  label: "Focusing",
                  timeRemaining: focusDuration * 60,
                };
              }
              return prevStateSession;
            });
          }
          return nextState;
        });
      }
const handleStop = () => {
    setIsTimerRunning(false)
      setSession(null)
}

return (
<div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            <button
              type="button"
              className={"btn btn-secondary ${disabled()}"}
              data-testid="stop"
              title="Stop the session"
              onClick = {handleStop}
              disabled = {!session}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
)
            }
export default PlayPauseStopButton