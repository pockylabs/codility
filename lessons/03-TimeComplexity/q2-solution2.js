// Got 100% performance

function solution(A) {
    
    let size = A.length;
    let sum = (size + 1) * (size + 2) / 2;
    for (i = 0; i < size; i++) {
        sum -= A[i];
    }
    return sum;
}

console.log(solution([2, 3, 1, 5]));