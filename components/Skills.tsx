import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./SkillCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    //
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1.5 }}
    //   className="h-screen flex relative flex-col text-center md:text-left
    //   max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    // >
    //   <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
    //     Skills
    //   </h3>

    //   <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
    //     Hover over a skill for current profieciency
    //   </h3>

    //   <div className="grid grid-cols-4 gap-5">
    //     {skillsData.map((skill) => (
    //       <SkillCard key={skill.id} skill={skill}></SkillCard>
    //     ))}
    //   </div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Profieciency aligned with visibility
      </h3>
      <div className="flex flex-col max-w-xl md:flex-row items-center md:justify-center lg:justify-between p-8 w-screen text-center">
        <Card className="w-[240px] p-4 rounded-t-3xl md:rounded-none md:rounded-l-3xl text-xl lg:text-2xl xl:text-3xl">
          <CardHeader>
            <CardTitle>Programming Languages</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p className="text-gray-100">HTML</p>
            <p className="text-gray-100">CSS</p>
            <p className="text-gray-100">Swift</p>
            <p className="text-gray-400">C++</p>
            <p className="text-gray-400">SQL</p>
            <p className="text-gray-600">Java</p>
            <p className="text-gray-600">Python</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>

        <Card className="w-[240px] p-4 rounded-b-3xl md:rounded-none md:rounded-r-3xl text-xl lg:text-2xl xl:text-3xl">
          <CardHeader>
            <CardTitle>Framework Tools</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>React</p>
            <p>Node.js</p>
            <p>Angular</p>
            <p>Next.js</p>
            <p>Git</p>
            <p>MongoDB</p>
            <p>MySql</p>
            <p>AWS</p>
            <p>New Tech</p>
            {/* <p>Kubernetes</p>
            <p>Docker</p> */}
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}

export default Skills;
