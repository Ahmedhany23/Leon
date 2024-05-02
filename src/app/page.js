"use client";

import {
  FaMagic,
  FaRegGem,
  FaGlobeAsia,
  FaPalette,
  FaSketch,
  FaVectorSquare,
  FaPencilRuler,
  FaYoutube,
  FaFacebook,
  FaTwitter
} from "react-icons/fa";
import Landing  from "@/components/landing/landing";
import Features from "@/components/features/features";
import Services from "@/components/services/services";
import Portfolio from "@/components/portfolio/portfolio";
import About from "@/components/About/about";
import Contact from "@/components/contact/contact.";
import Footer from "@/components/footer/footer";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
  hiddeny: { opacity: 0.3, y: -100 },
  visibley: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      <Landing list={list} item={item}/>
      <Features list={list} item={item} FaMagic={FaMagic} FaRegGem={FaRegGem} FaGlobeAsia={FaGlobeAsia}/>
      <Services  list={list} item={item} FaPalette={FaPalette} FaSketch={FaSketch} FaVectorSquare={FaVectorSquare} FaPencilRuler={FaPencilRuler}  />
      <Portfolio list={list} item={item} />
      <About />
      <Contact list={list} item={item}  FaYoutube={FaYoutube} FaFacebook={FaFacebook}  FaTwitter={FaTwitter}/>
      <Footer />
    </div>
  );
}
