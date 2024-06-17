import { TBrideFrameProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function BrideFrame({
  variant,
  classList,
}: TBrideFrameProps & {
  classList?: string;
}) {
  return (
    <div
      className={cn(`h-auto w-max rounded-full outline outline-2`, classList)}
    >
      <div className="max-h-[220px] w-full max-w-36 overflow-hidden rounded-full border-2 border-secondary">
        <img
          src={`assets/images/bride_${variant}.jpeg`}
          className="scale-150 object-center"
          alt="bride photo"
        />
      </div>
    </div>
  );
}
