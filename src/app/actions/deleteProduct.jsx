"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "@/libs/prisma";
import { redirect } from "next/navigation";

export default async function addProduct({params}){

    await prisma.product.delete({
        where:{
            id: params.id
        }
    });
    redirect("/")
}