import { HomeIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "../lib/constants";
import StarIcon from "./StarIcon";
import { Button } from "./ui/button";

export default function Preload({
  openHandler,
}: {
  openHandler: Dispatch<SetStateAction<boolean>>;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const sp = new URLSearchParams(window.location.search);
  const guestName = sp.get("guest"); // world

  return (
    <div
      onAnimationEnd={(e) => {
        if (e.animationName === "slide-up") {
          openHandler(true);
        }
      }}
      className={`${isAnimating ? "animate-once animate-slide-up" : ""} fixed flex h-screen w-full flex-col items-center justify-between overflow-y-hidden bg-secondary pt-8`}
    >
      <div className="container relative w-full max-w-2xl space-y-8 text-center text-primary">
        <h1 className="animate-once animate-fade-down font-catchy-mager font-thin">
          Undangan Pernikahan
        </h1>
        <div className="animate-fade-down animate-once animate-delay-200 flex flex-col space-y-2 font-playfair-display italic text-6xl">
          <p className="self-start">{MEMPELAI_WANITA}</p>
          <p className="self-center text-5xl">&</p>
          <p className="self-end pr-8">{MEMPELAI_PRIA}</p>
        </div>
        <div className="mx-auto max-w-xs font-futura font-thin text-white">
          {guestName && <p className="font-semibold text-xl">{guestName}</p>}
          <p>Mohon maaf apabila ada kesalahan penulisan nama & gelar</p>
        </div>
        <Button
          variant={"outline"}
          size={"lg"}
          className="px-4 font-semibold leading-none text-black text-xl"
          onClick={() => {
            setIsAnimating(true);
            const audio = document.getElementById("audio") as HTMLAudioElement;
            audio?.play();
          }}
        >
          <HomeIcon className="mr-2 size-6" /> Buka Undangan
        </Button>
        <StarIcon />
      </div>
      <img
        className="max-h-1/2"
        src="assets/images/preload.png"
        alt="preload image"
        draggable={false}
      />
    </div>
  );
}
