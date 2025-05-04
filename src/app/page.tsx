"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { animate } from "motion/react";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
  Container,
  Sparkles,
} from "@/components/CardGrid";

export default function Home() {
  return (
    <div className="px-5 grid grid-cols-8 grid-rows-8 gap-2 p-4 h-[90vh] text-center text-black font-bold text-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" rounded-xl col-span-2 row-span-6 "
      >
        <GridProfile />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-pink-300 rounded-xl col-span-4 row-span-6 flex items-center justify-center"
      >
        2/3
        <br />2
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-cyan-300 rounded-xl col-span-2 row-span-4 flex items-center justify-center"
      >
        2/3
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-cyan-300 rounded-xl col-span-2 row-span-2 flex items-center justify-center"
      >
        1/3
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-pink-100 rounded-xl col-span-4 row-span-2 flex items-center justify-center"
      >
        1/3
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-pink-100 rounded-xl col-span-4 row-span-2 flex items-center justify-center"
      >
        1/3
      </motion.div>
    </div>
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
    <Card className="h-full">
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
      <CardDescription className="flex "></CardDescription>
    </Card>
  );
};
