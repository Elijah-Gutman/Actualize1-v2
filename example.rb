if ARGV.empty?
  puts "Usage: ruby #{__FILE__} <file_name>"
  exit
end

# Access the first argument
file_name = ARGV[0]

puts "You provided the file: #{file_name}"

# Example: Check if the file exists
if File.exist?(file_name)
  puts "File exists! You can now process it."
else
  puts "File not found: #{file_name}"
end
