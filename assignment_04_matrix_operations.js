// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

```javascript
const readlineSync = require("readline-sync");

function readMatrix(rows, columns, name) {
    const matrix = [];

    console.log(`\nEnter values for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        const row = rowInput.split(" ").map(Number);

        matrix.push(row);
    }

    return matrix;
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transpose = [];

    for (let j = 0; j < columns; j++) {
        const newRow = [];

        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }

        transpose.push(newRow);
    }

    return transpose;
}

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const columns = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const columnsA = matrixA[0].length;
    const columnsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];

        for (let j = 0; j < columnsB; j++) {
            let sum = 0;

            for (let k = 0; k < columnsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + "\t";
        }

        console.log(row);
    }
}

function main() {
    // Part A: Transpose a Matrix
    console.log("PART A — TRANSPOSE A MATRIX");

    const rowsA = readlineSync.questionInt("Enter number of rows: ");
    const columnsA = readlineSync.questionInt("Enter number of columns: ");

    const matrixA = readMatrix(rowsA, columnsA, "A");

    const transposed = transposeMatrix(matrixA);

    console.log("\nOriginal Matrix:");
    displayMatrix(matrixA);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposed);


    // Part B: Add Two Matrices
    console.log("\nPART B — ADD TWO MATRICES");

    const rowsB = readlineSync.questionInt("Enter number of rows: ");
    const columnsB = readlineSync.questionInt("Enter number of columns: ");

    const matrixB1 = readMatrix(rowsB, columnsB, "A");
    const matrixB2 = readMatrix(rowsB, columnsB, "B");

    const sum = addMatrices(matrixB1, matrixB2);

    console.log("\nMatrix A:");
    displayMatrix(matrixB1);

    console.log("\nMatrix B:");
    displayMatrix(matrixB2);

    console.log("\nSum of Matrices:");
    displayMatrix(sum);


    // Part C: Multiply Two Matrices
    console.log("\nPART C — MULTIPLY TWO MATRICES");

    const rowsC1 = readlineSync.questionInt("Enter rows for Matrix A: ");
    const columnsC1 = readlineSync.questionInt("Enter columns for Matrix A: ");

    const rowsC2 = readlineSync.questionInt("Enter rows for Matrix B: ");
    const columnsC2 = readlineSync.questionInt("Enter columns for Matrix B: ");

    if (columnsC1 !== rowsC2) {
        console.log(
            "Error: The number of columns in Matrix A must equal the number of rows in Matrix B."
        );
        return;
    }

    const matrixC1 = readMatrix(rowsC1, columnsC1, "A");
    const matrixC2 = readMatrix(rowsC2, columnsC2, "B");

    const product = multiplyMatrices(matrixC1, matrixC2);

    console.log("\nMatrix A:");
    displayMatrix(matrixC1);

    console.log("\nMatrix B:");
    displayMatrix(matrixC2);

    console.log("\nProduct of Matrices (A x B):");
    displayMatrix(product);
}

main();
```
