# Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

# If the destination is domestic:
# If the weight is less than or equal to 1 kg, the shipping fee is $5.
# If the weight is greater than 1 kg, the shipping fee is $10.
# If the destination is an international shipment:
# If the weight is less than or equal to 1 kg, the shipping fee is $15.
# If the weight is greater than 1 kg, the shipping fee is $25.
puts "Is the order domestic or international?"
order = gets.chomp
puts "and how much does the order weight in KG"
weight = gets.chomp.to_i
if order == "domestic"
  if weight <= 1
    puts "the shipping fee is 5$"
  elsif weight > 1
    puts "the shipping fee is 10$"
  end
end
if order == "international"
  if weight <= 1
    puts "the shipping fee is 15$"
  elsif weight > 1
    puts "the shipping fee is 25$"
  end
end
