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
      className="container relative flex flex-col gap-6 pb-16 my-12 font-thin tracking-wider text-center font-catchy-mager text-accent"
    >
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="text-xl capitalize font-playwrite-tz">Share Love</h2>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        className="flex flex-col items-center justify-center mt-2 text-xs text-center sm:text-xl"
      >
        <p className="text-xs text-justify">
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
        <h2 className="text-2xl capitalize font-playwrite-tz">Send gift</h2>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" className="w-2/5 mx-auto">
        <img src="assets/images/gift.png" alt="gift icon" draggable="false" />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" className="text-xs">
        <p>Kediaman menpelai wanita</p>
        <p>
          Jl Bbkn Stasiun Cicalengka, Rt02/09 Desa Panenjoan,Kec cicalengka, Kab
          Bandung, 40395
        </p>
      </ScrollAnimation>

      <StarIcon className="top-0 right-0 size-16" />
      <StarIcon className="bottom-0 left-0 size-20" />
    </section>
  );
}
