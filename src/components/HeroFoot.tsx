import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "../lib/constants";

export default function HeroFoot() {
  type navItemType = {
    name: string;
    url: string;
  };

  const navItem: Array<navItemType> = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "Waktu",
      url: "#waktu",
    },
    {
      name: "lokasi",
      url: "#lokasi",
    },
    {
      name: `tentang ${MEMPELAI_PRIA} & ${MEMPELAI_WANITA}`,
      url: "#tentang-mempelai",
    },
    {
      name: "share love",
      url: "#share-love",
    },
  ];

  return (
    <ul className="flex text-lg gap-8 shadow-lg z-20 sticky top-0 max-md:hidden text-center font-semibold justify-center text-primary bg-white py-2">
      {navItem.map((item, index) => {
        return (
          <li
            key={index}
            className={`${
              index === 0 ? "border-b-2" : ""
            } hover:border-b-2 border-primary uppercase text-2xl  `}
          >
            <a href={item.url}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
