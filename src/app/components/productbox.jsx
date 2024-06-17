"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductBox(props) {
    const [pName, setpName] = useState(props.name);
    const [pImg, setpImg] = useState(props.img);

    useEffect(()=>{
        setpName(props.name);
        setpImg(props.img);
    },[props]);


    return(
        <div className="flex-col justify-items-center text-center content-center space-y-10 rounded-md theme1">
            <h1 className="font-bold text-lg italic">{pName}</h1>
            <div className="w-11/12 align-middle p-0">
                <Image 
                    src={pImg}
                    alt="buzo selección"
                    width={300}
                    height={300}
                    className="h-1/2 w-1/2 mx-auto rounded-md"
                />
            </div>
            <p>{props.des}</p>
        </div>
    );
}