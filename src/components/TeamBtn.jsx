import { motion } from "framer-motion";

export default function TeamBtn() {
  const textHoverVariants = {
    hover: {
      translateY: 5, // Move the text downward slightly
      scale: 1.2, // Increase the text size to 1.5 times its original size
      ease: "easeInOut", // Easing function to use
    },
    initial: {
      translateY: 1, // Initial vertical position
      scale: 1, // Initial scale (normal size)
      ease: "easeInOut", // Easing function to use
    },
  };

  return (
    <div className="py-8 bg-black w-full flex justify-center items-center">
      <motion.button className="text-white">
        <motion.a
          href="/about"
          className="block text-center uppercase text-2xl font-bold hover:border-b-[0.8rem] p-4"
          whileHover="hover"
          initial="initial"
          variants={textHoverVariants}
        >
          Check out our team
        </motion.a>
      </motion.button>
    </div>
  );
}
