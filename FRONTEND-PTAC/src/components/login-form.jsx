"use client"

import React from "react";

export default function LoginForm() {
  return (
    <form
      className="space-y-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-2 text-left">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input 
          id="email"
          type="email" 
          placeholder="seu@email.com" 
          className="w-full p-2.5 border border-gray-300 rounded-md 
          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
          outline-none transition-all duration-200 
          hover:border-orange-400 text-gray-900"
          required 
        />
      </div>
      
      <div className="space-y-2 text-left">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Senha
          </label>
          <a href="#" className="text-xs text-orange-600 hover:text-orange-700 hover:underline transition">
            Esqueceu a senha?
          </a>
        </div>
        <input 
          id="password"
          type="password" 
          placeholder="••••••••" 
          className="w-full p-2.5 border border-gray-300 rounded-md 
          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
          outline-none transition-all duration-200 
          hover:border-orange-400 text-gray-900"
          required 
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-orange-600 text-white py-2.5 rounded-md font-bold 
        hover:bg-orange-700 transition-all duration-200 
        shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
      >
        Entrar
      </button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-3 text-gray-400 tracking-wider">
            Ou continue com
          </span>
        </div>
      </div>

      <button 
        type="button"
        className="w-full border border-gray-300 py-2.5 rounded-md font-medium 
        hover:bg-gray-50 transition-all duration-200 
        flex items-center justify-center gap-2 
        hover:shadow-sm active:scale-[0.98]"
      >
        <span className="text-gray-600">Google</span>
      </button>
    </form>
  );
}