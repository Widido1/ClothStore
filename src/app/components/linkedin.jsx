"use client"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";

const imageStyle = {
    borderRadius: "100%",
    width: "50px",
    height: "50px",
    border: "1px solid #007396" ,  

}

export default function Linkedin(){
    return(
        <button className="LinkedIn rounded-md mx-auto justify-center h-[40px] w-[250px] min-[400px]:w-[300px] min-[900px]:w-[400px]">
            <Link href="https://www.linkedin.com/in/santiago-gonzalez-32434b218/">
                 <div className="grid grid-flow-col place-content-center place-items-center align-middle gap-2 text-2xl">
                    <div><FaLinkedin /></div>
                    <div>LinkedIn</div>
                    <div><FaLinkedin /></div>
                </div>
            </Link>
        </button>
    )

}