import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsArrowRightSquare } from "react-icons/bs";
import SlideUp from "./SliceUp";

const projects = [
  {
    name: "List Expenses",
    description: "Control your daily monthly expenses, with these applications you will be able to know how much you spend each month and in which services you have more consumption..",
    image: "/list-expenses.png",
    github: "https://github.com/Amauri06/List-Expenses",
    link: "https://app-lista-gastos-fe0ab.web.app",
  },
  {
    name: "Clon Amazon",
    description:
      "make your orders as if it were the amazon store online payments among others.",
    image: "/amazon.png",
    github: "https://github.com/Amauri06/clon-amazon",
    link: "https://clon-amazon.vercel.app/",
  },

  {
    name: "Task List",
    description: "manage and remember your daily tasks, you can mark as done, delete it, edit it and update it..",
    image: "/Task_list.png",
    github: "https://github.com/Amauri06/task_List",
    link: "https://task-list-silk.vercel.app/",
  },
  {
    name: "Portfolio Web",
    description: "responsive portfolio with bootstrap.",
    image: "/portafolio.png",
    github: "https://github.com/Amauri06/my_first_app_nextjs",
    link: "https://portfolio-web-kappa-ten.vercel.app",
  },
];

function ProyectsSection() {
  return (
    <section id="projects">
      <h2 className="text-center font-bold text-4xl">Projects</h2>
      <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

      <div className="flex flex-col space-y-28 ">
        {projects.map((proyect, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-2">
                <div className="md:w-1/2 mt-8">
                  <Link href={proyect.link} target="_blank">
                    <Image
                      src={proyect.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>

                <div className="md:w-1/2 mt-12">
                  <h2 className=" text-3xl font-bold mb-6 md:text-4xl">{proyect.name}</h2>
                  <p className=" text-lg md:text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {proyect.description}
                  </p>
                  <div className="flex align-bottom space-x-4">
                    <Link href={proyect.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={proyect.link} target="_blank">
                      <BsArrowRightSquare
                        size={30}
                        className="hover:translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProyectsSection;
