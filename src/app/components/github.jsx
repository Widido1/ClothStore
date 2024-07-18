"use client"
import Image from "next/image"
import Link from "next/link"

const imageStyle = {
    borderRadius: "25%",
    width: "50px",
    height: "50px",


}

export default function Github(){
    return(
        <button className="rounded-md mx-auto justify-center border-l-white">
            <Link href="https://github.com/Widido1">
                <div className="grid grid-cols-6 container rounded-md bg-black text-white">
                    <div className="col-span-1 justify-center">
                        <Image
                            src={"https://i.pinimg.com/564x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg"}
                            alt={"Github image"}
                            width={50}
                            height={50}
                            style={imageStyle}
                        />
                    </div>
                    <h1 className="col-span-4 bg-black text-white text-center align-middle content-center text-3xl rounded-md">Github</h1>
                    <div className="col-span-1 justify-center">
                        <Image
                            src={"https://i.pinimg.com/564x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg"}
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