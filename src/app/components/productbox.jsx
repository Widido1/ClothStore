"use client";
import Image from "next/image";
import Link from "next/link";

// ProductBox is for the main page, the one where we can see all the products

export default function ProductBox(props) {
    const pName = props.name;
    const pImg = props.img;

    return(
        <div className="rainbow">
            <div className="theme2 ProductBox flex-col justify-items-center text-center content-center space-y-4 rounded-md theme1 pb-4">
                <h1 className="Link rounded-t-md w-full font-bold italic theme3 text-md md:text-lg xl:text-xl"><Link href={`/products/${props.id}`}>{/*<-- routing dinamico*/}
                {pName}
                </Link></h1>
                <div className="w-11/12 align-middle mx-auto relative">

                    <Image 
                        src={pImg}
                        alt="buzo selección"
                        width={400}
                        height={400}
                        className="mx-auto rounded-[20%] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]" //tamaño responsivo
                        //fill={true}
                        //style={imageStyle}
                    />
                    <p className="font-bold text-sm md:text-md">{props.des}</p>
                    <div>
                        <h1 className="theme3 w-3/4 mx-auto rounded-md">{props.price + "$"}</h1>
                    </div>
                </div>
            
            </div>
        </div>
    );
}
//