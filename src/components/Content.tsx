import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Filter from "./Filter";
import Gallery from "./Gallery";
import About from "./content/About";
import Greeting from "./content/Greeting";
import Rsvp from "./content/Rsvp";
import Time from "./content/Time";
import Wish from "./wish";

export default function Content() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="animate-fade bg-secondary text-primary">
      <div className="max-w-2xl mx-auto">
        {/* <!-- Begin regular-section--> */}
        <Greeting />
        {/* <!-- End regular-section--> */}

        {/* <!-- Begin Tentang mempelai --> */}
        <About />
        {/* <!-- End Tentang mempelai --> */}

        {/* <!-- Begin Waktu Section --> */}
        <Time />
        {/* <!-- End Waktu Content --> */}
        <Filter />
        {/* <!-- Begin Lokasi Section --> */}
        <Gallery />
        {/* <GalleryCarousel /> */}
        {/* <!-- End Lokasi Content --> */}

        {/* <!-- Begin RSVP Content --> */}
        <Rsvp />
        {/* <!-- End RSVP Content --> */}

        <Wish />

        {/* <EndSection /> */}
      </div>
    </div>
  );
}
