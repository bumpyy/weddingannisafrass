import BrideInfo from "../BrideInfo";

export default function About() {
  return (
    <section
      id="tentang-mempelai"
      className="container my-8 flex flex-col gap-8 text-center"
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
    </section>
  );
}
