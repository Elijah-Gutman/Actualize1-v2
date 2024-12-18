require "http"

response = HTTP.get("https://api.openweathermap.org/data/2.5/weather?q=Chiago&units=imperial&appid=#{ENV["OPEN_WEATHER_API_KEY"]}")
data = response.parse

response2 = HTTP.get("https://api.openweathermap.org/data/2.5/forecast?lat=41.85&lon=-87.65&appid=ff8c16856be9c1b3dc24d2581976486b&units=imperial")
data2 = response2.parse

pp data2["list"][2]["weather"][0]["main"]
