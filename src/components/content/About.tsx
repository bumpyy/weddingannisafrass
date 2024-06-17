import BrideInfo from "../BrideInfo";

export default function About() {
  return (
    <section
      id="tentang-mempelai"
      className="container my-8 flex flex-col gap-8 text-center"
    >
      <BrideInfo instagramLink="" variant="female" />
      <BrideInfo instagramLink="" variant="male" position="right" />
    </section>
  );
}
