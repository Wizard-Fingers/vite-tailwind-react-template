import { motion } from "framer-motion";
import HomeHero from "../components/HomeHero";
import HomeInfo from "../components/HomeInfo";
import TeamBtn from "../components/TeamBtn";
import Reviews from "../components/Reviews";
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
        <main>
          <HomeHero />
          <HomeInfo />
          <div className="p-8 pb-14 bg-Black">
            <TeamBtn />
          </div>
          <Reviews />
        </main>
      </motion.div>
    </>
  );
}
