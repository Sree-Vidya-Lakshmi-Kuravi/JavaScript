Build a Golf Score Translator
-----------------------------
You should create a function named golfScore.
golfScore should take two numeric arguments, which are the par for the course and the amount of strokes made.
golfScore should return a string.
golfScore should return "Hole-in-one!" if strokes is 1.
golfScore should return "Eagle" if strokes is less than or equal to par minus 2.
golfScore should return "Birdie" if strokes is equal to par minus 1.
golfScore should return "Par" if strokes is equal to par.
golfScore should return "Bogey" if strokes is equal to par plus 1.
golfScore should return "Double Bogey" if strokes is equal to par plus 2.
golfScore should return "Go Home!" if strokes is greater than or equal to par plus 3.

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  }

  else if (strokes <= par-2) {
    return names[1];
  }

  else if (strokes == par-1) {
    return names[2];
  }

  else if (strokes == par) {
    return names[3];
  }

  else if (strokes == par+1) {
    return names[4];
  }

  else if (strokes == par+2) {
    return names[5];
  }
  else if (strokes >= par+3) {
    return names[6];
  }
}
