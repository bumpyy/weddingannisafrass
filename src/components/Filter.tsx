import { CameraIcon } from "lucide-react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "./ui/button";

export default function Filter() {
  return (
    <section className="container flex flex-col items-center justify-center my-20 gap-y-4 font-catchy-mager">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="text-lg italic font-semibold uppercase">
          Filter instagram
        </h2>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp">
        <p className="text-justify !leading-tight text-lg">
          Bantu kami memeriahkan acara kami dengan menggunakan filter instagram
          pada link dibawah ini
        </p>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp">
        <Button asChild>
          <a
            href="https://www.instagram.com/ar/1003278377813397/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CameraIcon className="mr-2 size-6" /> Gunakan Filter
          </a>
        </Button>
      </ScrollAnimation>
    </section>
  );
}
