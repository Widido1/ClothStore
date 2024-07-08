"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "@/libs/prisma";

export default async function addProduct(formData){
    console.log(formData);
    const name = formData.get("name");
    const description = formData.get("description");
    const img = formData.get("img");
    const stock = formData.get("stock");
    const price = formData.get("price");
    const available = true;
    console.log(name + ", " + description + ", " + img + ", " + stock + ", " + price + ", " + available);
    await prisma.product.create({
        data: {
            name: name,
            description: description,
            img: img,
            stock: Number(stock),
            price: price,
            available: available,
        }
    });
    revalidatePath("/app/page");
}