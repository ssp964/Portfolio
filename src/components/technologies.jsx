import { RiReactjsLine } from "react-icons/ri";  // React.js
import { TbBrandNextjs } from "react-icons/tb";  // Next.js
import { SiMongodb } from "react-icons/si"; // MongoDB
import { DiRedis } from "react-icons/di"; // Redis
import { FaNodeJs } from "react-icons/fa"; // Node.js
import { BiLogoPostgresql } from "react-icons/bi"; // PostgreSQL

const Technologies = () => {
    return (
        <div id="tech" className="w-full bg-black py-12">
            <h1 className="text-white text-center text-4xl my-2">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl text-white" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className="text-7xl text-red-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-500" />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 m-6">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl text-white" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className="text-7xl text-red-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-500" />
                </div>
            </div>
        </div>
    );
}

export default Technologies;
