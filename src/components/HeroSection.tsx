import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

  
function HeroSection() {

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center md:my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-20">
       
        <div className="bg-gradient-to-b from-teal-500 rounded-full md:mt-2 md:mr-10 h-60 w-60 md:h-80 md:w-80 ">
          <Image src="/avatar.png" width={300} height={300} alt="img profile" className="mx-auto py-6"  />
        </div>

        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I&#39;m Amauri</h1>

          <p className=" leading-8 text-gray-800 text-lg mt-4 mb-6 dark:text-neutral-100 md:text-2xl">
            <span className="font-semibold text-emerald-600">
              Developer in Software
            </span>
            ,
            {" "}
            working towards creating software that makes life easier and more
            meaningful, I learn and create every day Let&apos;s create a project
            together.
          </p>
          <Link
            href="#projects"
            className="text-neutral-100 font-sem px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <Link href="#about">
          <HiArrowDown size={35} className="animate-arrow" />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
