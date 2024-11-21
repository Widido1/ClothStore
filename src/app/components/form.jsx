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
            <div className="grid content-center text-center justify-items-center p-4 mx-auto theme3">
                <h1 className="text-lg min-[365px]:text-2xl min-[665px]:text-4xl">Enter the new product information</h1>
            </div>
            <form className="container grid grid-cols-1 w-[220px] min-[365px]:w-[350px] min-[665px]:w-[600px] justify-self-center p-6 mx-auto my-6 h-7/8 text-center rounded-md theme2" action={
                async formData =>{
                    await act(formData);
                    router.push("/");
                }}
            >
                <div className="container grid grid-cols-1">
                    <div className="container grid gap-1 min-[365px]:gap-4 h-3/4 pb-2">
                        <input type="hidden" name="id" value={product?.id}/>
                        <div>
                            <label className="theme2 rounded-md text-md min-[365px]:text-2xl font-bold block" htmlFor="name">Set Name:</label>
                            <input name="name" className="formbox w-[90%] text-center text-md min-[365px]:text-lg min-[665px]:text-xl mx-auto p-2 m-2 h-12 rounded-md" placeholder="Set Name" required defaultValue={product?.name}/>
                        </div>
                        <div>
                            <label className="theme2 rounded-md text-md min-[365px]:text-2xl font-bold block" htmlFor="price">Set Price:</label>
                            <input name="price" className="formbox  w-[90%] text-center text-md min-[365px]:text-lg min-[665px]:text-xl mx-auto p-2 m-2 h-12 rounded-md" placeholder="Set Price" required defaultValue={product?.price}/>
                        </div>
                        <div>
                            <label className="theme2 rounded-md text-md min-[365px]:text-2xl font-bold block" htmlFor="stock">Set Stock:</label>
                            <input name="stock" className="formbox w-[90%] text-center text-md min-[365px]:text-lg min-[665px]:text-xl mx-auto p-2 m-2 h-12 rounded-md" placeholder="Set Stock" required defaultValue={product?.stock}/>
                        </div>
                        <div>
                            <label className="theme2 rounded-md text-md min-[365px]:text-2xl font-bold block" id="description">Set Description:</label>
                            <textarea name="description" type="text" className="formbox text-sm min-[365px]:text-md w-[90%] mx-auto p-2 m-2 h-24 rounded-md" placeholder="Set description" required defaultValue={product?.description}></textarea>
                        </div>
                        <div>
                            <label className="theme2 rounded-md text-md min-[365px]:text-2xl font-bold block" htmlFor="img">Set Image URL:</label>
                            <textarea name="img" type="url" className="formbox text-sm min-[365px]:text-md w-[90%] mx-auto h-24 p-2 m-2 rounded-md" placeholder="URL of the image" required defaultValue={product?.img}></textarea>
                        </div>
                    </div>


                </div>


                <div className="grid grid-cols-2">
                    <button type="submit" className="w-3/4 mx-auto theme3 h-10 rounded-md py-1 text-md min-[365px]:text-xl min-[455px]:text-2xl">Submit</button>
                    <Link href="/"><button className="w-3/4 mx-auto theme3 h-10 rounded-md py-1 text-md min-[365px]:text-xl min-[455px]:text-2xl">Cancel</button></Link>
                </div>
            </form>
        </div>
    );
}