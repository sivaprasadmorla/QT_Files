inp = "LVIII"
result = 0
dict1 ={
    "M":1000,
    "CM":900,
    "D":500,
    "CD":400,
    "C":100,
    "XC":90,
    "L":50,
    "XL":40,
    "X":10,
    "IX":9,
    "V":5,
    "IV":4,
    "I":1
}
prev =0
for i in reversed(inp):
    curr = dict1[i]
    if curr >= prev:
        result+=curr
    else:
        result-=curr
    prev = curr

print(result)