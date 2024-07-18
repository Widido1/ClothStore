import { prisma } from "@/libs/prisma";
import ProductBox from "@/app/components/productbox";
import SingleBox from "@/app/components/singlebox";

export default async function ProductPage({params}){

    const product = await prisma.product.findFirst({
        where:{
            id: params.id
        }
    })

    return(
        <div className="flex justify-center items-center h-screen">
            <div className="grid justify-center items-center ">
                <SingleBox key={product.id} id={product.id} name={product.name} img={product.img} des={product.description} price={product.price}/>
                <div>
                    <button className="block theme2 w-full h-8">Edit</button>
                    <button className="block theme2 w-full h-8">Delete</button>
                </div>
            </div>

        </div>
    );
} 