export default function MobileNav() {
  return (
    <nav className="navbar is-transparent is-hidden-desktop hidden">
      {/*  Begin Burger Menu  */}
      <div className="navbar-brand is-fixed-top">
        <div
          className="navbar-burger burger"
          data-target="mobile-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/*  End Burger Menu  */}
      <div
        id="mobile-nav"
        className="navbar-menu"
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <a
              className="navbar-item"
              href="#Waktu"
            >
              Waktu
            </a>
          </div>
          <div className="navbar-item">
            <a
              className="navbar-item"
              href="#lokasi"
            >
              Lokasi
            </a>
          </div>

          <div className="navbar-item">
            <a
              className="navbar-item"
              href="#tentang-sherly-daeng"
            >
              Tentang Sherly dan Daeng
            </a>
          </div>
          <div className="navbar-item">
            <a
              className="navbar-item"
              href="#rsvp"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
