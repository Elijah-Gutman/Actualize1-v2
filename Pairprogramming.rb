foods = []

5.times do
  food = gets.chomp
  foods << food
end

p foods

# # index = 0
# # while index < foods.length
# #   if index != index + 1
# #     puts [index + 1].to_s + "." + " " + foods[index]
# #     index = index + 1
# #   end
# # end

# # count = 0
# # while count < 10
# #   count = count + 1
# #   puts count
# # end

# #

# # If Sam can make crepes or Sally can speak French, they should marry. Based on the above arrays, print out a message describing whether or not they should marry.
# Sams_recipes = ["chicken", "Pizza", "hotdogs", "crepes"]
# Sally_languages = ["urdue", "english", "latin", "spanish", "german", "greek", "French"]

# if Sams_recipes.size > 2
#   if Sally_languages.size > 5
#     puts "they should date"
#   end
# end

# if Sams_recipes.include?("crepes")
#   if Sally_languages.include?("French")
#     puts "they should marry"
#   end
# end

# # Create a banking program that asks the user 5 times to enter a first name, last name, and email. This information should be stored as an array of hashes.

# # Each person should automatically be given an account number which is a randomized ten digit number.

# # After the user is finished, the program should print out all the users. For example:

# ## Incomplete \/\/\/
# class User_inputs
#   attr_writer :single_value
#   attr_reader :single_value

#   def initialize(single_value)
#     @single_value = single_value
#   end
# end

# user = User_inputs.new([{ firstname: "joan", lastname: "Joans", email: "joanJoans@gmail.com", acctnumber: 2372041038 }])
