import {
  DATE,
  LOCATION,
  MEMPELAI_PRIA,
  MEMPELAI_WANITA,
} from "../lib/constants.js";
import { TimePropsType } from "../lib/types.js";

export default function HeroContent({ day, hour, min, sec }: TimePropsType) {
  return (
    <div className="grid justify-center h-screen-dynamic items-center">
      <div className="container">
        <div className="text-center flex flex-col gap-10 mb-14">
          <h1 className="text-3xl">Undangan Pernikahan</h1>
          <h2 className="text-title  font-niconne font-bold -rotate-2 hover:-rotate-3 transition-transform hover:scale-105">
            {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
          </h2>
          <div>
            <h3>
              {`${DATE.toLocaleString("id", { weekday: "long" })},
              ${DATE.toLocaleString("id", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}`}
            </h3>
            <h4 className="">{LOCATION}</h4>
          </div>
        </div>

        {/*  Start Countdown  */}
        <ul className="flex gap-1 text-5xl justify-center text-center">
          <li>
            <span className="">
              {day.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-lg">Hari</p>
          </li>
          <li className="">:</li>
          <li>
            <span className="">
              {hour.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-lg text-center">Jam</p>
          </li>
          <li className="">:</li>
          <li>
            <span className="">
              {min.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-lg">Menit</p>
          </li>
          <li className="">:</li>
          <li>
            <span className="">
              {sec.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-lg ">Detik</p>
          </li>
        </ul>
      </div>
      {/*  End Countdown  */}
    </div>
  );
}
