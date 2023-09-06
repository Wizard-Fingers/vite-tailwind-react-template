// import Hero from "../../public/Hero.png";
//import Logo1 from "../../public/Logo1.png"; Before Version Logo
import LogoCut from "../../public/Logo1_Version_Cut.png";
export default function HomeHero() {
  return (
    <div className="max-w-md mx-auto p-4 bg-Black">
      <div className="flex justify-center flex-col bg-Black">
        <div className="flex justify-end bg-Black">
          <img
            src={LogoCut}
            alt="Logo"
            className="w-[8rem] md:w-[15rem] flex-end bg-Black"
          />
        </div>
        <div className="text-White flex flex-col bg-Black">
          <h1 className="my-2 text-right whitespace-nowrap text-5xl md:text-7xl font-semibold bg-Black">
            Bear Digital
          </h1>
          <div className="text w-2/5 md:w-3/5 self-end bg-Black">
            <h1 className="text-left text-2xl md:text-4xl py-4 font-semibold bg-Black">
              studios
            </h1>
            <div className="border-t border-4 md:border-8 border-White bg-Black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
