"use client";
import Image from "next/image";
import image from "@/assests/landing/pexels-pixabay-206359.jpg";
import { motion} from "framer-motion";


export default function landing({list,item}) {
  return (
    <div className="relative">
    <Image src={image} className=" image h-lvh "></Image>
    <div className="overlay"></div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={list}
      className=" absolute text-center transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2"
    >
      <motion.h1
        variants={item}
        className=" text-2xl lg:text-4xl font-semibold text-white"
      >
        Hello There
      </motion.h1>
      <p className="text-[13px] lg:text-sm lg:px-32 text-[#cbcedf] font-normal">
        We are Leon - Super Creative & Minimal Agency Web Template
      </p>
    </motion.div>
  </div>
  )
}
