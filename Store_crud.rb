require "sqlite3"
require "tty-table"

db = SQLite3::Database.open "Store.db"  #create a database called employee.db
db.execute "CREATE TABLE IF NOT EXISTS ItemNumber(id INTEGER PRIMARY KEY, item_name TEXT, item_color TEXT, cost INTEGER, InStock INTEGER)"

while true
  system "clear"
  results = db.query "SELECT * FROM ItemNumber"
  header = ["item_number", "item_name", "item_color", "cost", "InStock"]
  rows = results.to_a
  table = TTY::Table.new header, rows
  puts table.render(:unicode)
  puts "Total Items (#{rows.length} total)"
  print "[C]reate [R]ead [U]pdate [D]elete [Q]uit:"
  input_choice = gets.chomp.downcase
  if input_choice == "c"
    print "Item Name: "
    input_item_name = gets.chomp
    print "Item Color: "
    input_item_color = gets.chomp
    print "Cost: "
    input_cost = gets.chomp.to_i
    print "Amount in stock?"
    input_ammount = gets.chomp.to_i
    db.execute "INSERT INTO ItemNumber (item_name, item_color, cost, InStock) VALUES (?, ?, ?, ?)", [input_item_name, input_item_color, input_cost, input_ammount]
  elsif input_choice == "r"
    print "Item number: "
    input_id = gets.chomp.to_i
    results = db.query "SELECT * FROM ItemNumber WHERE id = ?", input_id
    first_result = results.next
    puts "Item Number: #{first_result[0]}"
    puts "Item name: #{first_result[1]}"
    puts "Item color: #{first_result[2]}"
    puts "Cost: #{first_result[3]}"
    puts "InStock: #{first_result[4]}"
    puts
    print "Press enter to continue"
    gets.chomp
  elsif input_choice == "u"
    print "Item Number: "
    input_id = gets.chomp.to_i
    print "Update Amount in Stock status (Zero or Add One): "
    input_active = gets.chomp.to_i
    if input_active == "Zero"
      input_active = 0
    else
      input_active = input_active + 1
    end
    db.execute "UPDATE ItemNumber SET InStock = ? WHERE id = ?", [input_active, input_id]
  elsif input_choice == "d"
    puts "Delete Item"
    print "Enter Item Number: "
    input_id = gets.chomp.to_i
    db.execute "DELETE FROM ItemNumber WHERE id = ?", input_id
  elsif input_choice == "q"
    system "clear"
    puts "Goodbye!"
    return
  else
    puts "Invalid choice"
    print "Press enter to continue"
    gets.chomp
  end
end
