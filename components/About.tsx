import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
    max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absoute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col lg:flex-row items-center ">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://i.imgur.com/9C5cUow.jpg"
          className="mb-20 lg:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        lg:rounded-3xl lg:w-[500px] lg:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl justify-center font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base xl:text-lg">
            I am Weiqi (Dennis) Zhuang, a passionate Software Engineer with over
            2 years of experience in developing innovative web and iOS
            applications. My expertise lies in creating stable, scalable, and
            accessible software products across various platforms. Skilled in
            languages like TypeScript, JavaScript, C++, Java, and Python, and
            proficient in frameworks like React, Node.js, and AWS, I have a
            track record of delivering efficient solutions in software
            development. My experience includes roles at BeaconFire, BoardX Inc,
            and DTEN, where I have successfully led and contributed to numerous
            projects, enhancing user experiences and optimizing software
            performance. I hold a B.S. in Computer Science and Brain &
            Behavioral Science from Purdue University, underlining my commitment
            to continuous learning and professional development. My journey is
            driven by a user-focused and empathetic approach, aiming to make a
            meaningful impact through technology.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
