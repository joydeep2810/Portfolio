import ArchiveCard from "@/utils/ArchiveCard"
import { useState } from "react"

const Archive = () => {
  const [showall, setshowAll] = useState(false)
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Todo App"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, qui odio! Saepe beatae ducimus iste, sed iusto
            repudiandae!"
          techlist={["Reactjs", "Tailwind", "MongoDB"]}
          link="https://github.com/joydeep2810/Next-App-basic"
        />
        <ArchiveCard
          title="Medium Clone"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, qui odio! Saepe beatae ducimus iste, sed iusto
          repudiandae!"
          techlist={["Reactjs", "Tailwind", "MongoDB"]}
          link="https://github.com/joydeep2810/Next-App-basic"
        />
      </div>

      {/* FOR SHOW MORE BUTTON  */}
      {/* <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setshowAll(true)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
          Show All
        </button>
      </div> */}
    </div>
  )
}

export default Archive
