var age = 50;
var time = 12;
var ticket_price;
if (age <= 12) {
  ticket_price = 5;
} else if (age > 13 && age <= 59) {
  if (time < 18) {
    ticket_price = 7;
  } else {
    ticket_price = 10;
  }
} else if (age >= 60) {
  ticket_price = 7;
}

console.log(`${ticket_price}`);
