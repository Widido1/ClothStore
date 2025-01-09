import Form from "@/app/components/form";
import { prisma } from "@/libs/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function EditProduct({params}){
    const {isAuthenticated, getPermission} = getKindeServerSession() ; //inicializa isAuthenticated y getPermission para usar los condicionales de autenticacion
    const isLoggedIn = await isAuthenticated(); //is Authenticated devuelve true o false si el usuario esta o no autenticado respectivamente
    
    if(!isLoggedIn){
        //si no esta loggeado, lo redirecciona a la ruta login para que se autentique impidiendole el ingreso a la pagina
        console.log("you are not logged in")
        redirect("/api/auth/login")
    }

    const requiredPermission = await getPermission("add:products"); //getPermission devuelve true o false si el usuario tiene el permiso (en este caso "add:products")
    if(!requiredPermission?.isGranted){
        //si el usuario no tiene el permiso lo envía de nuevo a la pagina principal (esto está por motivos de seguridad, porque el usuario 
        //no debería siquiera ver el botón si no tiene el permiso)
        console.log("you don't have permission")
        redirect("/")
    }
    
    
    const product = await prisma.product.findFirst({
        //usa la funcion de prisma .findFirst para encontrar el product de la base de datos que coincide con el id y devolverlo
        where:{
            id: params.id
        }
    });

    if(!product){
        //si el producto no existe o fue borrado, lo redirecciona a la pagina principal, en caso de algún bug
        redirect("/");

    }


    return(
        <div>
            <Form product={product}/>
            {/* devuelve el formulario con la informacion del producto a editar */}
        </div>
    )
}