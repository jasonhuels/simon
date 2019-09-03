export function changeColor() {
  const COLORS = ["red", "blue", "green", "yellow"];
  let rand = Math.floor(Math.random()*COLORS.length);

  return COLORS[rand];
}
