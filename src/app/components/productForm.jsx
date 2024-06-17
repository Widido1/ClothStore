"use client";

export default function ProductForm(){

    return(
        <div className="h-screen">
            <div className="container grid grid-cols-1 w-3/4 justify-self-center p-6 mx-auto my-20 h-3/4 text-center rounded-md theme1"  >
                <div className="w-2/4 mx-auto theme2 h-10 rounded-md py-1">
                    <h1 className="text-size">Name of the product</h1>
                </div>
                <div>
                    <input placeholder="Enter the name of the product here..." className="w-3/4 mx-auto h-10 p-2 grid place-items-start rounded-md"/>
                </div>
                <div className="w-2/4 mx-auto theme2 h-10 rounded-md py-1">
                    <h1>Image of the product</h1>
                </div>
                <div>
                    <textarea type="url" placeholder="Enter the link of the image here..." className="w-3/4 mx-auto h-24 p-2 rounded-md"></textarea>
                </div>
                <div className="w-2/4 mx-auto theme2 h-10 rounded-md py-1">
                    <h1>Description of the product</h1>
                </div>
                <div>
                    <textarea type="text" placeholder="Write the description here..." className="w-3/4 mx-auto p-2 h-36 rounded-md"></textarea>
                </div>
            </div>
        </div>
    );
}