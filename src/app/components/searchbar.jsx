"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function SearchBar(props){
    const router = useRouter();
    const [searchW, setSearchW] = useState(""); 

    const change = event =>{
        const newValue = event.target.value;
        setSearchW(newValue);
    }

    return(
        <div className="grid grid-flow-col self-center place-self-center py-4 min-[400px]:py-6 min-[650px]:py-8 w-[85%]">
            <input value={searchW} onChange={change} className="rounded-full bg-stone-950 bg-opacity-80 placeholder-orange-200 text-orange-200
               w-full h-[60px] px-4 min-[340px]:px-8 text-sm min-[340px]:text-lg" placeholder="Search for a product..."/>
            <Link className="grid place-self-end absolute" href={`/search/${searchW}`}><button className="rounded-full w-[60px] h-[60px] theme1 ">S</button></Link>
        </div>
    )
}