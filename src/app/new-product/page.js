import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Form from "../components/form";
import { redirect } from "next/navigation";

export default async function NewProduct(){
    const {isAuthenticated, getPermission} = getKindeServerSession() ;
    const isLoggedIn = await isAuthenticated();
    if(!isLoggedIn){
        console.log("you are not logged in")
        redirect("/api/auth/login")
    }

    const requiredPermission = await getPermission("add:products");
    if(!requiredPermission?.isGranted){
        console.log(getPermission)
        console.log("you don't have permission")
        redirect("/")
    }

    return(
        <div>
            <Form />
        </div>
    );
}