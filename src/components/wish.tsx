import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

type wishType = {
  id: number;
  created_at: string;
  name: string;
  wish: string;
};
const supabaseUrl = "https://pcnkftmvbmrfqicgxzct.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbmtmdG12Ym1yZnFpY2d4emN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NTMxNDMsImV4cCI6MjAzNDIyOTE0M30.Oipnp_Dvs2EEMFb1iIuISFWaltGTArDlAxRMt4XuIPY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Wish() {
  const [wish, setWish] = useState<wishType[] | null>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getWish();
  }, []);

  async function getWish() {
    const { data } = await supabase
      .from("wish")
      .select()
      .order("id", { ascending: false });

    setWish(data);
  }

  const schema = object({
    name: string().required("Nama perlu diisi"),
    wish: string()
      .required("Ucapan perlu diisi")
      .max(255, "Ucapan tidak boleh lebih dari 255 huruf"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { name: string; wish: string }) => {
    const { error } = await supabase
      .from("wish")
      .insert({ name: data.name, wish: data.wish });

    if (!error) {
      reset();
      getWish();
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-wish bg-cover bg-center bg-no-repeat py-8 text-center font-catchy-mager text-secondary">
      <div className="container space-y-4">
        <ScrollAnimation animateIn="tada">
          <h2 className="font-playwrite-tz font-bold text-xl">Make a Wish</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" className="my-2">
          <p>
            Suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu
            berkenan hadir dan memberikan restu kepada kami.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <form
            className="mt-2 flex flex-col gap-8 text-secondary"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                disabled={isLoading || isSubmitting}
                placeholder="Nama"
                type="text"
                {...register("name")}
                className="w-full rounded-md bg-primary px-4 py-1 placeholder:text-black placeholder:focus:text-primary"
                id="name"
              />
              <p className="ml-4 text-left text-red-500 text-lg">
                {errors.name?.message}
              </p>
            </div>
            <div className="w-full">
              <textarea
                disabled={isLoading || isSubmitting}
                {...register("wish")}
                id="email"
                className="w-full rounded-md bg-primary px-4 py-2 placeholder:text-black placeholder:focus:text-primary"
                placeholder="Ucapan"
                rows={4}
              ></textarea>{" "}
              <p className="ml-4 text-left text-red-500 text-lg">
                {errors.wish?.message}
              </p>
            </div>
            <Button
              type="submit"
              disabled={isLoading || isSubmitting}
              className="ml-auto text-secondary"
            >
              Submit
            </Button>
          </form>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <ScrollArea className="h-[35rem]">
            <div className="my-4 flex flex-col space-y-4 p-4">
              {wish?.map((data) => <Comment key={data.id} wish={data} />)}
            </div>
          </ScrollArea>
        </ScrollAnimation>

        <div className="text-secondary">
          <h2 className="text-lg">Join our wedding</h2>
          <p className="text-xl">ANNISA & FRASS</p>
        </div>
        <div>
          <AlertDialog open={submitted} onOpenChange={setSubmitted}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Ucapan Terkirim</AlertDialogTitle>
                <AlertDialogDescription>
                  Terimakasih sudah mengirim ucapanmu.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="text-lg">Ok</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}

function Comment({ wish }: { wish: wishType }) {
  return (
    <div className="w-full animate-fade rounded-lg bg-white p-4 text-left shadow-md">
      <div>
        <h3 className="font-bold">{wish.name}</h3>
        <p className="mb-2 text-gray-700 text-sm">
          {new Date(Date.parse(wish.created_at)).toLocaleDateString("id", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <p className="text-gray-700">{wish.wish}</p>
    </div>
  );
}
