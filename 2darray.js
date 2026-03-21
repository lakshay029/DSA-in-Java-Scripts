//creating a matrix
function forloop(row,col,def){
    let matrix=[]

    for(let i=0;i<row;i++){
        matrix[i]=[]
        for(let j=0;j<col;j++){
            matrix[i][j]=def;
        }
    }
    return matrix;
}
console.log(forloop(3,3,2))

//method fill and map

function fillMap(row,col,def){
    return Array(row).fill().map(()=>Array(col).fill(def))
}
console.log(fillMap(3,4,5))

//star alternate pattern
function altParttern(n){
    if(n<3 || n>50){
        return "invaild input"
    }

    for(let i=1;i<=n;i++){
        let space =n-i;

        let symbols= 2*i-1;

        let symbol=(i%2===0)?'#':'*';

        const row= ' '.repeat(space)+symbol.repeat(symbols);
        console.log(row)
    }
}
altParttern(4)










