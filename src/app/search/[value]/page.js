"use server"
import SearchResults from "@/app/components/searchResults";
import { prisma } from "@/libs/prisma";

async function loadProducts(){
    const allProducts = await prisma.product.findMany();
    return allProducts;
}

export default async function SearchPage({params}){
    const products = await loadProducts();
    
    return(
        <div>
            <SearchResults products={products} word={params.value}/>
        </div>
    )
    
} 