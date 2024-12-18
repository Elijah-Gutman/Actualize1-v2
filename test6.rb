# Start with an array of strings and create a new array with each string upcased.
# For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

arr = ["hello", "goodbye"]
index = 0
arr2 = []

while index < arr.length
  uppercase = arr[index]
  arr2 << uppercase.upcase
  index = index + 1
end
pp arr2

arr3 = ["hello", "goodbye"]

new_arr = arr3.map { |x| x.upcase }
pp new_arr
