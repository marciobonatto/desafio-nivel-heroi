let herois = [
    ["Bardo Pond", 10250],
    ["Tamara di Amstagi", 7250],
    ["Josias The Wanderer", 350],
    ["Lidice Kill", 9710]
]
let xp
let nivel
console.log("=".repeat(22))
console.log("SUA EQUIPE DE HERÓIS:")
console.log("=".repeat(22))
for (let cont = 0; cont < herois.length; cont++) {
    xp = herois[cont][1]
    if (xp <= 1000) {
        nivel = "Ferro"
    } else if (xp <= 2000) {
        nivel = "Bronze"
    } else if (xp <= 6000) {
        nivel = "Prata"
    } else if (xp <= 7000) {
        nivel = "Ouro"
    } else if (xp <= 8000) {
        nivel = "Platina"
    } else if (xp <= 9000) {
        nivel = "Ascendente"
    } else if (xp <= 10000) {
        nivel = "Imortal"
    } else if (xp >= 10001) {
        nivel = "Radiante"
    }
    console.log(`O Herói de nome ${herois[cont][0]}, com XP de ${xp}, está no nível ${nivel}.`)
}