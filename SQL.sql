SELECT title FROM movies;
SELECT director FROM movies;
SELECT title, director FROM movies; 
SELECT title, director FROM movies; 
SELECT * FROM movies; 


SELECT id, title FROM movies 
WHERE id = 6;
SELECT id, title FROM movies 
WHERE id = 6;
SELECT title, year FROM movies
WHERE year < 2000 OR year > 2010;
SELECT title, year FROM movies
WHERE year <= 2003;


SELECT title, year FROM movies
WHERE year <= 2003;
SELECT title, year FROM movies
WHERE year <= 2003;
SELECT title, director FROM movies 
WHERE director != "John Lasseter";
SELECT * FROM movies 
WHERE title LIKE "%WALL%";

SELECT DISTINCT director FROM movies
ORDER BY director ASC;
SELECT title, year FROM movies
ORDER BY year DESC
LIMIT 4;
SELECT title, year FROM movies
ORDER BY title ASC
LIMIT 5;
SELECT title FROM movies
ORDER BY title ASC
LIMIT 5 OFFSET 5;
