var playerXP = 1001
var playerName = "Davi"
while (playerXP >= 1000){
if (playerXP <= 1000) {playerXP = "Ferro"}
else if (playerXP >= 1001 && playerXP <= 2000) {
    playerXP = "Bronze"}
else if (playerXP >= 2001 && playerXP <= 5000) {
    playerXP = "Prata"}
else if (playerXP >= 5001 && playerXP <= 7000) {
    playerXP = "Ouro"}
else if (playerXP >= 7001 && playerXP <= 8000) {
    playerXP = "Platina"}
else if (playerXP >= 8001 && playerXP <= 9000) {
    playerXP = "Ascendente"}
else if (playerXP >= 9001 && playerXP <= 10000) {
    playerXP = "Imortal"}
else if (playerXP >= 10001) {
    playerXP = "Radiante"}
}
console.log("O Herói de nome " + playerName + " está no nível de " + playerXP)