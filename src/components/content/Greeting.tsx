import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "@/lib/constants";
import FlowerIcon from "../FlowerIcon";
import StarIcon from "../StarIcon";

export default function Greeting() {
  return (
    <section
      id="home"
      className="relative flex h-full flex-col items-center justify-center gap-y-6 py-8 text-center lg:gap-12"
    >
      <div className="container">
        <h1
          className="font-playfair-display uppercase text-lg"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          The wedding of
        </h1>
        <p
          className="inline-block font-sanchez text-6xl md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-easing="ease-in-sine"
        >
          {MEMPELAI_WANITA} & {MEMPELAI_PRIA}
        </p>
        <div
          className="mt-4 space-y-2 text-xs"
          data-aos="fade-up"
          data-aos-delay="750"
          data-aos-easing="ease-in-sine"
        >
          <p>
            وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُوْنَ
          </p>
          <p>
            Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
            mengingat (kebesaran Allah)." (QS. Az Zariyat: 49)
          </p>
        </div>
      </div>

      <StarIcon className="right-0 top-0 size-16" />
      <FlowerIcon className="bottom-0 left-0 size-32" />

      <img
        src="assets/images/greeting.png"
        draggable="false"
        className="z-10 mb-20"
        alt="greeting image"
      />
    </section>
  );
}
