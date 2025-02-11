import Github from "../components/github";
import Linkedin from "../components/linkedin";
import Link from "next/link";

export default function About(){
    return(
        <div className="grid h-full min-[340px]:h-screen bg-black bg-opacity-70">
            <div>
                <h1 className="theme3 Shine m-2 w-full text-center font-bold text-5xl min-[400px]:text-7xl min[640px]:text-8xl min-[900px]:text-9xl"><Link href="/">CozyBoys</Link></h1>
            </div>
            
            <div className="grid items-stretch">
                <p className="text-center text-orange-300 w-3/4 mx-auto text-md min-[400px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl m-4">
                    We are CozyBoys, the best fictional cloth shop, we are a coding proyect, all our products are fake and our images
                    are collected from pinterest because we lack of a real cloth database or images, my objective with this farse was to practice Next.js 
                    and the use of Prisma database for the creation of a web store, i really like to design web pages and i believe that this was a good
                    idea for upgrading my skills in this regard.<br/><br/>

                    My name is Santiago Gonzalez webcoder and a great fictional cloth seller, i begun to learn to code in 2023 and i am happy with my progress
                    and eager to learn more, if you want to contact with me, here is my info: 
                </p>
                <div className="flex flex-row rounded-md max-[630px]:flex-col max-[630px]:gap-4">
                    <Github />
                    <Linkedin/>
                </div>
            </div>

        </div>
    );
}