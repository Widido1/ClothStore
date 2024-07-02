"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { GET, POST } from "../api/products/route";

const imageStyle = {
    borderRadius: "25%",
    width: "275px",
    height: "275px",
    border: "3px solid #612c00"

}

export default function ProductForm(props){
    const onSubmit = async(e) => {
        e.preventDefault();
        console.log("Inicio del response del productForm");
        console.log(e);
        const name = e.target.name.value;
        const description = e.target.description.value;
        const img = e.target.img.value;
        const stock = e.target.stock.value;
        const price = e.target.price.value;
        const available = true;
        console.log(name +", "+ price +", "+ stock +", "+ description +", "+ img);

        const res = await fetch("../api/products/route", {
            method: "POST",
            body: JSON.stringify({name, price, stock, description, img, available}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res);
        const data = await res.json();
        console.log(data);
        console.log("Fin del response del productForm");
        return data;
    }

    return(
        <div className="h-screen" >
            <div className="grid content-center text-center justify-items-center h-24 p-auto theme3 text-4xl">
                <h1>Enter the new product information</h1>
            </div>
            <form className="container grid grid-cols-1 w-3/4 justify-self-center p-6 mx-auto my-6 h-3/4 text-center rounded-md theme1" onSubmit={onSubmit}>
                <div className="container grid grid-cols-2">
                    <div className="container grid gap-8 h-3/4">
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="name">Set Name:</label>
                            <input id="name" placeholder="enter name" className="w-3/4 mx-auto p-2 h-8 rounded-md"/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="price">Set Price:</label>
                            <input id="price" placeholder="enter price" className="w-3/4 mx-auto p-2 h-8 rounded-md"/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" htmlFor="stock">Set Stock:</label>
                            <input id="stock" placeholder="stock available" className="w-3/4 mx-auto p-2 h-8 rounded-md"/>
                        </div>
                        <div>
                            <label className="theme1 text-2xl font-bold block" id="description">Set Description:</label>
                            <textarea id="description" type="text" placeholder="Write the description here..." className="w-3/4 mx-auto p-2 h-36 rounded-md"></textarea>
                        </div>

                    </div>

                    <div className="container grid h-3/4">
                        <label className="theme1 text-2xl font-bold" htmlFor="img">Set Image URL:</label>
                        <textarea id="img" type="url" placeholder="Enter the link of the image here..." className="w-3/4 mx-auto h-24 p-2 rounded-md"></textarea>
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