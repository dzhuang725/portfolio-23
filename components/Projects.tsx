import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: "1",
      name: "Purdue Farmers' Market iOS App",
      detail:
        "An iOS App for Purdue Farmers' Market. Started during pandemic where beloved Farmers' Market was cancelled in person. The app shows Farmers and their products so Customer knows what's on the market.",
      imageUrl: "https://i.imgur.com/XOayjy8.jpg",
    },
    {
      id: "2",
      name: "Purdue Farmers' Market Website Design",
      detail: "",
      imageUrl: "",
    },
    {
      id: "3",
      name: "Coding Website",
      detail: "",
      imageUrl: "",
    },
    {
      id: "4",
      name: "Machine Learning Model",
      detail: "",
      imageUrl: "",
    },
    {
      id: "5",
      name: "Place holder",
      detail: "",
      imageUrl: "",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-max"
            key={project.id}
          >
            {/* <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.imageUrl}
              alt=""
              className="h-max w-max "
            /> */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}
                </span>{" "}
                : {"\n"} {project.name}
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
