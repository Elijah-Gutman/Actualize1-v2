# Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
# For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

# hash = { 321 => { name: "Alice", age: 31 }, 322 => { name: "Maria", age: 27 } }

# hash1 = { "hello" => 1 }
# puts hash[321][:name]

# puts hash1
# empty_hash = {}

# empty_hash.push(hash1["hello"][:id])

people = { 321 => { name: "Alice", age: 31 }, 322 => { name: "Maria", age: 27 } }
people_array = []
people.each do |id, person|
  person[:id] = id
  people_array << person
end
p people_array

# Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
# For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

do_array = ["do", "or", "do", "not"]
index = 0
do_hash = {}

puts do_array.tally
## or

words = ["do", "or", "do", "not"]
word_frequencies = {}
index = 0
while index < words.length
  word = words[index]
  if word_frequencies[word] == nil
    word_frequencies[word] = 0
  end
  words_frequencies[word] = 0
  word_frequencies[word] += 1
  index = index + 1
end
p word_frequencies
