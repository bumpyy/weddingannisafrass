import { CopyIcon } from "lucide-react";
import ScrollAnimation from "react-animate-on-scroll";
import { CopyToClipboard } from "react-copy-to-clipboard";
import StarIcon from "../StarIcon";
import { Button } from "../ui/button";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

export default function Rsvp() {
  const { toast } = useToast();

  return (
    <section
      id="share-love"
      className="container relative my-12 flex flex-col gap-8 pb-16 text-center font-catchy-mager font-thin tracking-wider text-accent"
    >
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="font-playwrite-tz capitalize text-3xl">Share Love</h2>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        className="mt-2 flex flex-col items-center justify-center text-center text-xs sm:text-xl"
      >
        <p className="text-start text-sm">
          Doa & restu anda di pernikahan kami tentunya sangat berarti. Namun
          jika anda ingin memberi lebih, kami dengan senang hati menerimanya dan
          akan semakin melengkapi kebahagiaan kami.
        </p>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        className="flex flex-col items-center"
      >
        <p className="">BCA - 6395468077</p>
        <p className="">Annisa nurjannah</p>

        <CopyToClipboard
          text={"6395468077"}
          onCopy={() => {
            toast({
              title: "Tersalin : Annisa nurjannah",
              description: "BCA - 6395468077",
              action: <ToastAction altText="tutup">Tutup</ToastAction>,
            });
          }}
        >
          <Button variant={"ghost"}>
            <CopyIcon className="mr-2 size-4" />
            Salin Nomor
          </Button>
        </CopyToClipboard>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        className="flex flex-col items-center"
      >
        <p className="">MANDIRI - 1270011569017</p>
        <p className="">M arif prasetyo</p>

        <CopyToClipboard
          text={"1270011569017"}
          onCopy={() => {
            toast({
              title: "Tersalin : M arif prasetyo",
              description: "MANDIRI - 1270011569017",
              action: <ToastAction altText="tutup">Tutup</ToastAction>,
            });
          }}
        >
          <Button variant={"ghost"}>
            <CopyIcon className="mr-2 size-4" />
            Salin Nomor
          </Button>
        </CopyToClipboard>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="font-playwrite-tz capitalize text-2xl">Send gift</h2>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" className="mx-auto w-2/5">
        <img src="assets/images/gift.png" alt="gift icon" draggable="false" />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" className="text-xs">
        <p>Kediaman menpelai wanita</p>
        <p>
          Jl Bbkn Stasiun Cicalengka, Rt02/09 Desa Panenjoan,Kec cicalengka, Kab
          Bandung, 40395
        </p>
      </ScrollAnimation>

      <StarIcon className="right-0 top-0 size-16" />
      <StarIcon className="bottom-0 left-0 size-20" />
    </section>
  );
}
