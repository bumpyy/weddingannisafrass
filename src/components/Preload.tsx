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
        {/* <h1 className="font-thin animate-once animate-fade-down font-catchy-mager">
          Undangan Pernikahan
        </h1> */}
        <h1 className="flex flex-col text-6xl italic animate-fade-down animate-once animate-delay-200 gap-y-6 font-playfair-display">
          <span className="self-start">{MEMPELAI_WANITA}</span>
          <span className="self-center text-5xl">&</span>
          <span className="self-end">{MEMPELAI_PRIA}</span>
        </h1>

        <StarIcon />
      </div>
      <div className="relative">
        <img
          className="max-h-1/2 brightness-75 saturate-50"
          src="assets/images/preload.png"
          alt="preload image"
          draggable={false}
        />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[15%] flex-col items-center justify-center gap-y-4 font-catchy-mager text-white">
          <h2 className="text-2xl">Dear</h2>
          <p className="mb-2 text-7xl">Fira</p>
          {guestName && <p className="text-xl font-semibold">{guestName}</p>}
          <Button
            variant={"outline"}
            size={"sm"}
            className="px-4 text-sm font-semibold leading-none text-black font-futura"
            onClick={() => {
              setIsAnimating(true);
              const audio = document.getElementById(
                "audio",
              ) as HTMLAudioElement;
              audio?.play();
            }}
          >
            Open Invitation
          </Button>
        </div>
      </div>
    </div>
  );
}