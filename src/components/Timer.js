import { useEffect } from "react";

function Timer({ dispatch, SecondsRemaining }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return <div className="timer">{SecondsRemaining}</div>;
}

export default Timer;
