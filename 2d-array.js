// 1.	Print a 2D array row-wise
let arr=[[1,2,3],[4,5,6],[7,8,9]];

function Rowwise(array){
    for(let i=0;i<arr.length;i++){
        let row=''
        for(let j=0;j<arr[i].length;j++){
            row+=arr[i][j]+" "
        }
        console.log(row.trim())
    }
}
Rowwise()


// 2.	Print a 2D array column-wise
 function Rowcolumn(arr){
    for(let i=0;i<arr.length;i++){
        let col=' ';
        for(let j=0;j<arr[i].length;j++){
            col+=arr[j][i]+" "
        }
        console.log(col.trim())
    }
 }
 Rowcolumn(arr)

//  3.	Find the sum of all elements in a 2D array
function Sumofele(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
    }
    return sum;
}
console.log(Sumofele(arr))

// 4.	Find the maximum element in a 2D array
function Maxele(arr){
    let max=-Infinity;
    for(let i =0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]>max){
                max=arr[i][j]
            }
        }
    }
    return max;
}
console.log(Maxele(arr))

// 5.	Find the minimum element in a 2D array
function Minele(arr){
    let min=Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j =0;j<arr[i].length;j++){
            if(arr[i][j]<min){
                min=arr[i][j]
            }
        }
    }
    return min;
}
console.log(Minele(arr))

// 6.	Count total elements in a matrix

function Counttotal(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            count++;
        }
    }
    return count;
}
console.log(Counttotal(arr))

// 7.	Print the diagonal elements of a square matrix

function diagonal(arr){
    let result=''
    for(let i=0;i<arr.length;i++){
        result+=arr[i][i]+" "
    }
    return result;
}
console.log(diagonal(arr))

// 8.	Find the sum of each row

 function Sumofrow(arr){
     for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j]
    }
    console.log(sum)
}

}
Sumofrow(arr)

// 9.	Find the sum of each column

function colSum(arr){
    for(let i=0;i<arr.length;i++){
        let colsum=0;
        for(let j=0;j<arr.length;j++){
            colsum+=arr[j][i]
        }
        console.log(colsum)
    }
}
colSum(arr)

// 10.	Check if a matrix is square or rectangular

function Findmatrix(arr){
    let row=arr.length;
    let coloum=arr[0].length;

    for(let i=0;i<row;i++){
        if(arr[i].length!==coloum){
           return "not a vaild matrix"
        }
    }
    if(row===coloum){
        return "square matrix"
    }else{
        return "rectanlge"
    }
}
console.log(Findmatrix(arr))

// 11.	Search an element in a 2D array

function Searchele(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]===target){
                return `row ${i} and col ${j}`
            }
        }
    }
}
console.log(Searchele(arr,4))


// 12.	Count even and odd numbers in a matrix
function Oddeven(arr) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }

    return { even, odd };
}
console.log(Oddeven(arr))


// 13.	Print boundary elements of a matrix

function BoundaryMatrix(arr){
    let row=arr.length;
    let col=arr[0].length;

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(
                i===row ||
                i===row-1||
                j===col||
                j===col-1
            ){
                process.stdout()
            }
        }
    }
}




