# Use a nested loop to convert an array of string arrays into a single string.
# For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

# arr1 = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]]
# arr2 = arr1.flatten

## Below is the much more elegant solution
# index = 0
# str = " "

# while index < arr2.length
#   str << arr2[index]
#   index += 1
# end

# pp str
# here is the strict answer the the problem being provided
arr1 = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]]
str = ""
index1 = 0

while index1 < arr1.size
  index2 = 0
  while index2 < arr1[index1].size
    str = str + arr1[index1][index2]
    index2 += 1
  end

  index1 += 1
end

pp str
