import { calcularIMC, classificarIMC } from '../src/utils/calculadora'
// Testes unitários para a calculadora de IMC
describe('Testes da Calculadora de IMC', () => {
  test('1. Deve calcular o IMC corretamente para peso e altura válidos', () => {
    expect(calcularIMC(70, 1.75)).toBe(22.86)
  })
  // Teste para verificar se a função lançar erro quando peso ou altura forem zero ou negativos
  test('2. Deve lançar erro quando peso ou altura forem zero ou negativos', () => {
    expect(() => calcularIMC(0, 1.75)).toThrow('Peso e altura devem ser maiores que zero')
    expect(() => calcularIMC(70, -1.75)).toThrow()
  })
  //  Teste para verificar se a função classificarIMC retorna a classificação correta do IMC
  test('3. Deve retornar a classificação correta do IMC', () => {
    expect(classificarIMC(17.5)).toBe('Abaixo do peso')
    expect(classificarIMC(22.86)).toBe('Peso normal')
    expect(classificarIMC(27.0)).toBe('Sobrepeso')
  })
})