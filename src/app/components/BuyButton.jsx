"use client"

export default function BuyButton(props){
    const product = JSON.stringify(props.product);
    const handlePay = async() => {
        //envía al route, los datos del producto en cuestion
        //recibe el session con el url de la pagina stripe para pagar el producto
        
        const res = await fetch("/api/checkout", {
            method: "POST",
            body: product,
            headers: {
                "Content-Type": "application/json",
            }
        })
        const session = await res.json(); //recibe la session con la pagina para pagar
        window.location = session.url //envia el usuario a la pagina para pagar el producto
    }

    return(
        <button className="block theme3 rounded-md w-full h-6 text-sm min-[350px]:h-8 min-[350px]:text-lg sm:text-xl" onClick={handlePay}>Buy</button>
    );
}