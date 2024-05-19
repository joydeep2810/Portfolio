import { newsclone, notionclone, paytmclone } from "@/public/assets/images"
import SectionTitle from "@/utils/SectionTitle"
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"
import Image from "next/image"

const Project = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title=" Some Things I have Built" titleNo="02" />

      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* PROJECT 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/joydeep2810/Next-App-basic"
              target="_blank">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={paytmclone}
                  alt="paytmclone"
                />
                <div className="absolute w-full h-full bg-textGreen/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Paytm Clone</h3>
              <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                repellendus in pariatur voluptate quia et reiciendis.
              </p>
              <ul className="text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Postgress</li>
                <li>Vercel</li>
                <li>NextAuth</li>
              </ul>
              <div className="text-2xl gap-4 flex">
                <a
                  href="https://github.com/joydeep2810/Next-App-basic"
                  target="_blank"
                  className="hover:text-textGreen duration-300">
                  <TbBrandGithub />
                </a>
                <a
                  href="https://github.com/joydeep2810/Next-App-basic"
                  target="_blank"
                  className="hover:text-textGreen duration-300">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/joydeep2810/Next-App-basic"
              target="_blank">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={notionclone}
                  alt="notionclone"
                />
                <div className="absolute w-full h-full bg-textGreen/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Notion Clone</h3>
              <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 xl:-mr-16 rounded-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                repellendus in pariatur voluptate quia et reiciendis.
              </p>
              <ul className="text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Postgress</li>
                <li>Vercel</li>
                <li>NextAuth</li>
              </ul>
              <div className="text-2xl gap-4 flex">
                <a
                  href="https://github.com/joydeep2810/Next-App-basic"
                  target="_blank"
                  className="hover:text-textGreen duration-300">
                  <TbBrandGithub />
                </a>
                <a
                  href="https://github.com/joydeep2810/Next-App-basic"
                  target="_blank"
                  className="hover:text-textGreen duration-300">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/joydeep2810/Next-App-basic"
              target="_blank">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={newsclone}
                  alt="newsclone"
                />
                <div className="absolute w-full h-full bg-textGreen/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">News Clone</h3>
              <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                repellendus in pariatur voluptate quia et reiciendis.
              </p>
              <ul className="text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Postgress</li>
                <li>Vercel</li>
                <li>NextAuth</li>
              </ul>
              <div className="text-2xl gap-4 flex">
                <a
                  href="https://github.com/joydeep2810/Next-App-basic"
                  target="_blank"
                  className="hover:text-textGreen duration-300">
                  <TbBrandGithub />
                </a>
                <a
                  href="https://github.com/joydeep2810/Next-App-basic"
                  target="_blank"
                  className="hover:text-textGreen duration-300">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Project
