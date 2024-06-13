"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductBox(props) {
    const [pName, setpName] = useState("default");
    const [pImg, setpImg] = useState("default");

    return(
        <div className="flex-col justify-items-center text-center w-1/4 content-center bg-gray-700 text-gray-100">
            <h1>Product Name</h1>
            <div className="w-11/12 align-middle m-auto p-0">
                <Image 
                    src="https://i.pinimg.com/564x/39/37/f8/3937f80efde8846a96163054b0800838.jpg"
                    alt="buzo selección"
                    width={300}
                    height={300}
                    className="max-h-50 max-w-32"
                />
            </div>
            <p>Product text for the ProductBox component</p>
        </div>
    );
}