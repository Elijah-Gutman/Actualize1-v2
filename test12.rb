# Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

# Example

# The minimum sum is  and the maximum sum is . The function prints

# 16 24

arr = [1, 3, 5, 7, 9]

index = 0
number = 0
minsum = 0
maxsum = 0

while index < arr.length - 1
  if arr[index] > number
    number = arr[index]
    minsum = minsum + number
  end
  index = index + 1
end
number1 = 0
index1 = 0

while index1 < arr.length
  if arr[index1] != 1
    if arr[index] > number1
      number1 = arr[index1]
      maxsum = maxsum + number1
    end
  end
  index1 = index1 + 1
end

puts minsum
puts maxsum
