import { BiRightArrowAlt } from 'react-icons/bi'

const Work = () => {
    return <div className="py-10 w-1/3 mx-auto">
        <h5 className="font-semibold text-base">Experience</h5>
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-row items-center whitespace-nowrap">
                <BiRightArrowAlt size="3em" className='mb-0.5 mr-0.5' />Apple <hr className="w-full my-auto mx-3 border-stone-300 dark:border-stone-600" />May 2023 — Aug 2023
            </div>
            <div className="w-full flex flex-row items-center whitespace-nowrap">
                <BiRightArrowAlt size="3em" className='mb-0.5 mr-0.5' /> Tesla <hr className="w-full my-auto mx-3 border-stone-300 dark:border-stone-600" />Aug 2022 — Dec 2022
            </div>
            <div className="w-full flex flex-row items-center whitespace-nowrap">
                <BiRightArrowAlt size="3em" className='mb-0.5 mr-0.5' />Apple <hr className="w-full my-auto mx-3 border-stone-300 dark:border-stone-600" />May 2022 — Aug 2022
            </div>
            <div className="w-full flex flex-row items-center whitespace-nowrap">
                <BiRightArrowAlt size='3em' className='mb-0.5 mr-0.5' />Streamr <hr className="w-full my-auto mx-3 border-stone-300 dark:border-stone-600" />May 2022 — Aug 2022
            </div>
        </div>
    </div>
}

export default Work