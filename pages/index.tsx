import Navbar from "@/components/Navbar/Navbar"
import LeftSide from "@/components/Body/Leftside"
import Rightside from "@/components/Body/Rightside"
import Banner from "@/components/Body/Banner"
import { motion } from "framer-motion"
import Head from "next/head"
import About from "@/components/About/About"
import Project from "@/components/Projects/Project"
import Archive from "@/components/Projects/Archive"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Joydeep Das</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />

        {/* Sections of the body Left Center Right */}
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </motion.div>

          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
            <About />
            <Project />
            {/* <Archive /> */}
            <Contact />
            <Footer />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <Rightside></Rightside>
          </motion.div>
        </div>
      </main>
    </>
  )
}
