import Image from "next/image";


const skills = [
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "JavaScript"},
    {skill: "TypeScript"},
    {skill: "C#"},
    {skill: "React"},
    {skill: "Nextjs"},
    {skill: "Vite"},
    {skill: "Bostrap"},
    {skill: "Tailwind CSS"},
    {skill: "Styled Components"},
    {skill: "Git"},
    {skill: "GitHub"},
    {skill: "Firebase"},
    
]

const AboutSection = () => {

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h2 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-center align-top space-y-10 md:p-4 md:space-y-0 md:space-x-10 md:text-left ">
          <div className="md:w-1/2 ">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
                Get to know me!
            </h2>
            <p>
              {" "}
              Hello there! My name is Amauri. I study system engineering. I consider myself a self-taught person, throughout my career. I have been able to learn knowledge focused on software engineering.
            </p>
            <br />
            <p>
             I have a wide range of hobbies and passions that keep me occupied. Anything from reading, exercising, playing video games to watching documentaries and videos related to new technologies. My days consist of me finding new experiences, keeping myself engaged and learning daily not only technology. 
            </p>
            <br />
            <p>
              That&#39;s what I strive for with great desire to grow every day in this technological world.  I&#39;m excited to seek new opportunities and see where my career takes me. 
            </p>
          </div>
          <div className="md:w-1/2  ">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
                My Skills
            </h2>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
                {skills.map((item, idx) => (
                     <p 
                      key={idx}
                      className="bg-gray-200 px-4 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill} 
                    </p>   
                ))}
            </div>
            <Image 
             src="/developer.avif" 
             alt="imag web" 
             width={230} 
             height={230}
             className="hidden md:block md:relative md:top-4 md:left-32 md:z-0 md:rounded-lg md:shadow "
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
