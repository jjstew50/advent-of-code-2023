function getNumbersTouchingSymbol(matrix, symbol) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
  
    // Helper function to check if coordinates are within the matrix bounds
    const isValid = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;
  
    // Iterate through each cell in the matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Check if the current cell contains the specified symbol
        if (matrix[i][j] === symbol) {
          // Check all eight directions for contiguous sequences of digits
          const directions = [
            [-1, 0],   // Up
            [1, 0],    // Down
            [0, -1],   // Left
            [0, 1],    // Right
            [-1, -1],  // Diagonal Up-Left
            [-1, 1],   // Diagonal Up-Right
            [1, -1],   // Diagonal Down-Left
            [1, 1],    // Diagonal Down-Right
          ];
  
          directions.forEach(([rowDiff, colDiff]) => {
            let nextRow = i;
            let nextCol = j;
            let wholeNumber = '';
  
            while (isValid(nextRow, nextCol)) {
              const nextValue = matrix[nextRow][nextCol];
              if (!isNaN(Number(nextValue))) {
                wholeNumber += nextValue;
                nextRow += rowDiff;
                nextCol += colDiff;
              } else {
                break;
              }
            }
  
            if (wholeNumber.length > 0) {
              result.push(Number(wholeNumber));
            }
          });
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const inputMatrix = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598.."
  ];
  
  const result = getNumbersTouchingSymbol(inputMatrix, '*');
  console.log(result);
  