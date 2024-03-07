"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3>Programming & Web Development</h3>
          <ul className="list-disc pl-2">
            <li>Python</li>
            <li>C, C++</li>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Flask</li>
          </ul>
        </div>
        <div>
          <h3>Machine Learning</h3>
          <ul className="list-disc pl-2">
            <li>Tensorflow</li>
            <li>Pytorch</li>
            <li>Keras</li>
            <li>Deep Learning</li>
          </ul>
        </div>
        <div>
          <h3>Graphic Design</h3>
          <ul className="list-disc pl-2">
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere Pro</li>
            <li>After Effetcs</li>
            <li>Blender3D</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    ),
  },
  
  
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Department of ETE, RUET, Bangladesh, 2019-Present</li>
        <li>Graduated from Kushtia Govt. Collage, Bangladesh, 2018</li>
        <li>Graduated from Kushtia Zilla School, Bangladesh, 2016</li>
      </ul>
    ),
  },
  {
    title: "Research Field",
    id: "research",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Computer Vision</li>
        <li>Generative Advarsarial Networks</li>
        <li>Classification and Prediction</li>
        <li>Object Detection</li>
        <li>AI, XAI</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
       <li>Student, working on different projects: web development, machine learning and electronics.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hey there, I'm Saber Sakin, an Electronics and Telecommunication Engineering student at RUET, Bangladesh. I'm a tech enthusiast about programming, electronics, full-stack web development, and graphics design. Outside of academics, I enjoy gaming, watching movies, and staying updated on the latest tech trends and gadgets.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("research")}
              active={tab === "research"}
            >
              {" "}
              Research Field{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
