function solution(A, K) {
    const newArr = new Array(A.length)
    for(let i = 0; i < A.length; i++) {
        newArr[(i + K) % A.length] = A[i];
    }

    console.log(newArr);
    
}

solution([3, 8, 9, 7, 6], 3)