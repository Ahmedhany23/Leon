"use client";
import { motion} from "framer-motion";

export default function features({list,item,FaMagic,FaRegGem,FaGlobeAsia}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={list}
      className=" xl:px-[300px] mx-auto   grid  md:grid-cols-3 gap-5 py-[60px] bg-[#f6f6f6] "
    >
      <motion.div variants={item} className="card">
        <FaMagic className=" text-[2.5em] text-[#01094a]" />
        <h1 className=" text-md font-bold text-black p-4">Tell Us Your Idea</h1>
        <p className=" font-light  text-[13px] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut lab
        </p>
      </motion.div>
      <motion.div variants={item} className="card">
        <FaRegGem className=" text-[2.5em] text-[#01094a]" />
        <h1 className=" text-md font-bold text-black p-4">
          We Will Do All The Work
        </h1>
        <p className=" font-light  text-[13px] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut lab
        </p>
      </motion.div>
      <motion.div variants={item} className="card">
        <FaGlobeAsia className="text-[2.5em] text-[#01094a]" />
        <h1 className=" text-md font-bold text-black p-4">
          Your Product is Worldwide
        </h1>
        <p className=" font-light  text-[13px] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut lab
        </p>
      </motion.div>
    </motion.div>
  );
}
