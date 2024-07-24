import Form from "@/app/components/form";
import { prisma } from "@/libs/prisma";

export default async function EditProduct({params}){
    const product = await prisma.product.findFirst({
        where:{
            id: params.id
        }
    });

    if(!product){
        redirect("/")
    }

    console.log(product);

    return(
        <div>
            <Form product={product}/>
        </div>
    )
}