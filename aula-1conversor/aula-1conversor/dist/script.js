var nomeSolicitante = "Anacleto";

//CONVERSOR DE MOEDAS =========================
var valorEmReal = 100;
var cotacaoDolar = 4.92;
var cotacaoEuro = 5.26
var cotacaoBitcoin = 180435.84

var valorEmDolar = valorEmReal / cotacaoDolar
var valorEmEuro = valorEmReal / cotacaoEuro
var valorEmBitcoin = valorEmReal / cotacaoBitcoin

var resultadoConversaoMoedas = `Olá ${nomeSolicitante}! Você possui R$ ${valorEmReal.toFixed(2)}, o que equivale a: US$ ${valorEmDolar.toFixed(2)} | € ${valorEmEuro.toFixed(2)} | BTC  ${valorEmBitcoin.toFixed(7)}`

document.getElementById("resultadoConversaoMoedas").innerHTML = resultadoConversaoMoedas;

//CONVERSOR DE DISTÂNCIAS =========================
var distQuilometros = 500000
var velocidadeFoton = 300000 //Velocidade em km/s
var valorAnoLuz = velocidadeFoton * 60 * 60 * 24 * 365 //Distância percorrida pelo Foton em um ano.

var tempoViagem = distQuilometros / velocidadeFoton
var distAnoLuz = distQuilometros / valorAnoLuz


var resultadoConversaoDistancias = `Olá ${nomeSolicitante}! A distância de ${distQuilometros}km será percorrida pela luz em  ${tempoViagem.toFixed(7)} segundos. O que é igual a ${distAnoLuz.toFixed(20)} anos-luz.`

document.getElementById("resultadoConversaoDistancias").innerHTML = resultadoConversaoDistancias;

//CONVERSOR DE TEMPERATURAS =========================
var temperaturaCelsius = 100
var temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32
var temperaturaKelvin = temperaturaCelsius + 273.15


var resultadoConversaoTemperaturas = `Olá ${nomeSolicitante}! A temperatura de ${temperaturaCelsius}°C equivale a ${temperaturaFahrenheit.toFixed(2)}°F, ou ${temperaturaKelvin.toFixed(2)}K.`

document.getElementById("resultadoConversaoTemperaturas").innerHTML = resultadoConversaoTemperaturas;