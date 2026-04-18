// src/app/cadastro/page.js
import SignupForm from "@/components/signup-form";

export default function CadastroPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-8">Cadastro</h1>
        <SignupForm />
      </div>
    </div>
  );
}