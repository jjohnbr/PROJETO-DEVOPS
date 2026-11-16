"use client";

import { useState } from "react";
import { calcularIMC, classificarIMC } from "@/src/utils/calculadora";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<{ imc: number; classificacao: string } | null>(null);
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setResultado(null);

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || pesoNum <= 0 || !alturaNum || alturaNum <= 0) {
      setErro("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    try {
      const imc = calcularIMC(pesoNum, alturaNum);
      const classificacao = classificarIMC(imc);
      setResultado({ imc, classificacao });
    } catch (err: any) {
      setErro(err.message || "Erro ao calcular o IMC.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-6 font-sans">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-700">
        <h1 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-6">
          Calculadora de IMC - DevOps
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Peso (kg)
            </label>
            <input
              type="number"
              step="0.1"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 70"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Altura (m)
            </label>
            <input
              type="number"
              step="0.01"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 1.75"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Calcular IMC
          </button>
        </form>

        {erro && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">
            {erro}
          </div>
        )}

        {resultado && (
          <div className="mt-6 p-4 bg-zinc-100 dark:bg-zinc-700 rounded-lg text-center">
            <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Seu IMC: <span className="text-blue-600 dark:text-blue-400">{resultado.imc}</span>
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
              Classificação: <strong>{resultado.classificacao}</strong>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}