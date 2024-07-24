"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "@/libs/prisma";

export default async function updateProduct(formData){
    const id = formData.get("id");
    const name = formData.get("name");
    const description = formData.get("description");
    const img = formData.get("img");
    const stock = formData.get("stock");
    const price = formData.get("price");
    const available = true;

    await prisma.product.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            description: description,
            img: img,
            stock: Number(stock),
            price: price,
            available: available,
        }
    })
    revalidatePath("/app/page");
}