import {
  BAPAK_MEMPELAI_PRIA,
  BAPAK_MEMPELAI_WANITA,
  IBU_MEMPELAI_PRIA,
  IBU_MEMPELAI_WANITA,
  MEMPELAI_PRIA_lengkap,
  MEMPELAI_WANITA_lengkap,
} from "@/lib/constants";
import { TBrideFrameProps } from "@/lib/types";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import BrideFrame from "./BrideFrame";
import { Button } from "./ui/button";

export default function BrideInfo({
  variant,
  position = "left",
  instagramLink,
}: TBrideFrameProps & {
  position?: "left" | "right";
  instagramLink: string;
}) {
  const positionClass =
    position === "left" ? "mr-auto text-left" : "ml-auto text-right";

  return (
    <div
      data-aos={position === "left" ? "fade-right" : "fade-left"}
      data-aos-delay="500"
      data-aos-easing="ease-in-sine"
      className={`flex flex-col items-start gap-4 ${positionClass}`}
    >
      <BrideFrame variant={variant} classList={positionClass} />
      <div className="mt-2 space-y-4 text-accent">
        <h2 className="font-noto-serif-display font-semibold italic text-3xl">
          {variant === "male" ? MEMPELAI_PRIA_lengkap : MEMPELAI_WANITA_lengkap}
        </h2>
        <div className="my-4">
          <p className="text-xs">
            {variant === "male" ? "Putra" : "Putri"} dari :
          </p>
          <p>
            {`${variant === "male" ? BAPAK_MEMPELAI_PRIA : BAPAK_MEMPELAI_WANITA} & ${variant === "male" ? IBU_MEMPELAI_PRIA : IBU_MEMPELAI_WANITA}`}
          </p>
        </div>
        <Button
          asChild
          className={`${positionClass} font-noto-serif-display font-semibold italic text-lg`}
        >
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <InstagramLogoIcon className="mr-2 h-6 w-6" />
            Instagram
          </a>
        </Button>
      </div>
    </div>
  );
}
