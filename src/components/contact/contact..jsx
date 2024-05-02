"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function contact({
  list,
  item,
  FaYoutube,
  FaFacebook,
  FaTwitter,
}) {
  return (
    <div className="services py-[60px] px-[15px] mx-auto  flex flex-col justify-center items-center bg-[#f6f6f6] ">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={item}
        className="special-heading"
      >
        Contact
      </motion.h2>
      <motion.p
        initial="hiddeny"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={item}
        className="text-[#797979] text-[20px] justify-center items-center mt-[-30px] lg:mt-[-50px]"
      >
        We are born to create
      </motion.p>
      <div className="info mt-[20px] flex flex-col  gap-2 place-content-center items-center ">
        <p className=" text-[25px] mdl:text-[35px] font-[800] text-[#53566d] leading-[-2px] ">
          Feel free to drop us a line at:
        </p>
        <a
          href="mailto:leonagency@mail.com?subject=Contact"
          className="block text-[25px] mdl:text-[35px] font-[800] text-[#01094a] "
        >
          leonagency@mail.com
        </a>
        <div className="flex justify-center mt-[10px] text-[16px] gap-2 text-center place-content-center items-center cursor-pointer ">
          Find Us On Social Networks
          <FaYoutube className="text-[19px] text-[#53566d] font-bold cursor-pointer" />
          <FaFacebook className="text-[19px] text-[#53566d] font-bold cursor-pointer" />
          <FaTwitter className="text-[19px] text-[#53566d] font-bold cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
