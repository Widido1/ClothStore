"use client";
import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import Image from "next/image";


export default function Banner(){
    const {user, isAuthenticated, getPermission} = useKindeBrowserClient();
    const requiredPermission = getPermission("add:products");
    
    return(
        <div className="grid grid-flow-row theme3 place-self-center text-center justify-center items-center w-full px-2 font-bold italic text-3xl
            sm:grid-cols-2 sm:place-self-stretch lg:text-4xl">
            <div className="sm:w-1/3">
                <h1 className="text-3xl min-[270px]:text-5xl"><Link href="/">CozyBoys</Link></h1>
            </div>
            <div className="grid grid-flow-col gap-2 min-[270px]:gap-4 auto-cols-3 place-self-center justify-self-center sm:justify-self-end justify-end text-right h-auto
            text-sm sm:text-base sm:w-2/3 md:text-lg lg:text-xl">
                <button className="p-2"><Link href="/about">About</Link></button>
                {/*Esta logica renderiza acorde a si el usuario esta autenticado y que permisos tiene*/}
                
                {requiredPermission.isGranted && (
                    <button className="p-2"><Link href="/new-product">New Product</Link></button>
                )}

                {!isAuthenticated ? (
                    <LoginLink className="p-2">Log in</LoginLink>
                ):( 
                <div className="flex p-2">
                    {user?.picture && (
                        <div className="rounded-[100%] h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] self-center">
                            <Image
                                src={user?.picture}
                                alt="Profile Picture"
                                width={200}
                                height={200}
                                className="rounded-[100%] h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] self-center"
                            />
                        </div>
                    )}
                        

                    {user && !user.picture && (
                        <div classname="rounded-full mx-auto h-20 w-20 bg-orange-900">
                            {user?.given_name?.[0]}
                        </div>
                    )}
                
                    <div className="flex-2 flex-row justify-items-start p-2">
                        <h1 className="text-right">{user?.given_name}</h1>
                        <LogoutLink className="text-right text-sm">Log Out</LogoutLink>
                    </div>
                </div>


                )}
            </div>
        </div>
    );
}