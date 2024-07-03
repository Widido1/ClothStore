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
            name: toString(name),
            description: toString(description),
            img: toString(img),
            stock: Number(stock),
            price: toString(price),
            available: (available),
        }
    });
    revalidatePath("/app/page");
    //console.log(name +", "+ price +", "+ stock +", "+ description +", "+ img);
    //const data = getData(name, price, stock, description, img, available);
    //console.log(data);
    //console.log("Fin del response del productForm");
    //return data;
}