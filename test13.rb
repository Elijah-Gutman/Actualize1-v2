hackerrank = Hash.new
hackerrank.default = 0
hackerrank.store(543121, 100)
hackerrank.keep_if { |key, value| key.is_a? Integer }
hackerrank.delete_if { |key, value| key.even? }

def iter_hash(hash)
  # your code here
  hash.each do |key, val|
    puts key
    puts val
  end
end
