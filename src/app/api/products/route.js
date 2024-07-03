import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request) {
  console.log("llegue a post");
  const {name, price, stock, description, img, available} = await request.json();
  const newProduct = await prisma.product.create({
    data: {name, price, stock, description, img, available}
  });
  console.log("the product is: ");
  console.log(newProduct);

  return NextResponse.json(newProduct);
}