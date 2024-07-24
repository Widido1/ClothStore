"use client"
import addProduct from "../actions/addProduct";
import { useRouter } from "next/navigation";
import updateProduct from "../actions/updateProduct";
import Link from "next/link";

export default function Form({product}) {
    const router = useRouter();

    const act = product?.id ? updateProduct : addProduct;

    return(
        <div className="h-screen" >
            <div className="grid content-center text-center justify-items-center h-24 p-auto theme3 text-4xl">
                <h1>Enter the new product information</h1>
            </div>
            <form className="container grid grid-cols-1 w-3/4 justify-self-center p-6 mx-auto my-6 h-3/4 text-center rounded-md theme1" action={
                async formData =>{
                    await act(formData);
                    router.push("/");
                }}
            >
                <div className="container grid grid-cols-1">
                    <div className="container grid gap-4 h-3/4 pb-2">
                        <input type="hidden" name="id" value={product?.id}/>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="name">Set Name:</label>
                            <input name="name" className="w-3/4 mx-auto p-2 h-8 rounded-md" required defaultValue={product?.name}/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="price">Set Price:</label>
                            <input name="price" className="w-3/4 mx-auto p-2 h-8 rounded-md" required defaultValue={product?.price}/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="stock">Set Stock:</label>
                            <input name="stock" className="w-3/4 mx-auto p-2 h-8 rounded-md" required defaultValue={product?.stock}/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" id="description">Set Description:</label>
                            <textarea name="description" type="text" className="w-3/4 mx-auto p-2 h-24 rounded-md" required defaultValue={product?.description}></textarea>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="img">Set Image URL:</label>
                            <textarea name="img" type="url" className="w-3/4 mx-auto h-24 p-2 rounded-md" required defaultValue={product?.img}></textarea>
                        </div>
                    </div>


                </div>


                <div className="grid grid-cols-2">
                    <button type="submit" className="w-3/4 mx-auto theme2 h-10 rounded-md py-1 text-2xl">Submit</button>
                    <Link href="/"><button className="w-3/4 mx-auto theme2 h-10 rounded-md py-1 text-2xl">Cancel</button></Link>
                </div>
            </form>
        </div>
    );
}