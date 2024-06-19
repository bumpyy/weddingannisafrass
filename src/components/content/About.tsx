import BrideInfo from "../BrideInfo";
import StarIcon from "../StarIcon";

export default function About() {
  return (
    <section
      id="tentang-mempelai"
      className="container relative my-8 flex flex-col gap-8 text-center"
    >
      <BrideInfo
        instagramLink="https://www.instagram.com/annisaichaa87?igsh=NGw0NDRtYXpraTEw"
        variant="female"
      />
      <BrideInfo
        instagramLink="https://www.instagram.com/arf_fras12?igsh=eGo4ajBydHV5ZTk2"
        variant="male"
        position="right"
      />

      <StarIcon className="right-0 top-0 size-20" />
      <StarIcon className="left-[15%] top-1/2 size-20" />
      <StarIcon className="bottom-0 left-0 size-16" />
    </section>
  );
}
