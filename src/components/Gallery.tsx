import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Gallery() {
  const photos: {
    name: string;
    position: "object-top" | "object-center" | "object-bottom";
  }[] = [
    { name: "gallery_7.jpeg", position: "object-center" },
    { name: "gallery_1.jpeg", position: "object-center" },
    { name: "gallery_6.jpeg", position: "object-center" },

    { name: "bride_female.jpeg", position: "object-center" },
    { name: "gallery_2.jpeg", position: "object-center" },
    { name: "bride_male.jpeg", position: "object-center" },

    { name: "gallery_4.jpeg", position: "object-center" },
    { name: "gallery_3.jpeg", position: "object-bottom" },
    { name: "gallery_5.jpeg", position: "object-top" },
  ];
  return (
    <section className="container">
      <h2 className="font-noto-serif-display mb-8 text-center italic text-lg">
        Our Gallery
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {photos.map((photo) => (
          <Dialog>
            <DialogTrigger>
              <div
                key={photo.name}
                className="aspect-square cursor-pointer overflow-hidden rounded-md transition-transform duration-700 hover:scale-110"
              >
                <img
                  src={`assets/images/${photo.name}`}
                  className={`h-full w-full object-cover ${photo.position}`}
                  alt=""
                />
              </div>
            </DialogTrigger>
            <DialogContent>
              <img
                src={`assets/images/${photo.name}`}
                className={`h-full w-full object-cover ${photo.position}`}
                alt=""
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
