import { DATE, MEMPELAI_PRIA, MEMPELAI_WANITA } from "../lib/constants.js";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen-dynamic">
      <div className="container flex flex-col items-center justify-end h-3/5">
        <h1 className="mb-4 text-lg font-bold text-center sm:text-xl md:text-2xl lg:text-3xl font-garamond">
          Join and Celebrate Our Wedding
        </h1>
        <div className="flex flex-col gap-2 text-center ">
          <h2 className="font-bold leading-3 lowercase text-title font-gaegu">
            {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
          </h2>
          <div className="text-xl font-semibold font-garamond">
            <h3
            //   data-aos="fade-up"
            //   data-aos-easing="linear"
            >
              {DATE.toLocaleString("id", {
                day: "2-digit",
                month: "numeric",
                year: "numeric",
              })
                .split("/")
                .join(".")}
            </h3>
          </div>
        </div>
      </div>

      <div className="w-auto h-3/5">
        <img
          className="relative object-contain object-bottom w-auto h-full"
          src="assets/images/hero.jpg"
          alt=""
        />
      </div>

      {/*  Start Countdown  */}
      {/* <ul className="flex justify-center gap-1 text-5xl text-center">
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
      </ul> */}
      {/*  End Countdown  */}
    </div>
  );
}
