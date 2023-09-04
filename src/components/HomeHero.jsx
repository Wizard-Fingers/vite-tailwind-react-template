// import Hero from "../../public/Hero.png";
import Logo1 from "../../public/Logo1.png";
export default function HomeHero() {
  return (
    <div className="flex justify-center bg-Black">
      <div className="flex-col">
        <div className="flex justify-end">
          <img
            src={Logo1}
            alt="Logo"
            className="-mt-[1rem] w-[20rem] md:w-[30rem] flex-end"
          />
        </div>
        <div className="text-White">
          <h1 className="w-full">
            <span className="text-[7rem] font-bold translate-">
              Bear Digital
            </span>
            <br />
            <span className="text-end"> Studios</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
