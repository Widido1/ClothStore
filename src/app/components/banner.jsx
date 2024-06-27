"use client";

export default function Banner(){
    
    return(
        <div className="grid grid-cols-2 container content-center pl-2 w-full theme3 font-bold italic text-3xl">
            <div className="w-1/2">
                <h1>CozyBoys</h1>
            </div>
            <div className="grid grid-flow-col w-1/2 justify-self-end items-stretch theme3 text-xl">
                <button>About</button>
                <button>New Product</button>
                <button>Log In</button>
            </div>
        </div>
    );
}