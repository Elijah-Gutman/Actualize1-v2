require "spacex_api"
data2 = SpacexApi.client.capsules
Big_data = SpacexApi.client.capsules
# pp Big_data
# pp Big_data[0]["id"]
while true
  print "Enter a number and see whats happening with that capsule!"
  index = gets.chomp.to_i
  if Big_data[index]["water_landings"] >= 0
    new_data = Big_data[index]["last_update"]
  end
  pp new_data
  puts "if you've had enough information type q"
  quit = gets.chomp
  if quit == "q"
    system "clear"
  end
  return
end

# capsule = SpacexApi.client.capsules.first
# pp capsule["id"]
# data
# data2
# company_info = SpacexApi.client.company_info
# employees = company_info.employees
# pp employees
