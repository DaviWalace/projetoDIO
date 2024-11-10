var vitorias = 150
var derrotas = 20
var soma = (vitorias - derrotas)
function resultado(vitorias, derrotas){
    return (vitorias - derrotas)}
    var ranque = resultado(vitorias, derrotas)
    while (ranque >= 10){
if (ranque <= 10) { ranque = "Ferro"}
else if (ranque >= 11 && ranque <= 20) {
    ranque = "Bronze"}
else if (ranque >= 21 && ranque <= 50) {
    ranque = "Prata"}
else if (ranque >= 51 && ranque <= 70) {
    ranque = "Ouro"}
else if (ranque >= 71 && ranque <= 80) {
    ranque = "Platina"}
else if (ranque >= 81 && ranque <= 90) {
    ranque = "Ascendente"}
else if (ranque >= 91 && ranque <= 100) {
    ranque = "Imortal"}
else if (ranque >= 101) {
    ranque = "Radiante"}
    }
console.log("O Herói tem de saldo de: "+ soma + " e está no nível de: "+ ranque)