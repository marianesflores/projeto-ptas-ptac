import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-red-950 flex justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg p-8 m-8">

        <section className="gap-6 items-center">
          
          <div className="mb-8 flex gap-8 flex-col">
            <h2 className={`text-4xl`}>
              O melhor restaurante da região!
            </h2>
          </div>

          <div className="flex flex-row justify-between p-6 ">
            <div className="flex flex-col gap-15">
            <p className="text-gray-500 max-w-md">
              Referência em alta gastronomia, o Cantinho do Sabor oferece uma experiência sofisticada e exclusiva. Garanta sua mesa e faça sua reserva.
            </p>

            <div className="flex gap-3">
              <Button className="rounded-full text-yellow-200 bg-red-500 hover:bg-red-600">
                Fazer reserva
              </Button>

              <Button variant="outline" className="rounded-full text-orange-400">
                Saiba mais
              </Button>
            </div>
            </div>

            <Image
              src="/image.png"
              width={400}
              height={300}
              className="rounded-xl mb-10"
              alt=""
            />
          </div>

        </section>
       

      </div>
    </main>
  )
}