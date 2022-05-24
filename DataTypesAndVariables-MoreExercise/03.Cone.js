function cone(radius, height) {
  let value = Math.PI * radius * radius * height / 3;
  let area = Math.PI * radius * (Math.sqrt(radius * radius + height * height) + radius);
  console.log(`volume = ${value.toFixed(4)}\narea = ${area.toFixed(4)}`);
}
cone(3, 5);
