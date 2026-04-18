// src/app/page.js
import { IconRocket } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-6">
        <h1 className="text-4xl font-bold flex items-center gap-2 animate-bounce">
          <IconRocket size={40} className="text-stone-700" />
          Projeto Pronto!
        </h1>
        <p className="bg-stone-100 p-4 rounded-lg border border-stone-200">
          Next.js 16 + React 19 + Tailwind v4 rodando com sucesso.
        </p>
      </div>
    </main>
  );
}