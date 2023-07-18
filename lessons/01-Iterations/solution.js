function solution(N) {
    let binary = N.toString(2);
    const arrayofMax = [];
    let counts = 0;

    for(let i of binary) {
        if (i === "0") {
            counts++;
        } else {
            arrayofMax.push(counts);
            counts = 0;
        }
    }
    
    const result = Math.max(...arrayofMax);
    console.log(result);
    
}

solution(8769);