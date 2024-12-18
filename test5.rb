# Start with an array of numbers and create a new array with each number times 3.
# For example, [1, 2, 3] becomes [3, 6, 9].

arr = [1, 2, 3]
new_numbers = []

arr.each do |x|
  new_numbers << x * 3
end
pp new_numbers

arr1 = [1, 2, 3]
new_numbers1 = []

for x in arr1
  new_numbers1 << x * 3
end
pp new_numbers1

arr2 = [1, 2, 3]
