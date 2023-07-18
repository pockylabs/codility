// Efficient Solution

function solution(A) {
    A = A.sort();
    let number;
    for(let i = 0; i < A.length; i++) {
        if(A[i] === A[i+1]){
            i++;
        } else {
            number = A[i]
        }
    }
    console.log(number);
}

solution([9, 3, 9, 3, 9, 7, 9]);