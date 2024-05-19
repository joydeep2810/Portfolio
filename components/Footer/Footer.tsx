import { TbBrandGithub } from "react-icons/tb"
import { FiLinkedin } from "react-icons/fi"
import { BiLogoGmail } from "react-icons/bi"
import { RiTwitterXFill } from "react-icons/ri"
import { SlSocialInstagram } from "react-icons/sl"

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-6">
      <div className="flex  gap-4">
        <a href="https://github.com/joydeep2810" target="_blank">
          <span className="w-10 h-10 text-xl bg bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/joydeep-das-929b49202/"
          target="_blank">
          <span className="w-10 h-10 text-xl bg bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FiLinkedin />
          </span>
        </a>
        <a href="https://github.com/joydeep2810" target="_blank">
          <span className="w-10 h-10 text-xl bg bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://x.com/Joydeep2810" target="_blank">
          <span className="w-10 h-10 text-xl bg bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <RiTwitterXFill />
          </span>
        </a>
        <a href="https://www.instagram.com/_.joydeep._/" target="_blank">
          <span className="w-10 h-10 text-xl bg bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
    </div>
  )
}

export default Footer
