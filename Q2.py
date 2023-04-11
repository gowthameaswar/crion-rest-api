def chng(result):
    num = 0
    for ch in result:
        if ch == '0':
            num *= 10
        else:
            num = (num * 10) + 1
    return num

def solve(n):
    result = []
    while n > 0:
        max_num = chng(str(n))
        n -= max_num
        result.append(max_num)
    result.sort(reverse=True)
    print('+'.join(map(str, result)))
n = int(input())
result = solve(n)

