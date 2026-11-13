// 1
// const idade = +prompt ('Digite sua idade!');

// if ( idade < 0 || idade > 120) {
//   console.log ( 'Erro de validação. Idade fora do limite permitido.')
// } else if (idade >= 0 && idade <= 17) {
//   console.log ( "Cadastro negado: Usuário menor de idade." )
// } else if (idade >= 18 && idade <= 65) {
//   console.log ( "Cadastro aprovado: Pacote Standard.")
// } else {
//   console.log ("Cadastro aprovado: Pacote Sênior (Isento de taxas).")
// };


// 2
// const distanciaKm = +prompt ('Digite sua distancia em Km!');

// if (distanciaKm < 0) {
//   console.log ("Erro do sistema: A distância não pode ser negativa.")
// } else if (distanciaKm >= 0 && distanciaKm <= 50) {
//   console.log ("Frete Grátis.")
// } else if ( distanciaKm >= 51 && distanciaKm <= 150) {
//   console.log ( "Custo do frete: R$ 25,00." )
// } else if ( distanciaKm >= 151 && distanciaKm <= 300) {
//   console.log ("Custo do frete: R$ 50,00.")
// } else {
//   console.log ("Área fora de cobertura para entregas.")
// };

// 3
// const usoCPU = 90;
// const usoRAM = 60;


// if (usoCPU <= 70 && usoRAM <= 70) {
//   console.log("Status: Sistema Saudável.")
// } else if (usoCPU > 70 && usoCPU < 89 || usoRAM > 70 && usoRAM < 89) {
//   console.log ("Alerta: Consumo elevado, monitorar." )
// } else {
//   console.log ( "CRÍTICO: Escalando novos servidores imediatamente!" )
// };

// 4
const rendaMensal = 2500;
const valorParcela = 500;
const scoreSerasa = 300;

let parcelaRenda = rendaMensal * 0.3

if (rendaMensal <= 0 || scoreSerasa < 0 || scoreSerasa > 1000) {
console.log ("Erro: Dados financeiros inválidos.")
} else if ( valorParcela > parcelaRenda && scoreSerasa < 400) {
  console.log ( "Crédito negado: Risco elevado ou renda comprometida.")
} else if ( valorParcela > parcelaRenda && scoreSerasa >= 400 && scoreSerasa <= 799) {
  console.log ("Crédito aprovado: Taxa de juros padrão.")
} else  {
  console.log ("Crédito pré-aprovado: Taxa VIP reduzida!")
};

