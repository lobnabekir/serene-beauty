"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";

const Treatments = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden px-4"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex  items-center justify-between ">
          {/* Texte et bouton à gauche */}
          <motion.div 
          initial={{opacity: 0 , x: -60}}
          animate={{
            opacity: 1 ,
            x: 0,
            transition: {delay: 2 , duration: 0.8 , ease: "easeInOut"}
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-start xl:max-w-[620px] text-center xl:text-left mx-auto  ">
            <h2 className="h2 mb-6 mx-auto max-w-[600px] xl:max-w-none">
              Our Luxurious Treatments
            </h2>  
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Tailored skincare solutions for a healthy complexion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] ">
                  </div>
                  <h3 className="text-xl">Classic Facial</h3>
                </div>
                  <p className="pl-6 text-[15px]">
                    Deep Cleansing, Exfoliation and Hydratation for a refreshed complexion
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] ">
                  </div>
                  <h3 className="text-xl">Chemical Peel</h3>
                </div>
                  <p className="pl-6 text-[15px]">
                    Exfoliating treatment to improve skin texture and tone
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] ">
                  </div>
                  <h3 className="text-xl">Eyebrow Waxing/Shaping</h3>
                </div>
                  <p className="pl-6 text-[15px]">
                  Precise eyebrow waxing and shaping for a polished and defined look.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] ">
                  </div>
                  <h3 className="text-xl">HydraFacial</h3>
                </div>
                  <p className="pl-6 text-[15px]">
                    Multi-step treatment for instant hydration and glow               
                    </p>
                </div>

              </div>

            <button className="btn mx-auto xl:mx-0">Discover more</button>
          </motion.div>

          {/* Image à droite */}
          <div 
          initial={{opacity: 0 , x: 60}}
          animate={{
            opacity: 1 ,
            x: 0,
            transition: {delay: 2.4 , duration: 0.8 , ease: "easeInOut"}
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="relative w-[300px] h-[400px] xl:w-[300px] xl:h-[500px] hidden xl:flex mr-10">
            <Image
              src="/assets/treatments/img.jpg"
              fill
              quality={100}
              alt="Treatment"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Treatments;