import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
    const products = await prisma.product.findMany();
    return NextResponse.json(products)
}

export async function POST(request){
    console.log("Inicio del POST");
    const {name, price, stock, description, img} = await request.json();
    const newProduct = await prisma.product.create({
        data:{
            name,
            price,
            stock,
            description,
            img,
            available
        }
    });
    return NextResponse.json(newProduct);
}