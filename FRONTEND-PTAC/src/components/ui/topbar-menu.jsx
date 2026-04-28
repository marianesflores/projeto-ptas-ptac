import Link from "next/link";
import { Button } from "./button";

export function TopbarMenu() {
    return (

        <header className="w-full h-20 flex gap-9 p-8 bg-red-900 items-center justify-between">
            <div className="flex items-center">
                <Link href={"/"}>
                    <h1 className={`text-3xl w-70 font-extrabold text-yellow-200`}>Cantinho do Sabor</h1>
                </Link>
            </div>
            
            <nav className="flex flex-row items-center gap-7.5">
                <div className="flex gap-6">
                    <Link href={"/login"}><Button variant="outline" className="text-yellow-200">Login</Button></Link>
                    <Link href={"/cadastro"}><Button className=" text-yellow-200 bg-red-500 hover:bg-red-600">Cadastrar-se</Button></Link>
                </div>
            </nav>
        </header>

        
    )
}