import * as ProdutoModel from "../models/produto.model.js";

export async function listar(req, res) {
  const produtos = await ProdutoModel.listarProdutos();
  return res.json(produtos);
}

export async function buscar(req, res) {
  const id = req.params.id;
  const produto = await ProdutoModel.buscarProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({ error: "Produto não encontrado." });
  }

  return res.json(produto);
}

export async function criar(req, res) {
  const { nome, preco, estoque } = req.body;

  if (!nome || preco == null || estoque == null) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const produto = await ProdutoModel.criarProduto({
    nome,
    preco: Number(preco),
    estoque: Number(estoque),
  });

  return res.status(201).json(produto);
}

export async function atualizar(req, res) {
  const id = req.params.id;
  const { nome, preco, estoque } = req.body;

  const produto = await ProdutoModel.buscarProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({ error: "Produto não encontrado." });
  }

  const atualizado = await ProdutoModel.atualizarProduto(id, {
    nome,
    preco: Number(preco),
    estoque: Number(estoque),
  });

  return res.json(atualizado);
}

export async function deletar(req, res) {
  const id = req.params.id;

  const produto = await ProdutoModel.buscarProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({ error: "Produto não encontrado." });
  }

  await ProdutoModel.deletarProduto(id);

  return res.status(204).send();
}