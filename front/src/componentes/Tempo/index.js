import React, { useEffect, useState } from "react";
import "./Tempo.css";

const Tempo = ({ date, tempoDuracao, aoMudarTempo }) => {
  const calculateTimeLeft = (endTime) => {
    const difference = endTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / 1000 / 60 / 60) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const calculateEndTime = () => {
    const endDate = new Date(date);
    const durationParts = tempoDuracao.split(":");
    const durationHours = parseInt(durationParts[0], 10) || 0;
    const durationMinutes = parseInt(durationParts[1], 10) || 0;

    endDate.setHours(endDate.getHours() + durationHours);
    endDate.setMinutes(endDate.getMinutes() + durationMinutes);

    return endDate;
  };
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(calculateEndTime())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(calculateEndTime()));
    }, 1000);

    return () => clearInterval(timer);
  }, [date, tempoDuracao]);

  useEffect(() => {
    aoMudarTempo(timeLeft);
  }, [aoMudarTempo, timeLeft]);

  return (
    <div className="cronometro">
      <span>Tempo Restante:</span>
      <span>
        {timeLeft.hours}:
        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
      </span>
    </div>
  );
};

export default Tempo;
