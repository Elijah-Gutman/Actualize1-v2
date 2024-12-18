class Person
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name

    def to_s
      @last_name + " " + @first_name
    end
  end
end

tj = Person.new("Thomas", "Jefferson")
puts Person.to_s
puts tj


put "Input exam grade one:"
exam_one = gets.chomp.toi

puts 'Input exam grade two:'
exam_two = gets.chomp.to_s

puts "Input exam grade three:"
exam_3 = gets.chomp.to_i

def list_grade(exam_one, exam_two, exam_three)
  puts "Exams: #{exam_one}, #{exam_two}, #{exam_three}"
end

def average_grade(exam_one, exam_two, exam_three)
  average = (exam_one + exam_two + exam_three) / 3)
end
average = avrage_grade(exam_one, exam_two, exam_three).to_i

def letter_grade(average-grade)
  if average_grade < 59
    puts "Grade: F"
  elseif average_grade >= 60 && average_grade <= 69
    puts "Grade: D"
  elsif average_grade > 70 & average_grade <= 79
    puts 'Grade: C"
  elseif average_grade >= 80 && average_grade <= 89
    puts "Grade: B"
  elsif average_grade >= 90
    puts "Grade: A'
end

def pass_fail(average)
  if average < 59
    puts "Student is failing.
  else puts "Student is passing."
  end
end

list_grade(exam_one, exam_two, exam_three)
puts "Average": #{average}"    
lettergrade(average) 	 
pass_fail(average)