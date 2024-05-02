"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assests/logo.png";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const item = {
  visible: { x: 0 },
  hidden: { x: -100 },
}

export default function navbar() {
  const [opened, setopened] = useState(false)
  return (
    <header className="  p-3 bg-[#090b18] z-4">
      <motion.div 
       initial="hidden"
    animate="visible"
    variants={list}
      className=" 2xl:px-72 xl:px-60 md:px-0 flex justify-between items-center transation">
      <motion.div variants={item}>
         <Image
          width={60}
          height={60}
          className="hue-rotate-60"
          src={logo}
          alt=""
        />
      </motion.div>
       
        <div  className="relative">
          <span  onClick={()=>setopened((state)=>!state)} className=" group cursor-pointer w-[30px] flex flex-wrap justify-end ">
            <span className="bg-[#9a9a9b] mb-1 h-[2px] w-full"></span>
            <span className="bg-[#9a9a9b] mb-1 h-[2px] w-[60%] group-hover:w-full transition-all duration-500"></span>
            <span className="bg-[#9a9a9b] mb-1 h-[2px] w-full "></span>
          </span>
          <ul className={` ${opened? "" : "hidden"} links bg-[#f6f6f6] absolute p-0 m-0 right-0 min-w-[200px] top-[30px]  z-10 `}>
            <li >
              <a  href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
}
