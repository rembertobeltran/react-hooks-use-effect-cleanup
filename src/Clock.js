import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(intID);
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
