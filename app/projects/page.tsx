import Image from 'next/image';
import StreamrLogo from '../../public/streamr_logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCubes } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
    icon: any;
    title: string;
    subtitle: string;
    link?: string;
}

const ProjectCard = ({ icon, title, subtitle }: ProjectCardProps) => {
    return <div>
        <div className="bg-[#613d37] py-12 rounded-lg flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h5 className="font-bold mt-1">{title}</h5>
            <p>{subtitle}</p>
        </div>
    </div>
}

const Projects = () => {
    return <div className='py-10 w-1/2 mx-auto'>
        <h5 className="mb-2 font-semibold text-base">Projects</h5>
        <div className="flex flex-row gap-4">
            <div className="flex flex-col w-full">
                <ProjectCard icon={<FontAwesomeIcon className='text-stone-200' icon={faCubes} size="5x" />} title="xv6 Operating System" subtitle="Created fundamental OS components like virtual memory with paging, user-level permissions, and multi-threading support. Written in C." />
            </div>
            <div className="flex flex-col w-full">
                <ProjectCard icon={<Image alt="Streamr Logo" src={StreamrLogo} height={100} width={100} />} title="thechat.app" subtitle="During my time at Streamr, I created a chat application to demostrate Streamr's publisher/subscriber network. Now has 1700+ monthly visitors." />
            </div>
            <div className="flex flex-col w-full">
                <ProjectCard icon={<FontAwesomeIcon className='text-stone-200' icon={faCube} size="5x" />} title="Chip-8 Emulator" subtitle="Created an emulator based on the Chip-8 architecture using Python. It's able to run ROMs written in the Chip-8 ISA, including Tetris, Breakout, and Pong." />
            </div>
        </div>
    </div>
}

export default Projects