"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const {mouseEnterHandler , mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section 
      initial={{opacity : 0}} 
      animate={{opacity: 1 , transition: {delay : 2}}} 
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          <motion.div 
          initial={{opacity: 0 , y: -100}}
          animate={{opacity: 1 , y:0 , transition:{delay: 2 , duration: 1 , ease: "easeInOut" } , }}
          className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
          onMouseEnter={mouseEnterHandler}  
          onMouseLeave={mouseLeaveHandler}>
            <motion.h1 
            className="h1 mb-6"
            onMouseEnter={mouseEnterHandler}  
            onMouseLeave={mouseLeaveHandler}>
              Natural Beauty <br/> Starts Here 
            </motion.h1>
            <motion.p 
              className="lead max-w-xl mx-auto"
              onMouseEnter={mouseEnterHandler}  
              onMouseLeave={mouseLeaveHandler}>
                Tailored skincare solutions for a healthy complexion, offering customized care for radiant skin.
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.button 
                className="btn btn-lg" 
                onMouseEnter={mouseEnterHandler}  
                onMouseLeave={mouseLeaveHandler}>
                  Book an appointment
                </motion.button>
              <motion.div 
                onMouseEnter={mouseEnterHandler}  
                onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.div
              initial={{opacity: 0 , bottom: '-100%' }}
              animate={{opacity: 1 , bottom:0 , y:0 , transition:{delay: 2.4 , duration: 1.2 , ease: "easeInOut" } , 
              }}
              onMouseEnter={mouseEnterHandler}  
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex fixed bottom-0 ml-20"
            >
              <Image src={"/assets/home/img.png"} width={600} height={400} quality={100} alt=""/>
          </motion.div>
            </div>
          </div>
        </div>
    </motion.section>
  );
};

export default Home;