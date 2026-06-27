"use client";

import { useEffect, useState } from "react";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState([]);
  const [idEditando, setIdEditando] = useState(null);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  async function carregarProdutos() {
    const resposta = await fetch("http://localhost:5500/api/produtos");
    const dados = await resposta.json();
    setProdutos(dados);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function salvarProduto(e) {
    e.preventDefault();

    const produto = {
      nome,
      preco: Number(preco),
      estoque: Number(estoque),
    };

    if (idEditando) {
      await fetch(`http://localhost:5500/api/produtos/${idEditando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });
    } else {
      await fetch("http://localhost:5500/api/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });
    }

    setNome("");
    setPreco("");
    setEstoque("");
    setIdEditando(null);
    carregarProdutos();
  }

  function editarProduto(produto) {
    setIdEditando(produto.id);
    setNome(produto.nome);
    setPreco(produto.preco);
    setEstoque(produto.estoque);
  }

  async function excluirProduto(id) {
    const confirmar = confirm("Tem certeza que deseja excluir este produto?");

    if (!confirmar) return;

    await fetch(`http://localhost:5500/api/produtos/${id}`, {
      method: "DELETE",
    });

    carregarProdutos();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h1 className="text-3xl font-bold">Gerenciamento de Produtos</h1>
          <p className="mt-2 text-slate-600">
            Cadastre, liste, edite e exclua produtos do restaurante.
          </p>
        </section>

        <section className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            {idEditando ? "Editar Produto" : "Cadastrar Produto"}
          </h2>

          <form onSubmit={salvarProduto} className="grid gap-4 md:grid-cols-4">
            <input
              className="rounded-lg border p-3"
              placeholder="Nome do produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input
              className="rounded-lg border p-3"
              placeholder="Preço"
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />

            <input
              className="rounded-lg border p-3"
              placeholder="Estoque"
              type="number"
              value={estoque}
              onChange={(e) => setEstoque(e.target.value)}
              required
            />

            <button
              type="submit"
              className="rounded-lg bg-slate-900 p-3 text-white"
            >
              {idEditando ? "Salvar edição" : "Cadastrar"}
            </button>
          </form>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Produtos cadastrados</h2>

          <table className="w-full border-collapse overflow-hidden rounded-xl">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-3 text-left">Nome</th>
                <th className="p-3 text-left">Preço</th>
                <th className="p-3 text-left">Estoque</th>
                <th className="p-3 text-left">Ações</th>
              </tr>
            </thead>

            <tbody>
              {produtos.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-slate-500">
                    Nenhum produto cadastrado.
                  </td>
                </tr>
              ) : (
                produtos.map((produto) => (
                  <tr key={produto.id} className="border-b">
                    <td className="p-3">{produto.nome}</td>
                    <td className="p-3">R$ {Number(produto.preco).toFixed(2)}</td>
                    <td className="p-3">{produto.estoque}</td>
                    <td className="flex gap-2 p-3">
                      <button
                        onClick={() => editarProduto(produto)}
                        className="rounded bg-yellow-500 px-3 py-1 text-white"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => excluirProduto(produto.id)}
                        className="rounded bg-red-600 px-3 py-1 text-white"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}