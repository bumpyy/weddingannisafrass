import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <>
      <div className="animate-fade sticky top-0 -z-10 bg-secondary ">
        {/*  Begin Mobile Nav  */}
        {/* <MobileNav /> */}
        {/*  End Mobile Nav  */}

        {/*  Begin Hero Content */}
        <HeroContent />
        {/* //  End Hero Content */}

        {/* //  Begin Hero Menu  */}
        {/* //  End Hero Menu  */}
      </div>
      {/* <HeroFoot /> */}
    </>
  );
}
