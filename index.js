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
    switch (xp >= 0) {
        case xp <= 1000:
            nivel = "Ferro"
            break
        case xp <= 2000:
            nivel = "Bronze"
            break
        case xp <= 6000:
            nivel = "Prata"
            break
        case xp <= 7000:
            nivel = "Ouro"
            break
        case xp <= 8000:
            nivel = "Platina"
            break
        case xp <= 9000:
            nivel = "Ascendente"
            break
        case xp <= 10000:
            nivel = "Imortal"
            break
        case xp >= 10001:
            nivel = "Radiante"
            break
    }
    console.log(`O Herói de nome ${herois[cont][0]}, com XP de ${xp}, está no nível ${nivel}.`)
}