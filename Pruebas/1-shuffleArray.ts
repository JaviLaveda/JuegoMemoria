//Apartado 1 - barajar un Array
function shuffleArray(array: number[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(originalArray);

const shuffledArray: number[] = shuffleArray(originalArray);

console.log(shuffledArray);
