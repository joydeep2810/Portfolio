import { motion } from "framer-motion"
import SectionTitle from "@/utils/SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
import Image from "next/image"
import { profile } from "@/public/assets/images"

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title="About Me" titleNo="01" />

      {/* LEFT SIDE */}
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            fugit sed earum labore dignissimos expedita quos quae atque itaque
            quasi vero, temporibus quo eum, natus optio? Dicta ducimus minima
            eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
            facilis{" "}
            <span className="text-textGreen">doloribus placeat aliquam</span>{" "}
            eum eos doloremque ad cupiditate facere.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            eius autem adipisci quos minima dicta reiciendis{" "}
            <span className="text-textGreen">doloribus placeat aliquam</span>{" "}
            earum enim, sint fugit!
          </p>
          <p>Here are some technologies I have been working on recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              NextJS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Prisma
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profile}
                alt="profile"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-full border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  )
}

export default About
