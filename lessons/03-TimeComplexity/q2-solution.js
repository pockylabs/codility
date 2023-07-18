// Got 50% performance

function solution(A) {

    if(A.length === 0) {
        return 1;
    }

    A = A.sort();
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] != (i + 1)) {
            return i + 1;
        }
    }

    return A.length + 1;

}

console.log(solution([2, 3, 1, 5]));