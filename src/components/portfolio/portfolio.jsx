"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import portfolio1 from "@/assests/portfollio/portfolio-1.jpg";
import portfolio2 from "@/assests/portfollio/portfolio-2.jpg";
import portfolio3 from "@/assests/portfollio/portfolio-3.jpg";

export default function portfolio({list,item}) {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={list}
        className="services py-[60px] px-[15px] mx-auto  flex flex-col justify-center items-center bg-[#f6f6f6] "
      >
        <h2 className="special-heading">Portfolio</h2>
        <p className="text-[#797979] text-[20px] justify-center items-center mt-[-30px] lg:mt-[-50px]">
          If you do it right, it will last forever.
        </p>

        <motion.div
          initial="hiddeny"
          whileInView="visibley"
          transition={{ type: "spring", stiffness: 100 }}
          variants={item}
          className="portfolio-content   xl:px-[100px] mx-auto   grid  md:grid-cols-3  py-[60px] "
        >
          <div className="cards">
            <Image
              className="imagee"
              src={portfolio1}
              width={1000}
              height={240}
              alt=""
            />
            <div className="info">
              <h3 className="m-0 text-[1.16em] font-bold">Project Here</h3>
              <p className="pt-2 text-[1em] text-[#777]">
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
          <div className="cards">
            <Image
              className="imagee"
              src={portfolio2}
              width={1000}
              height={240}
              alt=""
            />
            <div className="info">
              <h3 className="m-0 text-[1.16em] font-bold">Project Here</h3>
              <p className="pt-2 text-[1em] text-[#777]">
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
          <div className="cards">
            <Image
              className="imagee"
              src={portfolio3}
              width={1000}
              height={240}
              alt=""
            />
            <div className="info">
              <h3 className="m-0 text-[1.16em] font-bold">Project Here</h3>
              <p className="pt-2 text-[1em] text-[#777]">
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
  )
}
