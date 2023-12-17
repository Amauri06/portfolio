import Link from "next/link"
import React from "react"
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,

}from "react-icons/ai"

function Footer() {
  return (
    <footer>
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
            <div className="Copyright text-neutral-500 dark:text-neutral-100">Amauri Ulloa (2023) &#169;</div>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1 dark:text-white">
               <Link href='https://www.linkedin.com/learning/?trk=trk_default_learning/' rel="noreferrer" target="_blank">
                 <AiOutlineLinkedin
                     size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                 />
               </Link>
               <Link href="https://github.com/Amauri06" rel="noreferrer" target="_blank">
                 <AiOutlineGithub
                     size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer "
                 />
               </Link>
               <Link href="mailto:ing.amaury06@gmail.com" rel="noreferrer" target="_blank">
                 <AiOutlineMail
                     size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer "
                 />
               </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer