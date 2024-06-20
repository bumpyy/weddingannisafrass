import ScrollAnimation from "react-animate-on-scroll";
import BrideInfo from "../BrideInfo";
import StarIcon from "../StarIcon";

export default function About() {
  return (
    <section
      id="tentang-mempelai"
      className="container relative flex flex-col gap-8 my-8 text-center"
    >
      <BrideInfo
        instagramLink="https://www.instagram.com/annisaichaa87?igsh=NGw0NDRtYXpraTEw"
        variant="female"
      />
      <ScrollAnimation animateIn="fadeInUp">
        <p className="text-3xl italic font-noto-serif-display">-&-</p>
      </ScrollAnimation>
      <BrideInfo
        instagramLink="https://www.instagram.com/arf_fras12?igsh=eGo4ajBydHV5ZTk2"
        variant="male"
        position="right"
      />

      <StarIcon className="top-0 right-0 size-20" />
      <StarIcon className="left-[15%] top-1/2 size-20" />
      <StarIcon className="bottom-0 left-0 size-16" />
    </section>
  );
}
