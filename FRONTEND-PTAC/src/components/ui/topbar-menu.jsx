"use client"
import React from "react";

export default function SignupForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-1">
        <label className="text-sm font-medium">Nome Completo</label>
        <input type="text" placeholder="Seu Nome" className="w-full p-2 border rounded-md outline-orange-500" required />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">E-mail</label>
        <input type="email" placeholder="seu@email.com" className="w-full p-2 border rounded-md outline-orange-500" required />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">Senha</label>
        <input type="password" placeholder="••••••••" className="w-full p-2 border rounded-md outline-orange-500" required />
      </div>
      <button className="w-full bg-orange-600 text-white py-2 rounded-md font-bold hover:bg-orange-700 transition shadow-md">
        Criar Conta
      </button>
    </form>
  );
}