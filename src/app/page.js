import { prisma } from "@/libs/prisma"
import ProductBox from "./components/productbox"
import Banner from "./components/banner";

async function loadProducts(){
  const allProducts = await prisma.product.findMany();
  return allProducts;
}

export default async function HomePage(){
  const products = await loadProducts();
  
  return(
    <div>
       <Banner />
      <div className="container grid grid-cols-3 gap-1 self-center mx-auto" >
        {products.map(product => (
          <ProductBox key={product.id} id={product.id} name={product.name} img={product.img} des={product.description} price={product.price}/>
        ))}
      </div>
    </div>

  )
}