# Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.
def main():
  laptop = [{"brand": "Apple", "model": "Macbook Pro", "year": 2020}]
  def print_attributes():
    for attr in laptop:
      print(attr["brand"], attr["model"], attr["year"], sep=", ") 
  print_attributes()

main()

def main():
  call_funct(3)
def call_funct(n):
    for _ in range(n):
      print("#")
main()

def main():
  print_square(3)

def print_square(size):
  for i in range(size):
    print_row(size)

def print_row(width):
  print("#" * width)

main()