import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ScrollAnimation from "react-animate-on-scroll";
import StarIcon from "./StarIcon";

type TPhotoGrid = {
  name: string;
  position: "object-top" | "object-center" | "object-bottom";
};

export default function Gallery() {
  const photoGrid1: TPhotoGrid[] = [
    { name: "gallery_2", position: "object-center" },
    { name: "gallery_3", position: "object-bottom" },
    { name: "gallery_4", position: "object-center" },
  ];

  const photoGrid2: TPhotoGrid[] = [
    { name: "bride_female", position: "object-center" },
    { name: "bride_male", position: "object-center" },
    // { name: "gallery_5", position: "object-top" },
  ];
  const photoGrid3: TPhotoGrid[] = [
    { name: "gallery_7", position: "object-center" },
    { name: "gallery_1", position: "object-center" },
    { name: "gallery_6", position: "object-center" },
  ];
  return (
    <section className="container relative py-16">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="mb-6 text-lg italic text-center font-noto-serif-display">
          Our Gallery
        </h2>

        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          {photoGrid1.map((photo) => (
            <GalleryPhoto key={photo.name} photo={photo} />
          ))}
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <div className="grid grid-cols-2 grid-rows-1 gap-4 mx-12 my-4">
          {photoGrid2.map((photo) => (
            <GalleryPhoto key={photo.name} photo={photo} />
          ))}
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          {photoGrid3.map((photo) => (
            <GalleryPhoto key={photo.name} photo={photo} />
          ))}
        </div>
      </ScrollAnimation>
      <StarIcon className="top-0 right-0 size-14" />
      <StarIcon className="bottom-0 left-0 size-16" />
    </section>
  );
}

export function GalleryPhoto({ photo }: { photo: TPhotoGrid }) {
  return (
    <Dialog key={photo.name}>
      <DialogTrigger>
        <div
          key={photo.name}
          className="overflow-hidden transition-transform duration-700 rounded-md cursor-pointer aspect-square hover:z-20 hover:scale-110 hover:shadow-lg"
        >
          <img
            src={`assets/images/${photo.name}_thumb.jpeg`}
            className={`h-full w-full object-cover ${photo.position}`}
            alt=""
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <img
          src={`assets/images/${photo.name}.jpeg`}
          className={`h-full w-full object-cover ${photo.position}`}
          alt=""
        />
      </DialogContent>
    </Dialog>
  );
}
