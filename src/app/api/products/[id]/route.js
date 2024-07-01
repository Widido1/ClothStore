import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET(request, {params}){
    const product = await prisma.product.findUnique({
        where: {
            id: Number(params.id)
        }
    });
    return NextResponse.json(product);
}

export async function PUT(request, {params}){
    const data = await request.json();
    const productUpdated = await prisma.product.update({
        where: {
            id: Number(params.id),
        },
        data: data
    })
    
    return NextResponse.json(productUpdated);
}

export async function DELETE(request, {params}){
    try{
        await prisma.product.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json("eliminando producto");
    }catch(error){
        return NextResponse.json(error.message);
    }
    
    

}