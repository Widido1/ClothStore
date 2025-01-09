"use client"
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner"
import DeleteProduct from "../actions/deleteProduct";

export default function DeleteButton(id){
    const router = useRouter();

    return(
        <button className="block theme3 rounded-md w-full h-6 text-sm min-[350px]:h-8 min-[350px]:text-lg sm:text-xl" onClick={(event) => {
            //acá use el framework Toaster para que le salte una advertencia al usuario cuando quiera borrar un producto de la base de datos
            event.preventDefault();
            toast.custom((t) => ( 
                <div className="theme1 w-full p-4 rounded-md">
                    <h1 className="text-center p-2 font-bold">Are you sure you want to delete this product?</h1>
                    <div className="flex ">
                        <button className="theme2 mx-auto justify-center w-1/3 p-2" onClick={async () => { 
                            await DeleteProduct(id); //borra el producto con el server action DeleteProduct()
                            router.push("/"); //devuelve al usuario a la pagina principal
                            }}>
                            Delete
                        </button>
                        <button className="theme3 mx-auto justify-center w-1/3 p-2" onClick={()=>toast.dismiss(t)}>
                            Cancel
                        </button>
                    </div>
                </div>

            ))
        }}>Delete</button>
    )
}