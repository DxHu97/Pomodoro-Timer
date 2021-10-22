import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

const Display = ({ isTimerRunning, focusDuration, breakDuration, session }) => {
  return (
    <div>
      {session && (
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {session?.label === "Focusing"
                ? minutesToDuration(focusDuration)
                : minutesToDuration(breakDuration)}{" "}
              minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {!isTimerRunning && <h1>PAUSED</h1>}
          </div>
        </div>
      )}
      {session && (
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                  session?.label === "Focusing"
                    ? 100 - ((10 / 6) * session?.timeRemaining) / focusDuration
                    : 100 - ((10 / 6) * session?.timeRemaining) / breakDuration
                } // TODO: Increase aria-valuenow as elapsed time increases
                style={{
                  width: `${
                    session?.label === "Focusing"
                      ? 100 -
                        ((10 / 6) * session?.timeRemaining) / focusDuration
                      : 100 -
                        ((10 / 6) * session?.timeRemaining) / breakDuration
                  }%`,
                }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Display;
