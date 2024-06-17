import "animate.css/animate.compat.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import Content from "./components/Content";
import Preload from "./components/Preload";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <>
          {/* <Hero /> */}
          <Content />
        </>
      ) : (
        <Preload openHandler={setOpen} />
      )}
      <Toaster />
    </>
  );
}

export default App;
