import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
    const products = await prisma.product.findMany();
    return NextResponse.json(products)
}

export async function POST(request){
    console.log("Inicio del POST");
    const {name, price, stock, description, img} = await request.json();
    console.log(name + ", " + price + ", " + stock + ", " + description + ", " + img);
    const newProduct = await prisma.product.create({
        data:{
            name,
            price,
            stock,
            description,
            img
        }
    });
    console.log("the post is: " );
    console.log(NextResponse.json(newProduct));
    console.log("Fin del POST");
    return NextResponse.json(newProduct);
}