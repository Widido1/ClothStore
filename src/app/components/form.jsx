"use client"
import addProduct from "../actions/addProduct";
import { useRouter } from "next/navigation";

export default function Form() {
    const router = useRouter();
    return(
        <div className="h-screen" >
            <div className="grid content-center text-center justify-items-center h-24 p-auto theme3 text-4xl">
                <h1>Enter the new product information</h1>
            </div>
            <form className="container grid grid-cols-1 w-3/4 justify-self-center p-6 mx-auto my-6 h-3/4 text-center rounded-md theme1" action={
                async formData =>{
                    await addProduct(formData);
                    router.push("/");
                }}
            >
                <div className="container grid grid-cols-2">
                    <div className="container grid gap-8 h-3/4">
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="name">Set Name:</label>
                            <input name="name" placeholder="enter name" className="w-3/4 mx-auto p-2 h-8 rounded-md" required/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="price">Set Price:</label>
                            <input name="price" placeholder="enter price" className="w-3/4 mx-auto p-2 h-8 rounded-md" required/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="stock">Set Stock:</label>
                            <input name="stock" placeholder="stock available" className="w-3/4 mx-auto p-2 h-8 rounded-md" required/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" id="description">Set Description:</label>
                            <textarea name="description" type="text" placeholder="Write the description here..." className="w-3/4 mx-auto p-2 h-36 rounded-md" required></textarea>
                        </div>

                    </div>

                    <div className="container grid h-3/4">
                        <label className="theme1 text-2xl font-bold" htmlFor="img">Set Image URL:</label>
                        <textarea name="img" type="url" placeholder="Enter the link of the image here..." className="w-3/4 mx-auto h-24 p-2 rounded-md" required></textarea>
                        <label className="theme1 text-2xl font-bold">Preview:</label>
                    </div>
                </div>


                <div className="grid grid-cols-2">
                    <button type="submit" className="w-3/4 mx-auto theme2 h-10 rounded-md py-1">Submit</button>
                    <button className="w-3/4 mx-auto theme2 h-10 rounded-md py-1">Cancel</button>
                </div>
            </form>
        </div>
    );
}