import { useEffect, useRef, useState } from "react";

export default function Cronometro({deadline}: {deadline: any}) {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = ({num}: {num: any}) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = ({deadline}: {deadline: any}) => {
    const time = Date.parse(deadline) - new Date().getTime();
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil({deadline}), 1000);

    return () => getTimeUntil({deadline});
  }, [deadline]);

  return (
    <div>
      <div className="flex h-full w-full"></div>

      <div className="flex h-full w-full justify-around">
        <div className="flex h-full justify-around gap-5">
          <div className="text-center">
            <div className="text-4xl">{leading0({num: days})}</div>

            <div>DD</div>
          </div>

          <div className="flex text-center justify-center items-center-safe">
            <div className="text-4xl">:</div>
          </div>

          <div className="text-center">
            <div className="text-4xl">{leading0({num: hours})}</div>

            <div>HH</div>
          </div>

          <div className="flex text-center justify-center items-center-safe">
            <div className="text-4xl">:</div>
          </div>

          <div className="text-center">
            <div className="text-4xl">{leading0({num: minutes})}</div>

            <div>MM</div>
          </div>

          <div className="flex text-center justify-center items-center-safe">
            <div className="text-4xl">:</div>
          </div>

          <div className="text-center">
            <div className="text-4xl">{leading0({num: seconds})}</div>

            <div>SS</div>
          </div>
        </div>
      </div>

    </div>
  );
}
