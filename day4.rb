require "http"

response = HTTP.get("https://data.cityofchicago.org/resource/xzkq-xp2w.json")
data = response.parse.to_s
data2 = data.scan(/\d+/)

index = 0
data3 = []
data5 = []
while index < data2.length
  data3 = data2[index]
  data4 = data3.to_i
  if data4 >= 8
    data5 << data4
  end
  index = index + 1
end
data6 = data5.sum.to_f / data5.size
pp data6

# index = 0
# data3 = []

# while index < data2.length
#   if data2[index] > 100000
#     data3 << data2[index]
#   end
#   index = index + 1
# end

# pp data3

# index = 0

# while index < data.size
#   salaries = "#{data[index]["annual_salary"]}"
#   index += 1
# end
# pp salaries
