const coordinates = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

for (let i = 0; i < coordinates.length; i++) {
  const coordinate = coordinates[i];
  for (let j = 0; j < coordinate.length; j++) {
    console.log(coordinate[j]);
  }
}
