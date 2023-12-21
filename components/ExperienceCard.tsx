import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer trnsition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
      object-center"
        src="https://uploads-ssl.webflow.com/63276f11bd112740c2d55d0b/6327afd8978cc4294e46ae61_logo.svg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">UI/UX developer</h4>
        <p className="font-bold text-2xl mt-1">BoardX.us</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.imgur.com/Fz2ySpr.png"
            alt=""
          ></img>
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.imgur.com/Fz2ySpr.png"
            alt=""
          ></img>
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.imgur.com/Fz2ySpr.png"
            alt=""
          ></img>
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
