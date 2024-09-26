"use client";
import Link from "next/link";

export default function Banner(){
    
    return(
        <div className="grid grid-flow-row place-self-center text-center justify-center items-center w-full theme3 px-2 font-bold italic text-3xl
            sm:grid-cols-2 sm:place-self-stretch lg:text-4xl">
            <div className="sm:w-1/3">
                <h1><Link href="/">CozyBoys</Link></h1>
            </div>
            <div className="grid grid-flow-col gap-4 auto-cols-3 place-self-center justify-self-end justify-end text-right theme3 h-auto
            text-sm sm:text-base sm:w-2/3 md:text-lg lg:text-xl">
                <button><Link href="/about">About</Link></button>
                <button><Link href="/new-product">New Product</Link></button>
                <button>Log In</button>
            </div>
        </div>
    );
}