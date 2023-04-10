def generate_output(x, y, z):
    yield 'hello'
    yield x
    if x ** y > z:
        yield 'higher than expected'
    else:
        yield str(x ** y)
    yield 'done'

x = int(input("Enter x: "))
y = int(input("Enter y: "))
z = int(input("Enter z: "))

for output in generate_output(x, y, z):
    print(output)
