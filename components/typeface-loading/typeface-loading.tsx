"use client";

type Props = {};

//import framer motion
import { motion } from "framer-motion";

export const TypefaceLoading = (props: Props) => {
  return (
    <div className="typeface-loading">
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          stiffness: 100,
          damping: 50,
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-loader-2"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </motion.svg>
    </div>
  );
};
