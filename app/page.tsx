"use client";
import { useEffect, useRef } from "react";
import { h, j, f } from "../utils/PathPolice";
import Btn from "../components/CTAbtn";
import { gsap } from "gsap";
import SplitText from "../components/SplitText";

export default function Home() {
  const bgRef = useRef(null);
  const blurCercle = useRef(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const navItemsRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);


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
      y:-60,
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
            <div className="h-full  flex items-center">
              <div
              ref={btnRef}
                className="flex text-[16px] translate-x-[-170px] gap-2 items-center ${h} h-14 p-3  rounded-[55px] cursor-pointer btn"
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
      {/* <Btn font={h.className} /> */}
    </div>
  );
}
