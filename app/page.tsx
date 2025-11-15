"use client"

import GlareHover from '@/components/GlareHover';
import { h } from '../utils/PathPolice';

type BtnPros = {
  font: string;
};

export default function Home() {
  return (
    <div className={`${h.className} text-4xl flex justify-center items-center text-white w-full h-full bg-black`} >


      <GlareHover 
        className={`${h} px-[30px] py-2.5 text-[25px] bg-init rounded-full  
                  duration-300 ease-in cursor-pointer 
                  hover:translate-y-[-5px]`}
      style={{
        boxShadow: "-11px 20px 101.09px rgba(255,230,136,0.67)",
        borderRadius:"55px",
        border: "3px dashed #ECDFAE",
      }}

      background='init'
      width='185px'
      height='60px'
      >
        rejoins-nous
      </GlareHover>
        {/* <Btn font={h.className} /> */}

      
      
    </div>
  );
}

function Btn({ font }: BtnPros) {
  return (
    <div
      className={`${font} px-[30px] py-2.5 text-[25px] bg-init rounded-full 
                  duration-300 ease-in cursor-pointer border-[3px] border-dashed border-[#ECDFAE]
                  hover:translate-y-[-5px]`}
      style={{
        boxShadow: "-11px 20px 101.09px rgba(255,230,136,0.67)"
      }}
    >
      rejoins-nous
    </div>
  );
}

