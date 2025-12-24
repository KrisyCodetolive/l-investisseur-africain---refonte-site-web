import { ReactNode } from "react";
import { h } from "../utils/PathPolice";

interface CarteProps {
  children?: ReactNode;
  orientation?: string;
}

function Carte({ children , orientation="150deg" }: CarteProps) {
  return (
    <div
      className={`w-[300px] h-[195px] rounded-[28px] ${h.className} flex flex-col gap-2 justify-center items-center cursor-pointer`}
      style={{
        background:
          `linear-gradient(${orientation}, rgba(38,38,38,1) 2%, rgba(253,215,75,30%) 100%)`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {children}

    </div>
  );
}

export default Carte;
