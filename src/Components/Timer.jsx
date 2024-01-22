import { useEffect, useState } from "react";

function Timer({ startTime }) {
  const [time, setTime] = useState(`${startTime}`);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(`${startTime}`);
    setIsRunning(false);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div className="timer border-b g border-b-gray-300 ">
      <p className="mt-4">
        {" "}
        Timer{" "}
        {startTime < 60 ? `${startTime} seconds` : `${startTime / 60} min`}
      </p>
      <h1 className="time-box mb-2">
        {time === 0 ? (
          <span className="text-2xl text-red-500 font-bold">Time is up!</span>
        ) : (
          `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
        )}
      </h1>
      <div className="flex space-x-4 mb-6">
        <button className=" text-green-400" onClick={startTimer}>
          Start
        </button>
        <button className=" text-red-500" onClick={stopTimer}>
          Stop
        </button>
        <button className=" text-yellow-400" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
