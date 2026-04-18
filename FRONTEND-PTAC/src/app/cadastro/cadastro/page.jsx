import SignupForm from "@/components/signup-form";
import Link from "next/link";

export default function CadastroPage() {
  return (
    <div 
      className="flex min-h-screen flex-col bg-[#f9f9f9] antialiased"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* Navbar simplificada para manter a identidade da Home */}
      <header className="px-6 h-16 flex items-center border-b border-gray-200 bg-white">
        <Link href="/" className="font-bold text-xl text-gray-900 hover:text-orange-600 transition-colors">
          Sabor & Arte
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Card com bordas mais retas e limpas (estilo sistema) */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
              Crie sua Conta
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              Preencha os campos oficiais abaixo.
            </p>

            <SignupForm />

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-center text-sm text-gray-600 font-bold">
                Já possui uma conta?{" "}
                <Link 
                  href="/login" 
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  Fazer Login
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest">
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}