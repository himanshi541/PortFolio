'use client';
import { cn } from "@/lib/utils";
import { rgbUnit } from "motion/react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import {Globe} from "./globe";
import GridGlobe from "./GridGlobe";
import {IoCopyOutline} from 'react-icons/io5';
import animationData from '@/data/confetti.json';
import { useState } from "react";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] md:grid-cols-3",

        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;

}) => {
  const[copied,setCopied]=useState(false);
  const handleCopy=()=>{
    navigator.clipboard.writeText('contact himanshijgoyal@gmailcom');
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "relative overflow-hidden group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        // background: "#00001a",
        // backgroundColor: "linear-gradient(90deg, rgba(0, 0, 26, 1) 0%, rgba(44, 44, 77, 1) 35%, rgba(1, 26, 74, 1) 100%)",
        background:" #000000",
        backgroundColor: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(44, 44, 77, 1) 35%, rgba(1, 1, 3, 1) 100%)",
      }}
    >
      <div className={`{$id===6 } && 'flex justify-center h-full`}>
        <div className="w-full h-full inset absolute ">
          {img &&(
            <img src={img} alt={img} className={cn(imgClassName,'object-cover','object-center','absolute','inset-0','w-full','h-full')}/>
          )}
        </div>
      
      <div className={`absolute right-0 -bottom-0 ${id===5 && 'w-full opacity-80'}`}>
        {spareImg && (
          img &&(
            <img src={spareImg} alt={spareImg} className={'object-cover,object-center w-full h-full'}/>
          )
        )}
      </div>
      {id===6 && <BackgroundGradientAnimation>
        </BackgroundGradientAnimation>}
        <div className={cn(titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 ')}>
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="lg:text-3xl max-w-96 z-10 font-sans font-bold text-lg">
          {title}
        </div>
        
          {id===2 &&   <div className="flex justify-center items-centerflex-1 w-full mt-5">
       <GridGlobe />
     </div>}
          {id===3 && (
            <div className="flex gap-1 lg-gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
            {["React.js","Next.js","TypeScript"].map
              ((item)=>(
              <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#000000]">
              {item}
              </span>
            ))}
            <span className="py-4 px-3 rounded-lg text-center bg-[#333232]"/>
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#333232]"/>
            {["Mongo DB","JAVA","C++"].map
              ((item)=>(
              <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#000000]">
              {item}
              </span>
            ))}
            </div>
            </div>
          )}
        {/* continue from here */}
        {id===6 &&(
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`}>
            <Lottie options={{loop:copied,
              autoplay:copied ,
              animationData,
              rendererSettings:{
                preserveAspectRatio:'xMidYMid slice'
              }
            }}></Lottie>
            </div>
            <MagicButton title={copied?'Email copied':'Copy my Email'}
            icon={<IoCopyOutline/>}
            position='left'
            otherClasses="!bg-[#000000]"
            handleClick={handleCopy}/>
            
            {/* 1.19 */}
          </div>
        )}

      </div>
    </div>
    </div>
  );
};
