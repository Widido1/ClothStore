"use client"
import Image from "next/image"
import Link from "next/link"

const imageStyle = {
    borderRadius: "100%",
    width: "50px",
    height: "50px",
    border: "1px solid #007396" ,

}

export default function Linkedin(){
    return(
        <button className="rounded-md mx-auto justify-center border-l-white">
            <Link href="https://www.linkedin.com/in/santiago-gonzalez-32434b218/">
                <div className="grid grid-cols-6 container rounded-md bg-sky-700 text-white">
                    <div className="col-span-1 justify-center">
                        <Image
                            src={"https://i.pinimg.com/564x/b0/28/c2/b028c2e59043116dfc0da6ec6fd26d70.jpg"}
                            alt={"Github image"}
                            width={50}
                            height={50}
                            style={imageStyle}
                        />
                    </div>
                    <h1 className="col-span-4 bg-sky-700 text-white text-center align-middle content-center text-3xl rounded-md">Linkedin</h1>
                    <div className="col-span-1 justify-center">
                        <Image
                            src={"https://i.pinimg.com/564x/b0/28/c2/b028c2e59043116dfc0da6ec6fd26d70.jpg"}
                            alt={"Github image"}
                            width={50}
                            height={50}
                            style={imageStyle}
                        />
                    </div>
                </div>

            </Link>
        </button>
    )

}