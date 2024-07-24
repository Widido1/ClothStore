"use client";
import Link from "next/link";

export default function Banner(){
    
    return(
        <div className="grid grid-flow-row place-self-center text-center justify-center items-center w-full theme3 p-auto font-bold italic text-3xl
            sm:grid-cols-2 sm:place-self-stretch">
            <div className="w sm:w-1/3">
                <h1><Link href="/">CozyBoys</Link></h1>
            </div>
            <div className="grid grid-flow-col gap-2 auto-cols-3 place-items-end place-self-end justify-between text-right theme3 
            text-sm sm:text-base sm:w-2/3 md:text-lg lg:text-xl">
                <button><Link href="/about">About</Link></button>
                <button><Link href="/new-product">New Product</Link></button>
                <button>Log In</button>
            </div>
        </div>
    );
}