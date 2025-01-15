import React, { useEffect, useRef, useState } from "react";

type Props = {
  handleTimerDisable: (disable: boolean) => void;
  isTimerDisabled: boolean;
};

function Timer({ handleTimerDisable, isTimerDisabled }: Props) {
  const [time, setTime] = useState(60);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTime = sessionStorage.getItem("timer");

    if (savedTime) {
      if (savedTime == "0" && isTimerDisabled) {
        handleTimerDisable(true);
        return;
      } else if (!isTimerDisabled) {
        setTime(60);
      } else {
        setTime(Number(savedTime));
      }
    }

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 1;
        sessionStorage.setItem("timer", newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isTimerDisabled]);

  useEffect(() => {
    if (time <= 0) {
      handleTimerDisable(true);
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [time]);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Timer;
