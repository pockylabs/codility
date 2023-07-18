// NOT EFFICIENT

function solution(A) {
    let number;
    for(let i = 0; i < A.length; i++) {
        for(let j = i+1; j < A.length; j++) {
            if(A[i] === A[j]) {
                continue;
            } else {
                number = A[i];
            }
        }
    }

    console.log(number);
    
}

solution([9, 3, 9, 3, 9, 7, 9])