# C. Use hashes with symbols to represent the following scenario:
# C.1 - You are the owner of a store that sells items (you decide what specifically). Each item has various properties such as color, price, etc.
# C.2 - Represent 3 items using hashes. Each hash should have the same keys with different values.
# C.3 - Be sure to use symbols for the keys. Try creating hashes using both types of hash symbol syntaxes. (Ruby syntax {:a => 123} vs. “JavaScript” syntax {a: 123}).
# Bonus: Read more about Ruby array and hash methods. Explore using different methods in your code.
# https://ruby-doc.org/core/Array.html
# https://ruby-doc.org/core/Hash.html
# https://ruby-doc.org/core/Symbol.html
# Bonus:
# Try to represent the same store items using a class!
item1 = { item: "Gun", price: 300, color: "black" }
item2 = { item: "Car", price: 33200, color: "blue" }
item3 = { :item => "booze", :price => 33, :color => "brown" }

pp item3[:item]

# Exercise:
# Rewrite your store items using a class instead of a hash.
# a) Choose which attributes should have “reader” methods and which attributes should have “writer” methods.
# b) Create an instance from your store item class. Use puts statements to print the 3 attributes individually to the terminal.
# c) Use the attr_writer method to change a value
# Bonus: Read more about Ruby classes: https://ruby-doc.com/core/Class.html
class Store_Items
  attr_writer :item, :price, :color
  attr_reader :item, :price, :color

  def initialize(item, price, color)
    @item = item
    @price = price
    @color = color
  end
end

item_list1 = Store_Items.new("gun", 300, "black")
item_list2 = Store_Items.new("car", 33200, "blue")
item_list3 = Store_Items.new("booze", 33, "brown")

pp item_list1
