"use client";
import service from "@/assests/services/services.jpg";
import { motion} from "framer-motion";
import Image from "next/image";

export default function services({list,item,FaPalette,FaPencilRuler,FaVectorSquare,FaSketch}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={list}
      className="services py-[60px] px-[15px] mx-auto  flex flex-col justify-center items-center "
    >
      <h2 className="special-heading ">Services</h2>
      <p className="text-[#797979] text-[20px] justify-center items-center mt-[-30px] lg:mt-[-50px]">
        Don't be busy, be productive
      </p>
      <motion.div
        initial="hiddeny"
        whileInView="visibley"
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="services-content  grid grid-cols-layout gap-8 pt-20 "
      >
        <div className="col">
          <div className="srv">
            <div>
              <FaPalette className="icon" />
            </div>

            <div className="text">
              <h3 className="text-[1.17em] font-bold mb-[20px]">
                Graphic Design
              </h3>
              <p className="text-[#444] font-light  leading-7">
                Graphic design is the process of visual communication and
                problem-solving using one or more of typography, photography and
                illustration.
              </p>
            </div>
          </div>
          <div className="srv">
            <div>
              <FaSketch className="icon" />
            </div>

            <div className="text">
              <h3 className="text-[1.17em] font-bold mb-[20px]">UI & UX</h3>
              <p className="text-[#444] font-light  leading-7">
                Process of enhancing user satisfaction with a product by
                improving the usability, accessibility, and pleasure provided in
                the interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="srv">
            <div>
              <FaVectorSquare className="icon" />
            </div>

            <div className="text">
              <h3 className="text-[1.17em] font-bold mb-[20px]">Web Design</h3>
              <p className="text-[#444] font-light  leading-7">
                Web design encompasses many different skills and disciplines in
                the production and maintenance of websites.
              </p>
            </div>
          </div>
          <div className="srv">
            <div>
              <FaPencilRuler className="icon" />
            </div>

            <div className="text">
              <h3 className="text-[1.17em] font-bold mb-[20px]">
                Web Development
              </h3>
              <p className="text-[#444] font-light  leading-7">
                Web development is a broad term for the work involved in
                developing a web site for the Internet or an intranet.
              </p>
            </div>
          </div>
        </div>
        <div className="col hidden mdl:block">
          <div className="image">
            <Image src={service} className="w-[290px] h-[370px] " />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
