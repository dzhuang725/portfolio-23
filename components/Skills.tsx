import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./SkillCard";

type Props = {};

function Skills({}: Props) {
  const skillsData: Skill[] = [
    {
      id: "1",
      name: "TypeScript",
      imageUrl:
        "https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg",
      progress: 80,
    },
    {
      id: "2",
      name: "JavaScript",
      imageUrl: "https://i.imgur.com/Fz2ySpr.png",
      progress: 90,
    },
    {
      id: "3",
      name: "React",
      imageUrl:
        "https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg",
      progress: 80,
    },
    {
      id: "4",
      name: "JavaScript",
      imageUrl: "https://i.imgur.com/Fz2ySpr.png",
      progress: 90,
    },
    {
      id: "5",
      name: "JavaScript",
      imageUrl: "https://i.imgur.com/Fz2ySpr.png",
      progress: 90,
    },
    {
      id: "6",
      name: "JavaScript",
      imageUrl: "https://i.imgur.com/Fz2ySpr.png",
      progress: 90,
    },
    {
      id: "7",
      name: "JavaScript",
      imageUrl: "https://i.imgur.com/Fz2ySpr.png",
      progress: 90,
    },
    {
      id: "8",
      name: "JavaScript",
      imageUrl: "https://i.imgur.com/Fz2ySpr.png",
      progress: 90,
    },
    {
      id: "9",
      name: "JavaScript",
      imageUrl: "https://i.imgur.com/Fz2ySpr.png",
      progress: 90,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left
      xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill}></SkillCard>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
