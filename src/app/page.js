import { prisma } from "@/libs/prisma"
import ProductBox from "./components/productbox"
import Banner from "./components/banner";
import { Toaster } from "sonner";

async function loadProducts(){
  const allProducts = await prisma.product.findMany();
  return allProducts;
}

export default async function HomePage(){
  const products = await loadProducts();
  
  return(
    <div>
       <Toaster/>
       <Banner />
      <div className="grid grid-cols gap-1 min-[480px]:grid-cols-2 sm:grid-cols-3 " >
        {products.map(product => (
          <ProductBox key={product.id} id={product.id} name={product.name} img={product.img} des={product.description} price={product.price}/>
        ))}
      </div>
      
    </div>

  )
}