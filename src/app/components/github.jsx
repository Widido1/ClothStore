"use client"
import { FaGithub } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"

const imageStyle = {
    borderRadius: "25%",
    width: "50px",
    height: "50px",


}

export default function Github(){
    return(
        <button className="Github rounded-md mx-auto justify-center h-[40px] w-[250px] min-[400px]:w-[300px] min-[900px]:w-[400px] ">
            <Link href="https://github.com/Widido1">
                <div className="grid grid-flow-col place-content-center place-items-center align-middle gap-2 text-2xl">
                    <div><FaGithub /></div>
                    <div>Github</div>
                    <div><FaGithub /></div>
                </div>
            </Link>
        </button>
    )

}