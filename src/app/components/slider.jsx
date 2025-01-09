"use client"
import ProductBox from "./productbox";
import {useEffect, useState, useRef} from "react";

function makeArr(objArr){
    const arr = objArr.map((x,i) => (
        <ProductBox key={i} id={x.id} name={x.name} img={x.img} des={x.description} price={x.price}/>
        /*acá usamos ProductBox, pero en este lugar va el componente del arreglo de componentes (en este caso objArr es un arreglo de varios Productbox)*/
    ));
    return arr
}

export default function Slider(props){
    const cArray = makeArr(props.products); //creamos el arreglo de componentes usando el arreglo de las props
    const [mI, setMI] = useState(0); //creamos el indice maestro del slider

    const detI = (I) => {
        //esta funcion garantiza que el IndiceMaestro (mI) no se pase de los limites del arreglo
        let i = I; 
        const L = cArray.length;
        if(i >= L){i = i - L};
        if(i < 0){i = L + i}; 
        return(i);
    }

    const NextF = () => {
        setMI(detI((mI + 3), props.products.length)); // le suma 3 a mI y utiliza detI para determinar que mI no se alga de los limites del arreglo
        //al modificar el mI cambian todos los componentes que se muestran en el slider
    }

    const PrevF = () => {
        setMI(detI((mI - 3), props.products.length));// le resta 3 a mI y utiliza detI para determinar que mI no se alga de los limites del arreglo
    }


    return(
        <div className="Slider mx-auto mt-2 gap-[20px] w-[250px] min-[400px]:w-[400px] min-[650px]:w-[650px] lg:w-[900px] xl:w-[1200px] px-4 pb-2 bg-stone-950 bg-opacity-50">         
            <div className="ButtonBox grid grid-flow-col place-content-center gap-1 px-4 pb-2">
                <button className="ButtonPrev theme1 rounded-md text-xl lg:text-3xl h-[30px] lg:h-[40px] px-10 w-[125px] min-[400px]:w-[200px] min-[650px]:w-[325px] lg:w-[450px] xl:w-[600px]" onClick={PrevF}>{"<"}</button>
                <button className="ButtonNext theme1 rounded-md text-xl lg:text-3xl h-[30px] lg:h-[40px] px-10 w-[125px] min-[400px]:w-[200px] min-[650px]:w-[325px] lg:w-[450px] xl:w-[600px]" onClick={NextF}>{">"}</button>
            </div>
            <div className="SliderWrapper flex flex-col min-[650px]:flex-row">
                <div>{cArray[detI(mI)]}</div>
                <div>{cArray[detI(mI + 1)]}</div>
                <div>{cArray[detI(mI + 2)]}</div>
            </div>

        </div>
    ) 
}
