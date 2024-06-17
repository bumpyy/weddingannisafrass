export default function Location() {
  return (
    <section
      className="flex flex-col items-center gap-8 mt-10 text-center"
      id="lokasi"
    >
      <div
        className="container flex flex-col gap-2"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <p className="text-3xl font-semibold capitalize sm:text-4xl">
          Seetitik Kopi
        </p>
        <div className="max-sm:text-lg">
          <p className="text-nowrap">Jl. Setu Baru No.1, Sukmajaya,</p>
          <p className="text-nowrap">Kota Depok, Jawa Barat</p>
        </div>
      </div>

      <div
        className="lg:max-w-72 max-w-40 md:max-w-48"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <a
          href="https://maps.app.goo.gl/xubkdGhLja2ZAGHh7"
          target="_blank"
          className=""
          data-tooltip="Open map"
          data-aos="zoom-in"
        >
          <img
            src="assets/images/open-map.png"
            alt=""
            draggable="false"
          />
        </a>
      </div>
    </section>
  );
}
