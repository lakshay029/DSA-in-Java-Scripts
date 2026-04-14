// 1.	Print a 2D array row-wise

const array=[[1,2,3],[4,5,6],[7,8,9]]
function Rowwise(array){
    for(let i=0;i<array.length;i++){
        let row=''
        for(let j=0;j<array[i].length;j++){
            row+=array[i][j]+' '
        }
        console.log(row);
    }
}
Rowwise(array)

// 2.	Print a 2D array column-wise
function Coloumwise(array){
    for(let i=0;i<array.length;i++){
        let col=''
        for(let j=0;j<array[i].length;j++){
            col+=array[j][i]+' '
        }
        console.log(col)
    }
}
Coloumwise(array)


// 3.	Find the sum of all elements in a 2D array
function Sumofmatrix(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            sum+=array[i][j]
        }
    }
    console.log(sum)
}
Sumofmatrix(array)

// 4.	Find the maximum element in a 2D array
function Maximum(array){
    let max=-Infinity;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(max<array[i][j]){
                max=array[i][j]
            }
        }
    }
    return max;

}
console.log(Maximum(array))


// 5.	Find the minimum element in a 2D array

function Minimum(array){
    let min=Infinity;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(min>array[i][j]){
                min = array[i][j]
            }
        }
    }
    return min;
}
console.log(Minimum(array))

//6. count total element in a matrix

function totalele(array){
    let count =0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            count++
        }
    }
    return count;
}
console.log(totalele(array))

// 7.	Print the diagonal elements of a square matrix
function printdaigonal(array){
    let result=''
    for(let i=0;i<array.length;i++){
        result+=array[i][i]+' '
    }
    return result;
}
console.log(printdaigonal(array))

//8. Find the sum of each row
function Rowsum(array){
    let sum =0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            sum+=array[i][j]
        }
    }
    return sum
}
console.log(Rowsum(array))

// 9.	Find the sum of each column
function colsum(array){
    let Sum=0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            Sum+=array[j][i]
        }
    }
    return Sum
}
console.log(colsum(array))

// 10.	Check if a matrix is square or rectangular
function MAtrixcheck(array){
    let row=array.length;
    let col=array[0].length;

    for(let i=0;i<array.length;i++){
        if(array[i].length!==col){
            return "invaild matrix"
        }
    }
    if(row===col){
        return "its a square matrix"
    }else{
        return "its a rectangle"
    }
}
console.log(MAtrixcheck(array))

// 11.	Search an element in a 2D array
function Searchele(array,target){
    for(let i =0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]===target){
                return `row ${i} col ${j}`
            }
        }
    }
}
console.log(Searchele(array,6))

// 12.	Count even and odd numbers in a matrix
function EvenOdd(array){
    let even=0;
    let odd=0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]%2===0){
                even++
            }else{
                odd++
            }
        }
    }
    return {even,odd} ;
}
console.log(EvenOdd(array))

// 13.	Print boundary elements of a matrix
function boundaryele(array){
    let row=array.length;
    let col=array[0].length;
    let result=[]
    for(let i =0;i<row;i++){
        for(let j=0;j<col;j++){
            if(
                i===0||i===row-1||j===0||j===col-1
            ){
                result.push(array[i][j])
            }
        }
    }
    return result
}
console.log(boundaryele(array))



