import React from "react"
import {secondsToDuration, minutesToDuration} from "../utils/duration"

const FocusBreakButton = ({
  focusDuration,
  setFocusDuration,
  breakDuration,
  setBreakDuration,
  session,
  isFocus,
  setIsFocus
}) => { 
  const handleIncrease = (event) => {
    const {name} = event.target
   {name == "ifocus" ? setFocusDuration((focusi)=> (Math.min(focusi + 5, 60))) : setBreakDuration((breaki)=> (Math.min(breaki + 1, 15)))}
  }
  const handleDecrease = (event) => {
    const {name} = event.target
    {name == "dfocus" ? setFocusDuration((focusd)=> (Math.max(focusd - 5, 5))) : setBreakDuration((breakd)=> (Math.max(breakd - 1,1)))}
  }

return (
  <>
  <div className="col">
<div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                name = "dfocus"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick = {handleDecrease}
                disabled = {session}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                name = "ifocus"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick = {handleIncrease}
                disabled = {session}
                >
                <span className="oi oi-plus" />
              </button>
              </div>
              </div>
              </div>
              <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: { minutesToDuration(breakDuration)} 
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  name = "dbreak"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick = {handleDecrease}
                  disabled = {session}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  name = "ibreak"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick ={handleIncrease}
                  disabled = {session}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
              </div>
              </div>
              </div>
              </>
)
}

export default FocusBreakButton
