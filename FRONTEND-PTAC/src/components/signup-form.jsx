"use client"

export default function SignupForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-1 text-left">
        <label className="text-sm font-bold text-gray-700">Nome Completo</label>
        <input 
          type="text" 
          placeholder="Seu Nome" 
          className="w-full p-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-600 outline-none transition-all"
          required 
        />
      </div>

      <div className="space-y-1 text-left">
        <label className="text-sm font-bold text-gray-700">E-mail</label>
        <input 
          type="email" 
          placeholder="seu@email.com" 
          className="w-full p-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-600 outline-none transition-all"
          required 
        />
      </div>
      
      <div className="space-y-1 text-left">
        <label className="text-sm font-bold text-gray-700">Senha</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          className="w-full p-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-600 outline-none transition-all"
          required 
        />
      </div>

      <button 
        type="submit" 
        className="w-full mt-4 h-11 bg-orange-600 text-white rounded-md font-extrabold shadow-md transition-all hover:bg-orange-700 hover:scale-105"
      >
        Cadastrar Agora
      </button>
    </form>
  );
}