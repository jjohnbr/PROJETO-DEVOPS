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
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090b",
        color: "#f4f4f5",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "#18181b",
          borderRadius: "16px",
          padding: "2rem",
          border: "1px solid #27272a",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#ffffff",
          }}
        >
          Calculadora de IMC - DevOps
        </h1>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#d4d4d8",
                marginBottom: "0.35rem",
              }}
            >
              Peso (kg)
            </label>
            <input
              type="number"
              step="0.1"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 70"
              style={{
                width: "100%",
                padding: "0.65rem 0.9rem",
                borderRadius: "8px",
                border: "1px solid #3f3f46",
                backgroundColor: "#27272a",
                color: "#ffffff",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#d4d4d8",
                marginBottom: "0.35rem",
              }}
            >
              Altura (m)
            </label>
            <input
              type="number"
              step="0.01"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 1.75"
              style={{
                width: "100%",
                padding: "0.65rem 0.9rem",
                borderRadius: "8px",
                border: "1px solid #3f3f46",
                backgroundColor: "#27272a",
                color: "#ffffff",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontWeight: "600",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
          >
            Calcular IMC
          </button>
        </form>

        {erro && (
          <div
            style={{
              marginTop: "1rem",
              padding: "0.75rem",
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid #ef4444",
              color: "#fca5a5",
              borderRadius: "8px",
              fontSize: "0.875rem",
              textAlign: "center",
            }}
          >
            {erro}
          </div>
        )}

        {resultado && (
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "#27272a",
              borderRadius: "10px",
              textAlign: "center",
              border: "1px solid #3f3f46",
            }}
          >
            <p style={{ fontSize: "1.125rem", fontWeight: "600", margin: 0 }}>
              Seu IMC: <span style={{ color: "#60a5fa" }}>{resultado.imc}</span>
            </p>
            <p style={{ fontSize: "0.9rem", color: "#d4d4d8", marginTop: "0.35rem", marginBottom: 0 }}>
              Classificação: <strong>{resultado.classificacao}</strong>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}