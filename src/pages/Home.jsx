import { motion } from "framer-motion";
import HomeHero from "../components/HomeHero";
import HomeInfo from "../components/HomeInfo";
import Reviews from "../components/Reviews";
import TeamBtn from "../components/TeamBtn";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="bg-Black h-screen "
      >
        <main className="bg-Black">
          <HomeHero />

          <HomeInfo />

          <TeamBtn />
          <Reviews />
        </main>
      </motion.div>
    </>
  );
}
