export function calcularIMC(peso, altura) {
  if (peso <= 0 || altura <= 0) {
    throw new Error('Peso e altura devem ser maiores que zero')
  }
  const imc = peso / (altura * altura)
  return Number(imc.toFixed(2))
}

export function classificarIMC(imc) {
  if (imc < 18.5) return 'Abaixo do peso'
  if (imc < 25) return 'Peso normal'
  if (imc < 30) return 'Sobrepeso'
  return 'Obesidade'
}