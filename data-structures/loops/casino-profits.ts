let casinoProfit = 0;

for (let i = 0; i < 50; i++) {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dice3 = Math.floor(Math.random() * 6) + 1;

  const sum = dice1 + dice2 + dice3;

  if (sum >= 10) {
    casinoProfit -= 10;
    console.log(`Intento ${i + 1}: GANÓ el jugador → Suma: ${sum}`);
  } else {
    casinoProfit += 15;
    console.log(`Intento ${i + 1}: PERDIÓ el jugador → Suma: ${sum}`);
  }
}


console.log(`\nGanancia total del casino: $${casinoProfit}`);
