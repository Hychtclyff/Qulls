import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Sparkle {
  id: number;
  top: string;
  left: string;
  opacity: number;
  scale: number[];
  duration: number;
}

export const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]); // Explicitly define type as Sparkle[]

  useEffect(() => {
    const generateSparkles = () => {
      const sparklesArray: Sparkle[] = [...Array(12)].map((_, i) => ({
        id: i,
        top: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
        left: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
        opacity: Math.random(),
        scale: [1, 1.2, 0],
        duration: Math.random() * 2 + 4,
      }));
      setSparkles(sparklesArray);
    };

    generateSparkles();
  }, []); // Runs only on mount

  return (
    <div className="absolute inset-0">
      {sparkles.map((sparkle) => (
        <motion.span
          key={`star-${sparkle.id}`}
          animate={{
            top: sparkle.top,
            left: sparkle.left,
            opacity: sparkle.opacity,
            scale: sparkle.scale,
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: sparkle.top,
            left: sparkle.left,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
};

export const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
      `,
        className
      )}
    >
      {children}
    </div>
  );
};
