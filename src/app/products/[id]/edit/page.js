import Form from "@/app/components/form";
import { prisma } from "@/libs/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function EditProduct({params}){
    const {isAuthenticated, getPermission} = getKindeServerSession() ;
    const isLoggedIn = await isAuthenticated();
    if(!isLoggedIn){
        console.log("you are not logged in")
        redirect("/api/auth/login")
    }

    const requiredPermission = await getPermission("add:products");
    if(!requiredPermission?.isGranted){
        console.log("you don't have permission")
        redirect("/")
    }
    
    
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