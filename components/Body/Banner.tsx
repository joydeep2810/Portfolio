import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen">
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
        Joydeep Das.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="text-base md:max-w-[650px] text-textDark font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam
        illo, accusamus omnis, aut, eius necessitatibus voluptatibus quae libero
        iure deleniti fugiat asperiores quibusdam quis suscipit nihil magnam a
        magni!{" "}
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="w-52 h-14 text-md font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
        Contact Me
      </motion.button>
    </section>
  )
}

export default Banner
