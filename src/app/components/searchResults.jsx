"use client"
import ProductBox from "@/app/components/productbox";
import Banner from "@/app/components/banner";
import { useEffect, useState } from "react";
import SearchBar from "./searchbar";


export default function SearchResults(props){
    const allProducts = props.products; //arreglo que contiene todos los productos, de acá se sacan los resultados
    const searchW = props.word; //palabra de busqueda
    const [results, setResults] = useState(props.products); //resultados de la busqueda

    const purgeSearch = () => {
        let purged = searchW.toLowerCase(); //pasa la palabra de busqueda a minisculas, para que las mayusculas no entorpezcan la busqueda
        let borrar = /2%/; // crea un regEx /%2/ para reemplazar ese valor por un espacio tradicional
        if(borrar.test(purged)){
            purged = purged.split("2%").join(" "); //separa el string cada vez que hay un 2% formando un arreglo, luego lo vuelve a unir entre " " con join()
        }
        return purged
    }
    
    const findResults = (purged) => {
        const findW = new RegExp(purged); //construlle un RegEx usando la palabra de la busqueda purgada para evitar errores
        const results = allProducts.reduce((res, x) => { //construye un arreglo filtrando los productos que tienen un nombre que coincide con el regEx
            if(findW.test(x.name.toLowerCase())){ //testea con los nombres en minuscula, se comparan minusculas con minusculas, y eso deja de ser un problema
                res.push(x)
            } 
            return res
        }, [],);
        return results //devuelve el arreglo de productos que coinciden con la busqueda
    }

    useEffect(()=>{
        const purged = purgeSearch(searchW); //purgueSearch se encarga de purgar la palabra de busqueda para evitar errores como 2% o mayusculas
        setResults(findResults(purged)); //arma el arreglo con los resultados de la busqueda
    },[])

    return(
        <div>
            <Banner/>
            <div>
                <SearchBar/>
            </div>
            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 min-[650px]:grid-cols-3">
                {results.map((x, i) => (
                    <div>
                        <ProductBox key={i} id={x.id} name={x.name} img={x.img} des={x.description} price={x.price}/>
                    </div>
                ))}
            </div>
        </div>
    );
}