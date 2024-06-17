import { DATE, MEMPELAI_PRIA, MEMPELAI_WANITA } from "@/lib/constants";

export default function EndSection() {
  return (
    <section className="relative h-svh">
      <div className="opacity-50">
        <img src="assets/images/end.jpg" alt="" />
      </div>
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 space-y-2 text-center font-semibold md:space-y-5">
        <h1 className="font-garamond animate-once animate-fade-down text-xs sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
          Join our Wedding
        </h1>
        <h2 className="font-gaegu animate-once animate-fade-down text-2xl sm:text-5xl md:text-8xl xl:text-9xl">
          {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
        </h2>
        <div className="flex flex-col items-center gap-4 font-semibold">
          <p className="font-garamond text-lg sm:text-2xl md:text-6xl">
            {DATE.toLocaleString("id", {
              day: "2-digit",
              month: "numeric",
              year: "numeric",
            })
              .split("/")
              .join(".")}
          </p>
        </div>
      </div>
    </section>
  );
}
