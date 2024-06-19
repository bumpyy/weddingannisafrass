import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import StarIcon from "./StarIcon";

export default function Gallery() {
  const photos: {
    name: string;
    position: "object-top" | "object-center" | "object-bottom";
  }[] = [
    { name: "gallery_7", position: "object-center" },
    { name: "gallery_1", position: "object-center" },
    { name: "gallery_6", position: "object-center" },

    { name: "bride_female", position: "object-center" },
    { name: "gallery_2", position: "object-center" },
    { name: "bride_male", position: "object-center" },

    { name: "gallery_4", position: "object-center" },
    { name: "gallery_3", position: "object-bottom" },
    { name: "gallery_5", position: "object-top" },
  ];
  return (
    <section className="container relative py-16">
      <h2 className="mb-8 text-center font-noto-serif-display italic text-lg">
        Our Gallery
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {photos.map((photo) => (
          <Dialog key={photo.name}>
            <DialogTrigger>
              <div
                key={photo.name}
                className="aspect-square cursor-pointer overflow-hidden rounded-md transition-transform duration-700 hover:scale-110"
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
        ))}
      </div>
      <StarIcon className="right-0 top-0 size-14" />
      <StarIcon className="bottom-0 left-0 size-16" />
    </section>
  );
}
