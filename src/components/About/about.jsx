import { motion } from "framer-motion";
import Image from "next/image";

const animatie = {
  abouth: { y: -100, opacity: 0 },
  aboutv: { y: 0, opacity: 1 },
  imageh: { x: -100, opacity: 0 },
  imagev: { x: 0, opacity: 1 },
  parah: { x: 100, opacity: 0 },
  parav: { x: 0, opacity: 1 },
};

export default function about() {
  return (
    <header className="w-full px-4 mx-auto sm:w-[750px] md:w-[970px] mdl:w-[1170px]  pt-[60px] pb-[150px] overflow-hidden">
      <div className="container ">
        <div className="mx-auto  flex flex-col  items-center">
          <motion.h2
            initial="abouth"
            whileInView="aboutv"
            variants={animatie}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="special-heading "
          >
            About
          </motion.h2>
          <p className="text-[#797979] text-[20px] justify-center items-center mt-[-30px] lg:mt-[-50px] ">
            Less is more work
          </p>
        </div>

        <div className="about-content  flex flex-col lg:flex-row  justify-center items-center  lg:justify-between  pt-[60px]">
          <motion.div
            initial="imageh"
            whileInView="imagev"
            variants={animatie}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="image1 max-w-full relative before:hidden after:hidden lg:before:block lg:after:block  "
          >
            <Image
              class=" pb-5 w-[250px] h-[375px]"
              width={300}
              height={300}
              src="https://64.media.tumblr.com/d1c4df8bacf0525243c241bd53d0b46a/tumblr_n4w85syp811s559q7o2_500.gifv"
              unoptimized={true}
              alt=""
            />
          </motion.div>

          <motion.div
            initial="parah"
            whileInView="parav"
            variants={animatie}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className=" max-w-[640px] flex flex-col text-center items-center "
          >
            <p className="font-[500] text-md leading-8 mb-[50px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nemo neque voluptate tempora velit cum non, fuga vitae architecto
              delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi
              iusto laudantium!
            </p>
            <hr className="w-[50%] border-[1px] inline-block border-[#53566d]  font-bold" />
            <p className="text-[#777] text-md leading-8 mt-[50px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
              officiis dolorum hic voluptate quaerat minima, similique inventore
              esse, alias, sed quo officia?
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
