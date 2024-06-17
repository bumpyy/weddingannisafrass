export type TWishType = {
  id: number;
  created_at: string;
  name: string;
  wish: string;
};

export type TimePropsType = {
  day: number;
  hour: number;
  min: number;
  sec: number;
};

export type TBrideFrameProps = {
  variant: "male" | "female";
};
