"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center justify-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-10">
        <div className="flex flex-col gap-12 xl:flex-row items-center justify-center">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col justify-center text-center xl:text-left"
          >
            <h3 className="h3 mb-8">Contact info</h3>
            {/* items */}
            <div className="flex flex-col items-center xl:items-start gap-8">
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h5 className="h4">Address</h5>
                  <p>
                    123/45 Elm St, Suite 800
                    <br />
                    Los Angeles, CA 90012
                  </p>
                </div>
              </div>
              {/* end item */}
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/phone.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h5 className="h4">Phone number</h5>
                  <div className="pt-1 flex-1">
                    <p>Phone: (+126) 54 921 910</p>
                    <p>Fax: (+126) 50 921 910</p>
                  </div>
                </div>
              </div>
              {/* end item */}
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/email.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h5 className="h4">Email address</h5>
                  <div className="flex flex-col">
                    <p>Serene@gmail.com</p>
                    <p>Support@gmail.com</p>
                  </div>
                </div>
              </div>
              {/* end item */}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="bg-[#f0cfbc] w-[450px] max-w-[480px] gap-4 pt-4 pb-4 pl-6 pr-6">
              <h3 className="h3 mb-4 text-center">Get in touch</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
