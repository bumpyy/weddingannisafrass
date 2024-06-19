import { useCountdown } from "@/lib/hooks";
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
      <Event
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
      </Event>

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

      <h2 className="my-4 font-noto-serif-display italic text-primary text-lg">
        Wedding Event
      </h2>

      <Button
        asChild
        className="mb-4 px-8 font-noto-serif-display font-semibold italic text-lg"
      >
        <a
          href="https://maps.app.goo.gl/t9iVCDwwV6kAxs9u5?g_st=ic"
          //   href="https://maps.app.goo.gl/xubkdGhLja2ZAGHh7"
          target="_blank"
          className=""
          data-tooltip="Open map"
        >
          Google Maps
        </a>
      </Button>

      <div className="flex flex-wrap justify-around gap-4">
        <CountdownCard text="Hari" countdown={day} />
        <CountdownCard text="Jam" countdown={hour} />
        <CountdownCard text="Menit" countdown={minutes} />
        <CountdownCard text="Detik" countdown={seconds} />
      </div>

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
      <div className="flex items-center justify-center gap-1 text-center font-semibold text-secondary text-lg">
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
        <h2 className="font-playfair-display uppercase text-xl">{title}</h2>
        <p className="font-sanchez font-thin">{date}</p>
        <p className="font-sanchez font-thin">{time}</p>
        <div className="font-playfair-display font-light text-xxs">
          {children}
        </div>
      </ScrollAnimation>

      {addDivider && (
        <div className="mx-auto mt-2 w-3/5 flex-grow border-t border-white"></div>
      )}
    </div>
  );
}
