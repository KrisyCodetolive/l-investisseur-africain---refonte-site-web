import GlareHover from "./GlareHover";

type BtnPros = {
  font: string;
  style:string;
};


export default function Btn({ font , style }: BtnPros) {
  return (
    <GlareHover
      className={`${font} ${style}px-[30px] py-2.5 text-[25px] bg-init rounded-full  
                  duration-300 ease-in cursor-pointer opacity-100
                  `}
      style={{
        boxShadow: "-11px 20px 101.09px rgba(255,230,136,0.67)",
        borderRadius: "55px",
        border: "3px dashed #ECDFAE",
      }}
      background="init"
      width="185px"
      height="60px"
    >
      rejoins-nous
    </GlareHover>
  );
}