import ScrollAnimation from "react-animate-on-scroll";

type TJourneyItem = {
  title: string;
  date: string;
  content: string;
};

export default function Journey() {
  const journeys: TJourneyItem[] = [
    {
      title: "AWAL BERTEMU",
      date: "Juli 2022",
      content: "Kisah ini berawal di pertemuan kita di tahun 2022.",
    },
    {
      title: "BERKOMITMEN BERSAMA",
      date: "Desember 2023",
      content:
        "Pada tanggal 25 Desember, kami bertemu pertama kali untuk menyakini hati atas semua yang telah disampaikan. Setelah itu kami saling meyakini dan meminta restu kepada kedua orang tua.",
    },
    {
      title: "KHITBAH",
      date: "April 2024",
      content:
        "Pada tanggal 13 April, datang untuk mengkhitbah dan memutuskan untuk menikah pada tanggal 29 Juni 2024.",
    },
    {
      title: "MENIKAH",
      date: "Juni 2024",
      content:
        "Jika dihitung dengan jari sampai pada hari bahagia ini terasa begitu singkat. Namun untuk suatu do'a akan terus mengalir. Untuk itu kami memohon do'a dari keluarga, saudara, sahabat. Agar acara kami berjalan dengan Alhamdulillah lancar dan dimudahkan dalam segala hal.",
    },
  ];

  return (
    <section className="container">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="mb-4 font-noto-serif-display italic text-2xl">
          Our Journey
        </h2>
        <img
          src="assets/images/journeyHeader.png"
          className="w-1/2"
          alt="journey"
        />
      </ScrollAnimation>
      <div className="flex flex-col gap-y-8">
        {journeys.map((journey) => (
          <JourneyCard journey={journey} />
        ))}
      </div>
    </section>
  );
}

function JourneyCard({ journey }: { journey: TJourneyItem }) {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      className="rounded-3xl bg-[#9e8775] p-2 text-white"
    >
      <div className="rounded-3x relative rounded-3xl border-2 border-[#d68e3a] bg-[#9e8775] px-6 py-4 font-frank-ruhl-libre">
        <img
          src="assets/images/star2.png"
          className="absolute -left-6 -top-6 size-16"
          draggable={false}
          alt=""
        />
        <p className="font-noto-serif-display italic text-lg">
          {journey.title}
        </p>
        <p className="mb-1 mt-2">{journey.date}</p>
        <p className="text-left text-xs">{journey.content}</p>
        <img
          src="assets/images/star3.png"
          className="absolute -bottom-6 -right-6 size-16"
          draggable={false}
          alt=""
        />
      </div>
    </ScrollAnimation>
  );
}
