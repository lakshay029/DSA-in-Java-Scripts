// 🟡 Intermediate Level (Logic Building)
// Focus on pattern traversal and transformations.
let mat=[[1,2,3],[4,5,6],[7,8,9]]
// 14.	Transpose of a matrix
function transpose(mat){
    let rows=mat.length
    let col=mat[0].length
    let result=[]
    for(let j=0;j<col;j++){
        let row=[]
        for(let i=0;i<rows;i++){
            row.push(mat[i][j])
        }
        result.push(row)
    }
    return result;
}
// console.log(transpose(mat))


// 15.	Reverse each row of a matrix
function rowWiseReverse(mat) {
    for (let i = 0; i < mat.length; i++) {
        let left = 0;
        let right = mat[i].length - 1;

        while (left < right) {
            [mat[i][left], mat[i][right]] =
            [mat[i][right], mat[i][left]];
            left++;
            right--;
        }
    }
    return mat;
}

// console.log(rowWiseReverse(mat))


// 16.	Reverse each column of a matrix
function reversecol(mat){
    let rows=mat.length;
    let col=mat[0].length
    for(let j=0;j<col;j++){
        let top=0;
        let bottom =rows-1;

        while(top<bottom){
            [mat[top][j],mat[bottom][j]]=[mat[bottom][j],mat[top][j]]
            top++;
            bottom--;
        }
    }
    return mat
}
// console.log(reversecol(mat))


// 17.	Print matrix in spiral order

function Printspiral(mat) {
    let top = 0;
    let bottom = mat.length - 1;
    let left = 0;
    let rig = mat[0].length - 1;

    let result = [];

    while (top <= bottom && left <= rig) {

        // top row
        for (let i = left; i <= rig; i++) {
            result.push(mat[top][i]);
        }
        top++;

        // right column
        for (let i = top; i <= bottom; i++) {
            result.push(mat[i][rig]);
        }
        rig--;

        // bottom row
        if (top <= bottom) {
            for (let i = rig; i >= left; i--) {
                result.push(mat[bottom][i]);
            }
            bottom--;
        }

        // left column
        if (left <= rig) {
            for (let i = bottom; i >= top; i--) {
                result.push(mat[i][left]);
            }
            left++;
        }
    }

    return result.join(" ");
}
console.log(Printspiral(mat))

// 18.	Print matrix in zig-zag order

function zigzag(mat){
    let result=[];

    for(let i=0;i<mat.length;i++){
        if(i%2===0){
            for(let j=0;j<mat[i].length;j++){
                result.push(mat[i][j])
            }
        }else{
            for(let j=mat.length-1;j>=0;j--){
                result.push(mat[i][j])
            }
        }
    }
    return result.join(" ")
}
console.log(zigzag(mat))

// 19.	Print matrix in wave form (row-wise & column-wise)
    function waveform(mat){
        let res =[]
        for(let j=0;j<mat.length;j++){
            if(j%2===0){
                for(let i=0;i<mat[j].length;i++){
                    res.push(mat[i][j])
                }
            }else{
                for(let i=mat.length-1;i>=0;i--){
                    res.push(mat[i][j])
                }
            }
        }
        return res.join(" ")
    }
    console.log(waveform(mat))
// 20.	Rotate matrix 90° clockwise

function rotatemat(mat){
    let n=mat.length;

    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            [mat[i][j],mat[j][i]]=[mat[j][i],mat[i][j]]
        }
    }
    for(let i=0;i<n;i++){
        mat[i].reverse()
    }
    return mat

}
console.log(rotatemat(mat))

// 21.	Rotate matrix 90° anti-clockwise

function anitclock(mat){
    let N=mat.length;

    for(let i=0;i<N;i++){
        for(let j=i;j<N;j++){
            [mat[i][j],mat[j][i]]=[mat[j][i],mat[i][j]]
        }
    }

let top=0,bottom=N-1;
while(top<bottom){
    for(let i=0;i<N;i++){
        [mat[top][i], mat[bottom][i]] =
            [mat[bottom][i], mat[top][i]];
    }
    top++
    bottom--
}
return mat;
}
console.log(anitclock(mat))

// 22.	Check if a matrix is symmetric
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
function symmetricMatrix(matrix){
    const n=matrix.length;

    // check if the matrix is squre or not
    for(let i=0;i<n;i++){
        if(matrix[i].length !== n){
            return false
        }
    }
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            if(matrix[i][j]!==matrix[j][i]){
                return false
            }
        }
    }
    return true

}
console.log(symmetricMatrix(matrix))

// 23.	Add two matrices

let A = [
    [1, 2, 3],
    [4, 5, 6]
];

let B = [
    [7, 8, 9],
    [1, 2, 3]
];



function AddMatrix(A,B){
    const rows=A.length
    const cols=A[0].length;

    if(rows!==B.length || cols!==B[0].length){
        return "matrix cannot be added"
    }

    let result=[]
    for(let i=0;i<rows;i++){
        result[i]=[]
        for(let j=0;j<cols;j++){
            result[i][j] = A[i][j]+ B[i][j]
        }

    }
    return result
}
console.log(AddMatrix(A,B))


// 24.	Subtract two matrices

function SubstractMatrix(A,B){
    const rows=A.length
    const cols=A[0].length;

    if(rows!==B.length || cols!== B[0].length){
        return "cannot be substract"
    }

    let res=[]
    for(let i=0; i<rows;i++){
        res[i]=[]
        for(let j=0;j<cols;j++){
            res[i][j]=A[i][j]-B[i][j]
        }
    }
    return res
}
console.log(SubstractMatrix(A,B))

// 25.	Multiply two matrices
function SubstractMatrix(A,B){
    const rows=A.length
    const cols=A[0].length;

    if(rows!==B.length || cols!== B[0].length){
        return "cannot be substract"
    }

    let res=[]
    for(let i=0; i<rows;i++){
        res[i]=[]
        for(let j=0;j<cols;j++){
            res[i][j]=A[i][j]*B[i][j]
        }
    }
    return res
}
console.log(SubstractMatrix(A,B))

// 26.	Find row with maximum sum

function rowWithMaxSum(matrix) {
    let maxSum = -Infinity, idx = -1;

    matrix.forEach((row, i) => {
        const sum = row.reduce((a, b) => a + b, 0);
        if (sum > maxSum) {
            maxSum = sum;
            idx = i;
        }
    });

    return {
        rowIndex: idx,
        sum: maxSum
    } 
}
console.log(rowWithMaxSum(matrix))


// 27.	Find column with maximum sum
function colWithmaxsum(matrix){
    
    let maxsum=-Infinity
    let index=-1;

   for (let j = 0; j < matrix[0].length; j++){
         let sum = matrix.reduce((acc, row) => acc + row[j], 0);
        if(sum>maxsum){
            maxsum=sum
            index=j
        }
    };

    return {
        colIndex: index,
        sum: maxsum
    }
}
console.log(colWithmaxsum(matrix))


// 28.	Check if matrix is identity matrix

function isIdentityMatrix(matrix) {
    const n = matrix.length;

    // check square matrix
    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n) {
            return false;
        }
    }

    // check identity conditions
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j && matrix[i][j] !== 1) {
                return false;
            }
            if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }

    return true;
}

// 29.	Check if matrix is diagonal matrix

function isDiagonalMatrix(matrix) {
    const n = matrix.length;

    // check square matrix
    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n) {
            return false;
        }
    }

    // check diagonal condition
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }

    return true;
}

