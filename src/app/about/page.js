import Github from "../components/github";
import Linkedin from "../components/linkedin";
import Link from "next/link";

export default function About(){
    return(
        <div className="grid h-screen">
            <div>
                <h1 className="theme2 block text-center font-bold text-7xl sm:text-8xl lg:text-9xl"><Link href="/">CozyBoys</Link></h1>
            </div>
            
            <div className="grid items-stretch">
                <p className="theme3 text-center w-3/4 mx-auto text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                    We are CozyBoys, the best fictional cloth market, we born as a mean of a coding proyect, all our products are fake and our images
                    are collected from pinterest because we lack of a real cloth database or images, my objective with this farse was to practice Next.js 
                    and the use of Prisma database for the creation of a web store, i really like to design web pages and i believe that this was a good
                    idea for upgrading my skills in this regard.<br/><br/>

                    My name is Santiago Gonzalez web coder and a great fictional cloth seller, i begin to learn coding in 2023 and i am happy with my progress
                    and eager to learn more, if you want to contact me, here is my info: 
                </p>
                <div className="flex rounded-md">
                    <Github />
                    <Linkedin/>
                </div>
            </div>

        </div>
    );
}