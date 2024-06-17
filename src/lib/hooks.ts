import { useEffect, useState } from "react";
import { DATE } from "./constants";

export const useCountdown = () => {
  const [rDay, setrDay] = useState(0); //countdown 2 hours.
  const [rHour, setrHour] = useState(0); //countdown 2 hours.
  const [rMin, setrMin] = useState(0);
  const [rSec, setrSec] = useState(0);
  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toUTCString());

    if (time < 0) {
      setrDay(0);
      setrHour(0);
      setrMin(0);
      setrSec(0);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setrDay(days);
      setrHour(hours);
      setrMin(minutes);
      setrSec(seconds);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getTimeUntil(DATE.toDateString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    day: rDay,
    hour: rHour,
    minutes: rMin,
    seconds: rSec,
  };
};
