import { prisma } from "@/libs/prisma";
import ProductBox from "@/app/components/productbox";
import SingleBox from "@/app/components/singlebox";
import DeleteButton from "@/app/components/DeleteButton";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import Banner from "@/app/components/banner";

export default async function ProductPage({params}){

    
    const product = await prisma.product.findFirst({
        where:{
            id: params.id
        }
    })

    return(
        <div>
            <Banner/>
            <Toaster toastOptions={{unstyled:true, duration:Infinity,}} position="bottom-center" visibleToasts={1} closeButton=""/>
            <div className="flex justify-center items-center h-screen">
                <div className="grid justify-center items-center">
                    <SingleBox key={product.id} id={product.id} name={product.name} img={product.img} des={product.description} price={product.price}/>
                    <div>
                        <button className="block theme2 w-full h-8"><Link href={`/products/${params.id}/edit`}>Edit</Link></button>
                        <DeleteButton id={params.id}/>
                    </div>
                </div>
            </div>
        </div>
    );
} 