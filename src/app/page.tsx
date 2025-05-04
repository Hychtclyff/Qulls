"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { animate } from "motion/react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardSkeletonContainer,
  CardTitle,
  Container,
  Sparkles,
} from "@/components/CardGrid";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarqueeElement from "@/components/ui/MarqueeElement";
import SkillCard from "@/components/SkillCard";
import { STACKS } from "../../common/constants/stacks";

export default function Home() {
  return (
    <Tabs defaultValue="about" className="">
      <div className="px-5 grid grid-cols-8 grid-rows-8 gap-2 p-4 h-[90vh] ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-xl col-span-2 row-span-6 overflow-hidden "
        >
          <BackgroundBeamsWithCollision>
            <GridProfile />
          </BackgroundBeamsWithCollision>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className=" rounded-xl col-span-4 row-span-6  overflow-hidden"
        >
          <TabsContent className="h-full w-full" value="about">
            <About />
          </TabsContent>
          <TabsContent value="education">
            Change your password here.
          </TabsContent>
          <TabsContent value="career">Change your password here.</TabsContent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-cyan-300 rounded-xl col-span-2 row-span-4 flex items-center justify-center"
        >
          2/3
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-cyan-300 rounded-xl col-span-2 row-span-2 flex items-center justify-center"
        >
          1/3
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-pink-100 rounded-xl col-span-4 row-span-2 flex items-center justify-center"
        >
          1/3
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-pink-100 rounded-xl col-span-4 row-span-2 flex items-center justify-center"
        >
          1/3
        </motion.div>
      </div>
    </Tabs>
  );
}

const GridProfile = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <Card className="h-full flex flex-col gap-2 ">
      <CardSkeletonContainer>
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
          <div className="flex flex-row shrink-0 justify-center items-center gap-2">
            <Container className="w-56 h-56 rounded-full overflow-hidden">
              <Image
                src="/img/pp.JPG"
                width={224}
                height={224}
                alt="Profile Picture"
                className="object-cover w-full h-full"
              />
            </Container>
          </div>

          <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
            <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
              <Sparkles />
            </div>
          </div>
        </div>
      </CardSkeletonContainer>
      <CardTitle>
        <h3>Yudriqul Aulia</h3>
        <span className="text-sm font-light">
          Mahasiswa || Fullstack Web Dev 🚀
        </span>
      </CardTitle>
      <CardDescription className="flex flex-col gap-3">
        <div className="status">
          <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Open To Work.
            </span>
          </button>
        </div>
        <TabsList className="navigation flex flex-wrap gap-2">
          <TabsTrigger
            value="about"
            className="shadow-[inset_0_0_0_1px_#616467]  text-black px-3 py-1 rounded-xl tracking-widest uppercase font-light bg-transparent data-[state=active]:bg-[#616467] hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            About
          </TabsTrigger>

          <TabsTrigger
            value="education"
            className="shadow-[inset_0_0_0_1px_#616467]  text-black px-3 py-1 rounded-xl tracking-widest uppercase font-light bg-transparent data-[state=active]:bg-[#616467] hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="career"
            className="shadow-[inset_0_0_0_1px_#616467]  text-black px-3 py-1 rounded-xl tracking-widest uppercase font-light bg-transparent data-[state=active]:bg-[#616467] hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            Career
          </TabsTrigger>
        </TabsList>
      </CardDescription>
    </Card>
  );
};

const About = () => {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS
  ).sort(() => Math.random() - 0.5);
  return (
    <Card className="h-full w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Muncul dari bawah dengan transparansi
        animate={{ opacity: 1, y: 0 }} // Ke posisi normal
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CardDescription className="text-justify py-2 indent-8 ">
          <div className="about">
            <div className="text-xl border-0 border-b-2 border-dashed border-t-black pb-2">
              <h3>About Me</h3>
            </div>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              assumenda labore iure molestias praesentium neque error esse ut
              consectetur eum distinctio mollitia quam nobis ea explicabo
              beatae, illum rem ab dolores aut quis itaque? Magnam fugiat libero
              numquam in molestiae dolore necessitatibus minus. Illum earum
              reiciendis sed deleniti. Itaque, unde. Nemo aut nam ab ullam
              temporibus maxime repellat enim tempora porro nostrum. Laborum,
              quos reprehenderit eos veritatis voluptates eaque tenetur,
              necessitatibus cupiditate quo quae quasi? Doloremque aliquam eius
              dolor delectus inventore omnis voluptatem nesciunt maxime modi
              ullam dolorum aperiam laborum eligendi earum tenetur beatae sequi
              illo possimus ipsum, voluptas doloribus?
            </p>
          </div>
          <div className="skills flex flex-col gap-2">
            <div className="text-xl border-0 border-b-2 border-dashed border-t-black pb-2">
              <h3>Skills</h3>
            </div>
            <div className="flex flex-col  overflow-x-hidden">
              {Array.from({ length: 2 }, (_, index) => {
                const slider = [...stacksInArray].sort(
                  () => Math.random() - 0.5
                );
                return (
                  <MarqueeElement
                    key={index}
                    direction={index % 2 !== 0 ? "left" : "right"}
                  >
                    {slider.map(([name, icon], index) => (
                      <SkillCard key={index} name={name} icon={icon} />
                    ))}
                  </MarqueeElement>
                );
              })}
            </div>
          </div>
        </CardDescription>
      </motion.div>
    </Card>
  );
};
