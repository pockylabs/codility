def solution(N):
    binary = bin(N)[2:]
    
    arrayOfMax = []
    counters = 0

    for i in binary:
        if i == "0":
            counters += 1
        elif i == "1":
            arrayOfMax.append(counters)
            counters = 0

    print(max(arrayOfMax))


solution(8769)