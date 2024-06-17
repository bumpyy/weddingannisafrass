import { HomeIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "../lib/constants";
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
      className={`${isAnimating ? "animate-once animate-slide-up" : ""} fixed flex h-svh w-full flex-col items-center justify-start overflow-y-hidden bg-secondary pt-8`}
    >
      <div className="container w-full max-w-2xl space-y-8 text-center text-primary">
        <h1 className="animate-once animate-fade-down font-catchy-mager font-thin">
          Undangan Pernikahan
        </h1>
        <div className="animate-fade-down animate-once animate-delay-200 flex flex-col space-y-2 font-playfair-display italic text-7xl">
          <p className="self-start">{MEMPELAI_WANITA}</p>
          <p className="self-center text-5xl">&</p>
          <p className="self-end pr-8">{MEMPELAI_PRIA}</p>
        </div>
        <div className="mx-auto max-w-xs font-futura font-thin text-white">
          <p className="font-semibold text-xl">{guestName ?? "Guest"}</p>
          Mohon maaf apabila ada kesalahan penulisan nama & gelar
        </div>
        <Button
          variant={"outline"}
          size={"lg"}
          className="px-4 font-semibold leading-none text-black text-xl"
          onClick={() => {
            setIsAnimating(true);
            //   const audio = document.getElementById(
            //     "audio",
            //   ) as HTMLAudioElement;
            //   audio?.play();
          }}
        >
          <HomeIcon className="mr-2 size-6" /> Buka Undangan
        </Button>
      </div>
      <div>
        <img src="assets/images/preload.png" alt="preload image" />
      </div>
    </div>
  );
}
