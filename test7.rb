# Start with an array of numbers and compute the the minimum number.
# For example, [5, 10, 8, 3, 9] becomes 3.
#
# arr = [5, 10, 8, 3, 9]
# min_number = arr[0]
# index = 0

# while index < arr.length
#   number = arr[index]
#   if number < min_number
#     min_number = number
#   end
#   index += 1
# end
# p min_number

arr1 = [5, 10, 8, 3, 9]
minimum = arr1.reduce(arr1[0]) do |min, number|
  if number < min
    number
  else
    min
  end
end
p minimum
