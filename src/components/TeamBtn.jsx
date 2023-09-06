import { motion } from "framer-motion";

export default function TeamBtn() {
  const textHoverVariants = {
    hover: {
      translateY: 0, // Keep the text in the same vertical position
      scale: 1.2, // Increase the text size to 1.2 times its original size
      ease: "easeInOut", // Easing function to use
    },
    initial: {
      translateY: 0, // Initial vertical position
      scale: 1, // Initial scale (normal size)
      ease: "easeInOut", // Easing function to use
    },
  };

  return (
    <div className="py-20 bg-black w-full flex justify-center items-center">
      <motion.button className="text-white">
        <motion.a
          href="/about"
          className="uppercase block border-b-4 md:border-b-[0.8rem] border-transparent hover:border-white border-spacing-8 text-center text-2xl lg:text-4xl font-bold "
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
