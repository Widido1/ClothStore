"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const imageStyle = {
    borderRadius: "25%",
    width: "400px",
    height: "400px",
    border: "3px solid #612c00"

}

export default function SingleBox(props) {
    const [pName, setpName] = useState(props.name);
    const [pImg, setpImg] = useState(props.img);
    const [pPrice, setpPrice] = useState(props.price);

    useEffect(()=>{
        setpName(props.name);
        setpImg(props.img);
        setpPrice(props.price);
    },[props]);


    return(
        <div className="flex-col justify-items-center text-center content-center space-y-10 theme1 pb-6">
            <h1 className="font-bold text-lg sm:text-xl italic theme2">
                {pName}
            </h1>
            <div className="w-11/12 align-middle p-auto mx-auto relative">

                <Image 
                    src={pImg}
                    alt="buzo selección"
                    width={300}
                    height={300}
                    className="mx-auto rounded-[20%] w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]"
                    //fill={true}
                    //style={imageStyle}
                />
                <p className="font-bold text-lg">{props.des}</p>
                <div>
                    <h1 className="theme2 w-3/4 mx-auto rounded-md text-lg">{props.price}</h1>
                </div>
            </div>
            
        </div>
    );
}