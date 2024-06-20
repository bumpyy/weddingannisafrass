import { useCountdown } from "@/lib/hooks";
import { CalendarIcon } from "@radix-ui/react-icons";
import { MapPinIcon } from "lucide-react";
import ScrollAnimation from "react-animate-on-scroll";
import StarIcon from "../StarIcon";
import { Button } from "../ui/button";

export default function Time() {
  const { day, hour, minutes, seconds } = useCountdown();

  return (
    <section
      className="container relative flex flex-col items-center gap-4 py-20 text-center text-accent"
      id="waktu"
    >
      <div className="mb-20 space-y-6">
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className="mb-6 text-xl font-playfair-display">Count the Date</h2>
          <div className="grid justify-around grid-cols-2 gap-4">
            <CountdownCard text="Hari" countdown={day} />
            <CountdownCard text="Jam" countdown={hour} />
            <CountdownCard text="Menit" countdown={minutes} />
            <CountdownCard text="Detik" countdown={seconds} />
          </div>
          <Button
            asChild
            className="px-2 my-4 mt-8 italic font-semibold font-noto-serif-display"
          >
            <a
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=THE+WEDDING+OF+Annisa+%26+Frass&location=https%3A%2F%2Fmaps.app.goo.gl%2Ft9iVCDwwV6kAxs9u5%3Fg_st%3Dic&dates=20240629T010000Z%2F20240629T020000Z"
              //   href="https://maps.app.goo.gl/xubkdGhLja2ZAGHh7"
              target="_blank"
              className=""
              data-tooltip="Open map"
            >
              <CalendarIcon className="mr-2 size-6" />
              Save to calendar
            </a>
          </Button>
        </ScrollAnimation>
      </div>

      {/* <Event
        title="Khitbah"
        date="JUM’AT, 13 APRIL 2024"
        time="19.30 - 21.30 WIB"
        addDivider
      >
        <p>Kediaman mempelai wanita</p>
        <p>
          Jl Bbkn Stasiun Cicalengka, Rt02/09 Desa Panenjoan,Kec cicalengka, Kab
          Bandung, 40395
        </p>
      </Event> */}

      <Event
        title="AKAD NIKAH"
        date="SABTU, 29 JUNI 2024"
        time="08.00 - 09.00 WIB"
        addDivider
      >
        <p>GGS STARS SPORT</p>
        <p>
          Jl Rancakihiang RT 02/09, Bojongloa, Kec Rancaekek, Kab Bandung, 40394
        </p>
      </Event>

      <ScrollAnimation
        animateIn="fadeInUp"
        className="flex-grow w-4/5 mx-auto my-6 border-t border-white"
        delay={300}
      ></ScrollAnimation>

      <Event
        title="RESEPSI NIKAH"
        date="SABTU, 29 JUNI 2024"
        time="11.00 - 14.00 WIB"
      >
        <p>GGS STARS SPORT</p>
        <p>
          Jl Rancakihiang RT 02/09, Bojongloa, Kec Rancaekek, Kab Bandung, 40394
        </p>
      </Event>

      {/* <h2 className="my-4 text-lg italic font-noto-serif-display text-primary">
        Wedding Event
      </h2> */}

      <StarIcon />
      <StarIcon className="bottom-0 left-0 size-24" />
    </section>
  );
}

function CountdownCard({
  countdown,
  text,
}: {
  countdown: number | string;
  text?: string;
}) {
  const digits = ("00" + countdown).slice(-2).split("");

  return (
    <div>
      <div className="flex items-center justify-center gap-1 text-lg font-semibold text-center text-secondary">
        <p
          className={`flex size-9 items-center justify-center rounded-sm bg-primary p-1`}
        >
          {digits[0]}
        </p>
        <p
          className={`flex size-9 items-center justify-center rounded-sm bg-primary p-1`}
        >
          {digits[1]}
        </p>
      </div>

      {text && <p className="mb-1">{text}</p>}
    </div>
  );
}

export function Event({
  title,
  date,
  time,
  addDivider = false,
  children,
}: {
  title: string;
  date: string;
  time: string;
  addDivider?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 text-primary">
      <ScrollAnimation
        animateIn="fadeInUp"
        className="font-thin tracking-wider text-primary"
      >
        <div>
          <h2 className="text-xl uppercase font-playfair-display">{title}</h2>
          <p className="font-thin font-sanchez">{date}</p>
          <p className="font-thin font-sanchez">{time}</p>
        </div>

        <div className="my-6 font-light font-playfair-display">{children}</div>

        <Button
          asChild
          size={"sm"}
          className="px-8 italic font-semibold font-noto-serif-display"
        >
          <a
            href="https://maps.app.goo.gl/t9iVCDwwV6kAxs9u5?g_st=ic"
            //   href="https://maps.app.goo.gl/xubkdGhLja2ZAGHh7"
            target="_blank"
            className=""
            data-tooltip="Open map"
          >
            <MapPinIcon className="mr-2 size-6" />
            Google Maps
          </a>
        </Button>
        {/* {addDivider && (
          <div className="flex-grow w-3/5 mx-auto mt-2 border-t border-white"></div>
        )} */}
      </ScrollAnimation>
    </div>
  );
}
