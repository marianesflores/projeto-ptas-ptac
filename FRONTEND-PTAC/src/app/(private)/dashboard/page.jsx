"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const resposta = await fetch("http://localhost:5500/api/produtos");
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        console.log("Erro ao carregar produtos:", error);
      }
    }

    carregarProdutos();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard - Restaurante
          </h1>
          <p className="mt-2 text-slate-600">
            Sistema para cadastro, listagem, edição e exclusão de produtos.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/plans"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Ver produtos
            </Link>

            <Link
              href="/cadastro"
              className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
            >
              Cadastrar usuário
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">Produtos</h2>
            <p className="mt-2 text-3xl font-bold">{produtos.length}</p>
            <p className="text-sm text-slate-500">Itens cadastrados</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">Autenticação</h2>
            <p className="mt-2 text-sm text-slate-600">
              Login e cadastro com Better Auth.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold">CRUD</h2>
            <p className="mt-2 text-sm text-slate-600">
              Criar, listar, editar e excluir produtos.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold text-slate-900">
            Produtos cadastrados
          </h2>

          <div className="overflow-hidden rounded-xl border">
            <table className="w-full border-collapse bg-white text-left">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Nome</th>
                  <th className="p-3">Preço</th>
                  <th className="p-3">Estoque</th>
                </tr>
              </thead>

              <tbody>
                {produtos.length === 0 ? (
                  <tr>
                    <td className="p-4 text-center text-slate-500" colSpan="4">
                      Nenhum produto cadastrado.
                    </td>
                  </tr>
                ) : (
                  produtos.map((produto) => (
                    <tr key={produto.id} className="border-b hover:bg-slate-50">
                      <td className="p-3">{produto.id}</td>
                      <td className="p-3 font-medium">{produto.nome}</td>
                      <td className="p-3">
                        R$ {Number(produto.preco || 0).toFixed(2)}
                      </td>
                      <td className="p-3">{produto.estoque}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}