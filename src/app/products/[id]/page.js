"use server"
import { prisma } from "@/libs/prisma";
import ProductBox from "@/app/components/productbox";
import SingleBox from "@/app/components/singlebox";
import DeleteButton from "@/app/components/DeleteButton";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import Banner from "@/app/components/banner";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProductPage({params}){

    const {isAuthenticated, getPermission} = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    const requiredPermission = await getPermission("add:products");

    if(!isLoggedIn){
        redirect("/api/auth/login")
    }

    const product = await prisma.product.findFirst({
        where:{
            id: params.id
        }
    })

    return(
        <div className="OneProduct h-screen">
            <Banner/>
            <Toaster toastOptions={{unstyled:true, duration:Infinity,}} position="bottom-center" visibleToasts={1} closeButton=""/>
            <div className="flex justify-center items-center w-full min-[240px]:h-[85vh] min-[350px]:h-[95vh]">
                <div className="grid justify-center items-center w-full">
                    <SingleBox key={product.id} id={product.id} name={product.name} img={product.img} des={product.description} price={product.price}/>
                    {requiredPermission.isGranted && (
                        <div>
                            <button className="block theme3 w-full h-5 text-sm min-[350px]:h-6 min-[350px]:text-lg sm:h-8 sm:text-xl"><Link href={`/products/${params.id}/edit`}>Edit</Link></button>
                            <DeleteButton id={params.id}/>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
} 