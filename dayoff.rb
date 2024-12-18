# Given a hash, create a new hash that has the keys and values switched.
# For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.
#

original_hash = { "a" => 1, "b" => 2, "c" => 3 }
flipped_hash = {}

original_hash.each do |key, value|
  flipped_hash[value] = key
end

PP flipped_hash
