import { TbBrandGithub } from "react-icons/tb"
import { FiLinkedin } from "react-icons/fi"
import { BiLogoGmail } from "react-icons/bi"
import { RiTwitterXFill } from "react-icons/ri"
import { SlSocialInstagram } from "react-icons/sl"

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
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
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide
