"use client";
import { useEffect, useRef } from "react";
import { h, j, f } from "../utils/PathPolice";
import Btn from "../components/CTAbtn";
import { gsap } from "gsap";
import SplitText from "../components/SplitText";
import Carte from "@/components/Carte";
import SecondBtn from "@/components/SecondBtn";
import Enum from "@/components/Enum";
import Tags from "@/components/Tag";
import Obj from "@/components/Obj";
import Obj01 from "@/components/Obj01";


export default function Home() {
  const bgRef = useRef(null);
  const blurCercle = useRef(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navItemsRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  // Animation
  useEffect(() => {
    //animation bg
    gsap.fromTo(
      [bgRef.current, blurCercle.current],
      { opacity: 0 }, // état initial
      { opacity: 0.3, duration: 5.5, ease: "power2.out" } // état final
    );

    //animation sous-texte
    gsap.from(".sousText", {
      y: -60,
      opacity: 0,
      filter: "blur(70px)",
      duration: 2,
      ease: "power4.out",
    });

    //animation btnCta
    gsap.from(".CTA", {
      opacity: 0,
      y: -60,
      duration: 1.8,
      ease: "power3.out",
    });

    //animation photo
    gsap.from(".tof", {
      opacity: 0,        // commence invisible
      y: 50,             // vient du bas
      scale: 0.92,        // léger zoom
      duration: 1.5,     // durée
      ease: "power3.out", // easing smooth
      delay: 0.2,        // léger délai si tu veux
    });

    //animation nav
    if (logoRef.current) {
      gsap.from(logoRef.current, { x: 5, opacity: 0, duration: 1, ease: "power3.out" });
    }

    // nav items
    if (navItemsRef.current) {
      gsap.from(navItemsRef.current.children, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    }

    // bouton
    if (btnRef.current) {
      gsap.from(btnRef.current, { x: -100, opacity: 0, duration: 1, ease: "power3.out", delay: 0.3 });
    }
  }, []);



  return (
    <div className={`text-4xl flex flex-col text-white w-full h-full bg-black`}>

      {/* heroHeader */}
      <section className="w-full h-[1000px] relative ">
        {/* <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/bgAnim01.mp4" type="video/mp4" />
        </video> */}
        <img
          ref={bgRef}
          src="/assets/bg.png"
          alt="bg"
          className="w-full h-full object-cover object-center opacity-30"
        />

        {/* Overlay dégradé */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black/40 via-transparent to-black/40 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10"></div>

        {/* Cercle avec blur */}
        <div
          ref={blurCercle}
          className="absolute top-1/2 left-1/2 bg-init w-[600px] h-[600px] rounded-full blur-[5000px]
                -translate-x-1/2 -translate-y-1/2 opacity-30 z-20"
        ></div>

        {/* content */}
        <div className="absolute flex flex-col gap-20 inset-0 flex flex-col z-50 w-full h-full  pt-8 overflow-hidden">
          <header className=" w-full h-[100px]  gap-10 flex justify-between px-10">
            <img
              ref={logoRef}
              src="/assets/logo.png"
              alt="logo"
              className="w-[200px] h-[105px] translate-x-[100px] logo"
            />
            <div>
              <ul
                ref={navItemsRef}
                className={`${h.className} flex items-center h-full gap-5 text-[20px] cursor-pointer nav`}
              >
                <li className="text-init">acceuil</li>
                <li>mon parcours</li>
                <li>nos projets</li>
                <li>club business</li>

              </ul>
            </div>
           <SecondBtn title={"feux de camps"} ref={btnRef} property="h-full flex items-center" Class="translate-x-[-170px]"/>
          </header>
          <div className="flex flex-col gap-[2px] w-full items-center">
            <span className={`${j.className} text-[170px] m-0 `}>
              <SplitText
                text="REALISONS ENSEMBLE LE"
                duration={0.9}
                delay={70}
              />
            </span>
            <span
              className={`${f.className} sousText text-[90px] text-init translate-y-[-150px]`}
            >
              RËVE AFRICAIN{" "}
            </span>

            <div className="CTA translate-y-[-133px]">
              <Btn font={h.className} style="" />
            </div>


            <div className="flex justify-center w-full relative z-[-10]">
              <img
                src="/assets/jyRigth.png"
                alt="bg"
                className="absolute left-[566px] top-[-230px] w-[620px] h-[600px] tof"
              />
              <img
                src="/assets/jyLeft.png"
                alt="bg"
                className="absolute left-[246px] top-[-190px] w-[550px] h-[550px] tof"
              />
            </div>
          </div>
        </div>
      </section>

      {/* social proof */}
      <section className="w-full h-auto flex justify-center items-center mt-20 gap-5">
        <Carte>
          <span className="text-[50px]">+10 ans</span>
          <span className="text-[23px]">
            expérience dans <span className="text-init">le business</span>
          </span>
        </Carte>

        <Carte orientation="-150deg">
          <span className="text-[50px]">+10000</span>
          <span className="text-[23px]">
            <span className="text-init">emploie</span> créer au pays
          </span>
        </Carte>

        <Carte>
          <span className="text-[50px]">+1 M</span>
          <span className="text-[23px]">
            abonnées sur <span className="text-init">les réseaux</span>
          </span>
        </Carte>
      </section>
      
      {/* who am i */}
      <section className="relative w-full h-[900px] mt-35 flex justify-center items-center" >
          <div className="flex flex-col justify-center items-center p-10 gap-10">
            <span className={`${f.className} text-[80px]`}>Qui suis-je <span className="text-init">?</span></span>
            <span className={`${h.className} text-[25px] text-sm/8`}>
              Je m&apos;appelle Jean-Yves Bragbo, multi-investisseur en Afrique. 
              <br/>Ma mission :<span className="text-init"> aider la diaspora à atteindre la liberté financière en 
              <br/>lui donnant les clés pour réussir dans le business en afrique.
              </span> 
            </span>
            <SecondBtn title="mon parcours"/>
          </div>
          
          <img src="/assets/p01.png" alt="photo" className="absolute right-50 top-40 w-[160px]" />
          <img src="/assets/p02.png" alt="photo" className="absolute right-80 bottom-40 w-[140px]" />
          <img src="/assets/p03.png" alt="photo" className="absolute left-50 bottom-70 w-[155px]" />


      </section>

      {/* target */}
      <section className="w-full h-[500px]"> 
          {/* <span className={`${f.className} text-[80px] text-center block mt-30`}>Mes  <span className="text-init">objectifs</span></span>
          <div>

          </div> */}
          {/*  <Tags title={"Accompagner"}/> */}
          {/* <Enum/> */}
          {/* <Obj/> */}
          <Obj01/>
      </section>
    </div>
  );
}
