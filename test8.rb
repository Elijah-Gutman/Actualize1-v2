# Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

# If the age is 12 years old or younger, the ticket price is $5.
# If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
# If the customer is 60 years old or older, the ticket price is $7.

puts " How old are you?"
age = gets.chomp.to_i
puts "What time is your movie?"
time = gets.chomp.to_i

if age < 12
  puts "Tickets will be 5$"
elsif age >= 13 && age <= 59
  if time < 6
    puts "Tickets will be 7$"
  else
    puts "Tickets will be 10$"
  end
elsif age >= 60
  puts "Tickets will be 7$"
end
