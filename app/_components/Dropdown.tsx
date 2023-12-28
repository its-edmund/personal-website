"use client"
import clsx from "clsx";
import { useState } from "react"
import { BiRightArrowAlt } from "react-icons/bi"

interface Props {
    description?: string
}

const Dropdown = ({ description }: Props) => {
    const [open, setOpen] = useState(false);

    return <div className="w-full flex flex-row items-center whitespace-nowrap hover:bg-stone-400 hover:text-stone-200 px-4 rounded-lg transition-colors group" onClick={() => setOpen(!open)}>
        <BiRightArrowAlt size="3em" className={clsx('mb-0.5 mr-0.5 -ml-1.5 transition-transform', { 'rotate-90': open })} />Apple <hr className={"w-full my-auto mx-3 border-stone-300 dark:border-stone-600 group-hover:border-stone-300 transition-colors"} />May 2023 — Aug 2023
        {open &&
            <div>{description}</div>
        }
    </div>
}

export default Dropdown
