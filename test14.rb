test_string = "(var x = {y: [1, 2, 3]})"
stack = []
open_brackets = ["(", "{", "["]
close_brackets = [")", "}", "]"]
matching_open_braces = { ")" => "(", "}" => "{", "]" => "[" }
index = 0

while index < test_string.length
  letter = test_string[index]
  if open_brackets.include?(letter)
    stack.push(letter)
  end
  if close_brackets.include?(letter)
    if matching_open_braces[letter] == stack.last
      stack.pop
    else
      puts "Unbalanced brackets"
      break
    end
  end
  index += 1
end
if stack.length > 0
  puts "Unbalanced brackets"
else
  puts "Balanced brackets"
end

class PrintManager
  def initliaze
    @queue = []
  end

  def queue_print_job(document)
    @queue.push(document)
  end

  def run
    while @queue.any?
      #the ruby shift method removes the first element of the array and returns it
      print(@queue.shift)
    end
  end

  private

  def print(document)
    #code to run the actual printer goes here
    # for demo purposes we'll print to the terminal
    puts document
  end
end

print_manager = PrintManager.new

print_manager.queue_print_job("First Document")
print_manager.queue_print_job("Second Document")
print_manager.queue_print_job("Third Document")
print_manager.run
