// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
  printInfo() {
    console.log(`The song ${this.name} by ${this.artist} has a duration of ${this.duration}`);
  }
}
var song = new Song("Heavy", "Korn", "3:33");
song.printInfo();
