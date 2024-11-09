var vitorias = 10
var derrotas = 10
var resultado
function ranque(vitorias, derrotas){
    return (vitorias - derrotas)}
    resultado = ranque(150, 20)
if (resultado <= 10) { resultado = "Ferro"}
else if (resultado >= 11 && resultado <= 20) {
    resultado = "Bronze"}
else if (resultado >= 21 && resultado <= 50) {
    resultado = "Prata"}
else if (resultado >= 51 && resultado <= 70) {
    resultado = "Ouro"}
else if (resultado >= 71 && resultado <= 80) {
    resultado = "Platina"}
else if (resultado >= 81 && resultado <= 90) {
    resultado = "Ascendente"}
else if (resultado >= 91 && resultado <= 100) {
    resultado = "Imortal"}
else if (resultado >= 101) {
    resultado = "Radiante"}

   
    

console.log(resultado)