# Convert an array of arrays into a hash.
# For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

arr = [[1, 3], [8, 9], [2, 16]]
index1 = 0
hash = {}

while index1 < arr.length
  key = arr[index1][0]
  value = arr[index1][1]
  hash[key] = value
  index1 += 1
end
pp hash
