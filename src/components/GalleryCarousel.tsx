import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import StarIcon from "./StarIcon";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function GalleryCarousel() {
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

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="container relative py-16">
      <h2 className="mb-8 text-center font-noto-serif-display italic text-lg">
        Our Gallery
      </h2>
      <Carousel setApi={setApi} className="mx-auto w-full max-w-xs">
        <CarouselContent>
          {photos.map((photo) => (
            <CarouselItem key={photo.name}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
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
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-muted-foreground text-sm">
        Photo {current} of {count}
      </div>
      <StarIcon className="right-0 top-0 size-14" />
      <StarIcon className="bottom-0 left-0 size-16" />
    </section>
  );
}
