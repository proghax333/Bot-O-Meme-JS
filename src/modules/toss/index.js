
export default function toss() {
  const coinSides = {
    0: "HEADS",
    1: "TAILS",
  };

  const random = Math.random() * (Object.keys(coinSides).length - 1);
  return coinSides[Math.round(random)];
}
