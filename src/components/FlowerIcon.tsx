import { cn } from "@/lib/utils";

export default function FlowerIcon({
  className = "top-0 right-0",
}: {
  className?: string;
}) {
  return (
    <img
      className={cn(`absolute z-0 size-20`, className)}
      draggable={false}
      src="assets/images/flower.png"
      alt=""
    />
  );
}
