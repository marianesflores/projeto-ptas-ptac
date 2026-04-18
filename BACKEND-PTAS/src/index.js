import { prisma } from "../lib/prisma.config.js";

// 1. Criar o usuário (permaneceu similar, mas com foco no cliente)
async function criarUsuario(email, passwordHash) {
const usuario = await prisma.user.create({
data: {
email,
passwordHash,
},
});

console.log(`Cliente cadastrado: ${usuario.email}`);
return usuario;
}

// 2. Buscar as reservas da mesa
async function buscarReservasUsuario(userId) {
const usuarioComReservas = await prisma.user.findUnique({
where: { id: userId },
include: {
reservas: { // Alterado de 'jogatinas' para 'reservas'
include: { mesa: true } // Alterado de 'game' para 'mesa'
}
}
});

if (!usuarioComReservas) {
throw new Error("Usuário não encontrado");
}

console.log(`Reservas encontradas para o cliente: ${usuarioComReservas.email}`);
return usuarioComReservas;
}

async function main() {
// Exemplo de execução
const novoUsuario = await criarUsuario("cliente@email.com", "senhaSegura123");

const dados = await buscarReservasUsuario(novoUsuario.id);
console.dir(dados, { depth: null });
}

main()
.then(async () => await prisma.$disconnect())
.catch(async (e) => {
console.error(e);
await prisma.$disconnect();
process.exit(1);
});