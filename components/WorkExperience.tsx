import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "@/components/ExperienceCard";
import exp from "constants";

type Props = {};

function WorkExperience({}: Props) {
  const experiences: Experience[] = [
    {
      id: "1",
      title: "Software Developer",
      company: "BeaconFire",
      startTime: "July 2023",
      endTime: "Current",
      summary: [
        "Built an internal tool for on-boarding with Typescript, React, Redux, Node.js, AWS S3, and MongoDB.",
        "Refactored an iOS app from UIKit to SwiftUI and integrated MVVM architecture along with Firebase, achieving a 30% improvement in performance, 50% reduction in code complexity, and a declarative syntax.",
      ],
    },
    {
      id: "2",
      title: "UX Developer",
      company: "BoardX",
      startTime: "July 2022",
      endTime: "July 2023",
      summary: [
        "Developed a secure and efficient payment process in Typescript using React, Node.js, and Stripe APIs.",
        "Used Redux to refactor state management, leading to centralized and predictable state updates, improved debugging capabilities, and enhanced scalability for larger applications with clear separation of concerns.",
        "Leveraged Jest in a Test Driven Development approach to conduct unit testing on components, resulting in more predictable code outcomes and a ∼25% reduction in debugging time during the development phase.",
        "Maintained CI/CD pipelines with GitHub Action, reducing release cycles by 39%.",
      ],
    },
    {
      id: "3",
      title: "Software Development Engineer Intern",
      company: "DTEN",
      startTime: "June 2020",
      endTime: "Aug 2020",
      summary: [
        "Developed a heuristic target generator with C++ creating possible human locations in frames for Auto-Framing testing based on research of human appearances in video calls, alleviated video data collection costs by 80%.",
        "Enhanced the Auto Framing algorithm by conducting an in-depth analysis of corner cases and integrating it with Yolo V3’s real-time object detection in OpenCV, resulting in improved performance when zooming.",
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absoute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="h-max w-full flex space-x-5 overflow-auto overflow-x-scroll xl:overflow-hidden justify-evenly p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
