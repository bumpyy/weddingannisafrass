import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "@/lib/constants";

export default function Greeting() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-full py-8 text-center gap-y-6 lg:gap-12"
    >
      <div className="container">
        <h1
          className="text-lg uppercase font-playfair-display"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          The wedding of
        </h1>
        <p
          className="inline-block text-6xl font-sanchez md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-easing="ease-in-sine"
        >
          {MEMPELAI_WANITA} & {MEMPELAI_PRIA}
        </p>
        <div
          className="mt-4 space-y-2 text-xs"
          data-aos="fade-up"
          data-aos-delay="500"
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

      <img
        src="assets/images/greeting.png"
        draggable="false"
        alt="greeting image"
      />
    </section>
  );
}
