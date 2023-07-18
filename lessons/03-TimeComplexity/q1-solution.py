def solution(X, Y, D):
    v = (Y - X) // D
    if X + v * D >= Y:
        return v
    else:
        return v+1

print(solution(10, 85, 30))