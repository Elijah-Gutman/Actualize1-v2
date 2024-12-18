import random

class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []

    def add_song(self, song):
        self.songs.append(song)

    def remove_song(self, song):
        if song in self.songs:
            self.songs.remove(song)

    def shuffle(self):
        random.shuffle(self.songs)

    def display_playlist(self):
        print(f"Playlist: {self.name}")
        print("Songs in the playlist:")
        for song in self.songs:
            print("- " + song)

playlist = Playlist("My Playlist")
playlist.add_song("Song 1")
playlist.add_song("Song 2")
playlist.add_song("Song 3")
playlist.display_playlist()
playlist.remove_song("Song 2")
playlist.display_playlist()
playlist.shuffle()
playlist.display_playlist()