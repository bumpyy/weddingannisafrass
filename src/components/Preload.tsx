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
      className={`${isAnimating ? "animate-once animate-slide-up" : ""} relative h-dvh w-full items-center justify-between overflow-y-hidden bg-secondary pt-8`}
    >
      <div className="container relative w-full max-w-2xl shrink basis-full space-y-8 text-center text-primary">
        {/* <h1 className="font-thin animate-once animate-fade-down font-catchy-mager">
          Undangan Pernikahan
        </h1> */}
        <div className="pb-10 pt-16 text-center font-playfair-display">
          <h1 className="mb-4">The Wedding Of</h1>
          <p className="animate-fade-down animate-once animate-delay-200 flex flex-col gap-y-6 italic text-6xl">
            {MEMPELAI_WANITA} & {MEMPELAI_PRIA}
          </p>
        </div>

        <StarIcon />
      </div>

      <div className="relative h-full">
        <img
          className="mx-auto h-full object-cover object-bottom brightness-50 saturate-50"
          src="assets/images/preload.png"
          alt="preload image"
          draggable={false}
        />

        <div className="absolute bottom-1/4 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-4 text-center font-catchy-mager text-primary md:bottom-1/2 md:-translate-y-1/2">
          <h2 className="text-lg">Kepada Bpk/Ibu/Saudara/i</h2>
          {/* <p className="mb-2 text-7xl">Fira</p> */}
          {guestName && <p className="mb-2 text-2xl">{guestName}</p>}
          <Button
            variant={"outline"}
            size={"sm"}
            className="px-4 font-futura font-semibold leading-none text-black text-sm"
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
