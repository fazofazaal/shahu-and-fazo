// react hook to get the time remaining in a given date and time till November 4th, 2020 at 16:45:00 PM
// returns the days, hours, minutes and seconds remaining and a boolean to indicate if the time has passed

import { useEffect, useState } from 'react';

function getTimeRemaining(eventDate: Date, now: Date) {
  const timeRemaining = eventDate.getTime() - now.getTime();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  const hasPassed = timeRemaining < 0;

  return { days, hours, minutes, seconds, hasPassed };
}

export default function useTimeRemaining() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasPassed: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(2022, 10, 4, 16, 45, 0);

      const timeRemaining = getTimeRemaining(eventDate, now);

      setTimeRemaining(timeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [
    timeRemaining.days,
    timeRemaining.hours,
    timeRemaining.minutes,
    timeRemaining.seconds,
    timeRemaining.hasPassed,
  ];
}
