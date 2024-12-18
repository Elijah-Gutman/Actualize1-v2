require "sqlite3"
require "tty-table" ### loading dependancies (exeterior databases/programs)

db = SQLite3::Database.open "employee.db"  #create a database called employee.db
db.execute "CREATE TABLE IF NOT EXISTS employees(id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, salary INTEGER, active INTEGER)" # create a table with the folowing values being asked for the user to fill in: INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, salary INTEGER, active INTEGER

while true
  system "clear"    #start with no values in the table
  results = db.query "SELECT * FROM employees"  # search for all "employee values" inside the database
  header = ["id", "first_name", "last_name", "salary", "active"] # empty data slots to be filled in by the user
  rows = results.to_a #set the value of rows to be an array
  table = TTY::Table.new header, rows #load the table from the tty gem dependancy
  puts table.render(:unicode) # displays the table
  puts "EMPLOYEES (#{rows.length} total)" # display the values of the employee in the
  print "[C]reate [R]ead [U]pdate [D]elete [Q]uit:"
  input_choice = gets.chomp.downcase
  if input_choice == "c"
    print "First name: "
    input_first_name = gets.chomp
    print "Last name: "
    input_last_name = gets.chomp
    print "Salary: "
    input_salary = gets.chomp.to_i
    db.execute "INSERT INTO employees (first_name, last_name, salary, active) VALUES (?, ?, ?, ?)", [input_first_name, input_last_name, input_salary, 1]
  elsif input_choice == "r"
    print "Employee id: "
    input_id = gets.chomp.to_i
    results = db.query "SELECT * FROM employees WHERE id = ?", input_id
    first_result = results.next
    puts "Id: #{first_result[0]}"
    puts "First name: #{first_result[1]}"
    puts "Last name: #{first_result[2]}"
    puts "Salary: #{first_result[3]}"
    puts "Active: #{first_result[4]}"
    puts
    print "Press enter to continue"
    gets.chomp
  elsif input_choice == "u"
    print "Employee id: "
    input_id = gets.chomp.to_i
    print "Update active status (true or false): "
    input_active = gets.chomp
    if input_active == "true"
      input_active = 1
    else
      input_active = 0
    end
    db.execute "UPDATE employees SET active = ? WHERE id = ?", [input_active, input_id]
  elsif input_choice == "d"
    puts "Delete employee"
    print "Enter employee id: "
    input_id = gets.chomp.to_i
    db.execute "DELETE FROM employees WHERE id = ?", input_id
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