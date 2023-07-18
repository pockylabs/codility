def solution(N):
    N = bin(N)[2:]
    counter = 0
    maxCounter = 0
    for k in N:
        if int(k) == 0:
            counter+=1
        elif int(k) == 1:
            maxCounter = max(counter, maxCounter)
            counter = 0

    return maxCounter

print(solution(8769))