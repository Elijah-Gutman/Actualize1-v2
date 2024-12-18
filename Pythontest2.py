numbs = range(1, 100)

def is_prime1(num):
    if num < 2:
        return False  
    for x in range(2, num):
        if (num % x) == 0:
            return False  
    return True  

primes1 = list(filter(is_prime1, numbs))
print(primes1)
from math import floor, sqrt
nums = range(1, 100)
def is_prime(num):
    if num == 1 or num == 0:
        return False
    for x in range(2, floor(sqrt(num)) +1):
        if num % x == 0:
            return False
    return True

primes = list(filter(is_prime, nums))
print(primes)