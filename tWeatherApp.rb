require "http"
list = ["chicago", "new york", "san fransisco", "los angeles", "boston"]
puts "Welcome to the weather app!"
while true
  print "What city are you in? (enter q to quit program): "
  city = gets.chomp.downcase
  if city == "q"
    system "clear"
    puts "See you later!"
    return
  elsif !list.include?(city)
    puts "Type in a valid city from \"chicago\", \"new york\", \"san fransisco\", \"los angeles\", \"boston\""
  else
    response = HTTP.get("https://api.openweathermap.org/data/2.5/weather?q=#{city}&units=imperial&appid=#{ENV["OPEN_WEATHER_API_KEY"]}")
    data = response.parse
    temp = data["main"]["temp"]
    description = data["weather"][0]["description"]
    puts "The temperature in #{city} is #{temp} with #{description}"
    lat = data["coord"]["lat"]
    lon = data["coord"]["lon"]
    response2 = HTTP.get("https://api.openweathermap.org/data/2.5/forecast?lat=#{lat}&lon=#{lon}&appid=#{ENV["OPEN_WEATHER_API_KEY"]}&units=imperial")
    data2 = response2.parse
    # print "The Temperature for the next 3 days will be "
    n = 1
    print "The Temperature and the weather for the next 3 days will be "
    3.times do
      temp_future = data2["list"][3 * n]["main"]["temp"]
      future_weather = data2["list"][3 * n]["weather"][0]["main"]
      print "#{temp_future}  and"
      print "#{future_weather} weather. And then tomorrow"
      n += 1
    end
    puts
    if description == "rain"
      puts ":rain_cloud::rain_cloud::rain_cloud:"
    elsif description == "sunny"
      puts ":sun_with_face::sun_with_face::sun_with_face:"
    elsif description == "clear sky"
      puts ":cityscape::cityscape::cityscape:"
    end
  end
end
