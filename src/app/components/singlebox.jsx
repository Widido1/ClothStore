"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Singlebox is for the page for each individual product, this is why i preferr to have two differents products components

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
        <div className="flex-col rounded-md justify-items-center text-center content-center space-y-6 min-[350px]:space-y-10 theme2 pb-3 min-[350px]:pb-6">
            <h1 className="grid w-full h-10 items-center rounded-t-md font-bold text-lg sm:text-xl italic theme3">
                {pName}
            </h1>
            <div className="w-11/12 align-middle p-auto mx-auto relative">

                <Image 
                    src={pImg}
                    alt="buzo selección"
                    width={300}
                    height={300}
                    className="mx-auto rounded-[20%] w-[240px] h-[240px] min-[350px]:w-[350px] min-[350px]:h-[350px] min-[450px]:w-[400px] min-[450px]:h-[400px] xl:w-[500px] xl:h-[500px]"
                    //fill={true}
                    //style={imageStyle}
                />
                <p className="font-bold text-sm min-[350px]:text-lg">{props.des}</p>
                <div>
                    <h1 className="theme3 w-3/4 mx-auto rounded-md text-sm min-[350px]:text-lg">{props.price + "$"}</h1>
                </div>
            </div>
            
        </div>
    );
}