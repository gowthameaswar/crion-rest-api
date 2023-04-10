n = int(input("Enter a positive integer: "))
digits = list(str(n))

summands = []
for i, digit in enumerate(digits):
    if digit == "0":
        continue
    num_zeros = len(digits) - i - 1
    summands.append("1" + "0" * num_zeros)

min_sum_str = "+".join(summands)
print(min_sum_str)
