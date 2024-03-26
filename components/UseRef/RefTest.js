import { useRef, useState } from "react";

function RefTest() {
  const [startTime, setStartTime] = useState(null);
  const [timeNow, setTimeNow] = useState(null);
  const intervalRef = useRef(null);

  function handelStart() {
    console.log("start");
    setStartTime(Date.now());
    setTimeNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeNow(Date.now());
    }, 10);
  }
  function handelStop() {
    console.log("stop");
    clearInterval(intervalRef.current);
  }
  console.log(startTime / 1000);
  console.log(timeNow);

  let secondsPassed = 0;
  if (startTime !== null && timeNow !== null) {
    secondsPassed = (timeNow - startTime) / 1000;
  }

  return (
    <div>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <h1>Time passed: {secondsPassed}</h1>
      <button onClick={handelStart}> start</button>
      <button onClick={handelStop}> stop</button>
    </div>
  );
}

export default RefTest;
