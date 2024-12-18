# Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
# For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].
#
arr = ["a", "b", "c", "d"]
arr1 = []
index1 = 0

while index1 < arr.length
  index2 = 0
  while index2 < arr.length
    if index1 != index2
      arr1 << arr[index1] + arr[index2]
    end
    index2 += 1
  end
  index1 += 1
end
pp arr1

# Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
# For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].
#
letters1 = ["a", "b", "c"]
letters2 = ["d", "e", "f", "g"]
new_array = []
index1 = 0

while index1 < letters1.length
  index2 = 0
  while index2 < letters2.length
    new_array << letters1[index1] + letters2[index2]
    index2 += 1
  end
  index1 += 1
end
pp new_array
