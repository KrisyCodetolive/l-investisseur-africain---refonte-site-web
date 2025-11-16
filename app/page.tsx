"use client";
import { h , j , f} from "../utils/PathPolice";
import Btn from '../components/CTAbtn'
import SplitText from "../components/SplitText";



export default function Home() {
  return (
    <div className={`text-4xl flex flex-col text-white w-full h-full bg-black`}>
      {/* heroHeader */}
      <section className="w-full h-[1000px] relative">
        {/* <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/bg.png" type="video/mp4" />
        </video> */}
        <img src="/assets/bg.png" alt="bg" className="w-full h-full" />

        {/* Overlay dégradé */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black/40 via-transparent to-black/40 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10"></div>

        {/* Cercle avec blur */}
        {/* Cercle centré avec blur */}
        {/* Cercle centré avec blur et opacité réduite */}
        <div
          className="absolute top-1/2 left-1/2 bg-init w-[600px] h-[600px] rounded-full blur-[5000px]
                -translate-x-1/2 -translate-y-1/2 opacity-30 z-20"
        ></div>
        {/* content */}
        <div className="absolute flex flex-col gap-20 inset-0 flex flex-col z-50 w-full h-full  pt-8">
          <header className=" w-full h-[100px] gap-10 flex justify-between px-10">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-[200px] h-[105px] translate-x-[100px]"
            />
            <div>
              <ul
                className={`${h.className} flex items-center h-full gap-5 text-[20px] cursor-pointer`}
              >
                <li className="text-init">acceuil</li>
                <li>mon parcours</li>
                <li>nos projets</li>
                <li>club business</li>
              </ul>
            </div>
            <div className="h-full  flex items-center">
              <div
                className="flex text-[16px] translate-x-[-170px] gap-2 items-center ${h} h-14 p-3  rounded-[55px] cursor-pointer"
                style={{
                  background:
                    "linear-gradient(-17deg , rgba(44,44,44,100%) 0% , rgba(254,200,2,30%) 100% )",
                }}
              >
                <img src="/assets/icone.png" alt="icone" className="w-[20px]" />
                feux de camp
              </div>
            </div>
          </header>
          <div className="flex flex-col gap-[2px] w-full items-center">
            <span className={`${j.className} text-[170px] m-0 `}>
              <SplitText text="REALISONS ENSEMBLE LE" duration={0.9} delay={70}/>
            </span>
            <span className={`${f.className} text-[90px] text-init translate-y-[-150px]`}>RËVE AFRICAIN </span>
            <Btn font={h.className} style="translate-y-[-115px]" />

            <div className="flex justify-center w-full relative z-[-10]">
               <img src="/assets/jyRigth.png" alt="bg" className="absolute left-[570px] top-[-270px] w-[595px] h-[565px]"  />
               <img src="/assets/jyLeft.png" alt="bg" className="absolute left-[255px] top-[-250px] w-[550px] h-[550px]"/>
               
            </div>
          </div>
           
        </div>
      </section>
      {/* <Btn font={h.className} /> */}
    </div>
  );
}


