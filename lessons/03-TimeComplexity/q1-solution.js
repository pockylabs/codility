// EFFICIENT SOLUTION

function solution(X, Y, D) {
    let step = Math.floor((Y - X) / D);
    if(X + step * D >= Y) {
        return step
    } else {
        return step + 1;
    }

}

console.log(solution(10, 85, 30));